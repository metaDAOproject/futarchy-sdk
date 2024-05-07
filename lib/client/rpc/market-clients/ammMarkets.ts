import { FutarchyAmmMarketsClient } from "@/client";
import { enrichTokenMetadata } from "@/tokens";
import { calculateMaxWithSlippage, calculateMinWithSlippage } from "@/trading";
import { TransactionSender } from "@/transactions";
import { TokenWithBalance } from "@/types";
import {
  AddLiquiditySimulationResponse,
  AmmMarket,
  AmmMarketFetchRequest,
  LiquidityAddError,
  SwapPreview,
} from "@/types/amm";
import { BN, Program, Provider } from "@coral-xyz/anchor";
import {
  AMM_PROGRAM_ID,
  AmmAccount,
  AmmClient,
  PriceMath,
  SwapType,
  getAmmAddr,
  getAmmLpMintAddr,
} from "@metadaoproject/futarchy-ts";
import { Amm as AmmIDLType } from "@metadaoproject/futarchy-ts/dist/types/amm";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { AccountInfo, PublicKey } from "@solana/web3.js";

export class FutarchyAmmMarketsRPCClient implements FutarchyAmmMarketsClient {
  private rpcProvider: Provider;
  private amm: Program<AmmIDLType>;
  private ammClient: AmmClient;
  private transactionSender: TransactionSender | undefined;

  constructor(
    rpcProvider: Provider,
    amm: Program<AmmIDLType>,
    ammClient: AmmClient,
    transactionSender: TransactionSender | undefined
  ) {
    this.rpcProvider = rpcProvider;
    this.amm = amm;
    this.ammClient = ammClient;
    this.transactionSender = transactionSender;
  }

  async decodeMarket(marketEncoded: AccountInfo<Buffer>) {
    const marketAccount = await this.amm.coder.accounts.decode(
      "amm",
      marketEncoded.data
    );

    return marketAccount;
  }

  async fetchMarket(
    // we may need to extend this to add the twapMarket address on here
    request: AmmMarketFetchRequest
  ): Promise<AmmMarket | undefined> {
    try {
      const ammAccount = await this.ammClient.getAmm(request.marketKey);
      const baseToken = await enrichTokenMetadata(
        ammAccount.baseMint,
        this.rpcProvider
      );
      const quoteToken = await enrichTokenMetadata(
        ammAccount.quoteMint,
        this.rpcProvider
      );

      const ammMintAccountSupply =
        await this.rpcProvider.connection.getTokenSupply(ammAccount.lpMint);

      return {
        baseAmount: ammAccount.baseAmount,
        quoteAmount: ammAccount.quoteAmount,
        lpMintSupply: parseInt(ammMintAccountSupply.value.amount),
        baseMint: ammAccount.baseMint,
        baseToken,
        quoteMint: ammAccount.quoteMint,
        quoteToken,
        createdAtSlot: ammAccount.createdAtSlot,
        publicKey: request.marketKey,
        type: "amm",
        twapLastUpdatedSlot: ammAccount.oracle.lastUpdatedSlot,
        twapAggregator: ammAccount.oracle.aggregator,
      };
    } catch (e) {
      console.error("error fetching amm market", e);
    }
  }

  validateAddLiquidity(
    ammMarket: AmmMarket,
    quoteAmount: number,
    maxBaseAmount: number,
    slippage: number,
    userBaseBalance?: number,
    userQuoteBalance?: number
  ): LiquidityAddError | null {
    const quoteAmountArg = new BN(
      quoteAmount *
        new BN(10).pow(new BN(ammMarket.quoteToken.decimals)).toNumber()
    );
    const maxBaseAmountArg = new BN(
      maxBaseAmount *
        new BN(10).pow(new BN(ammMarket.baseToken.decimals)).toNumber()
    );

    const maxBaseAmountWithSlippage = calculateMaxWithSlippage(
      maxBaseAmountArg,
      slippage
    );
    const baseReserve = ammMarket.baseAmount;
    const quoteReserve = ammMarket.quoteAmount;

    const ammBaseAmount = quoteAmountArg
      .mul(baseReserve)
      .div(quoteReserve)
      .add(new BN(1));

    if (maxBaseAmountWithSlippage < ammBaseAmount.toNumber()) {
      console.warn(
        `liquidity max base exceeded. baseAmountArg: ${maxBaseAmountWithSlippage}, quoteAmountArg: ${quoteAmountArg.toNumber()}, ammBaseAmount: ${ammBaseAmount.toNumber()}`
      );
      return "AddLiquidityMaxBaseExceeded";
    }

    if (userQuoteBalance !== undefined) {
      const userQuoteBalanceScaled = new BN(
        userQuoteBalance *
          new BN(10).pow(new BN(ammMarket.quoteToken.decimals)).toNumber()
      );
      const requiredQuoteBalance = quoteAmountArg.toNumber();
      if (userQuoteBalanceScaled.toNumber() < requiredQuoteBalance) {
        console.warn(
          `Insufficient quote balance: Required ${requiredQuoteBalance}, Available: ${userQuoteBalance}`
        );
        return "InsufficientQuoteBalance";
      }
    }

    if (userBaseBalance !== undefined) {
      const userBaseBalanceScaled = new BN(
        userBaseBalance *
          new BN(10).pow(new BN(ammMarket.baseToken.decimals)).toNumber()
      );
      const requiredBaseBalance = ammBaseAmount.toNumber();
      if (userBaseBalanceScaled.toNumber() < requiredBaseBalance) {
        console.warn(
          `Insufficient base balance: Required ${requiredBaseBalance}, Available: ${userBaseBalanceScaled.toNumber()}`
        );
        return "InsufficientBaseBalance";
      }
    }

    return null;
  }

  async addLiquidity(
    ammMarket: AmmMarket,
    quoteAmount: number,
    maxBaseAmount: number,
    slippage: number
  ): Promise<string[] | LiquidityAddError> {
    if (!this.transactionSender) return [];

    const validationError = this.validateAddLiquidity(
      ammMarket,
      quoteAmount,
      maxBaseAmount,
      slippage
    );
    if (validationError) {
      return validationError;
    }

    const quoteAmountArg = new BN(
      quoteAmount *
        new BN(10).pow(new BN(ammMarket.quoteToken.decimals)).toNumber()
    );
    const maxBaseAmountArg = new BN(
      maxBaseAmount *
        new BN(10).pow(new BN(ammMarket.baseToken.decimals)).toNumber()
    );
    const maxBaseAmountWithSlippage = calculateMaxWithSlippage(
      maxBaseAmountArg,
      slippage
    );

    const minLpTokensToMint = quoteAmountArg
      .mul(new BN(ammMarket.lpMintSupply))
      .div(ammMarket.quoteAmount);

    const minLpTokensWithSlippage = calculateMinWithSlippage(
      minLpTokensToMint.toNumber(),
      slippage
    );

    const ix = this.ammClient.addLiquidityIx(
      ammMarket.publicKey,
      ammMarket.baseMint,
      ammMarket.quoteMint,
      quoteAmountArg,
      new BN(maxBaseAmountWithSlippage),
      new BN(minLpTokensWithSlippage),
      this.rpcProvider.publicKey
    );
    const tx = await ix.transaction();
    return this.transactionSender.send([tx], this.rpcProvider.connection);
  }

  simulateAddLiquidity(
    ammMarket: AmmMarket,
    quoteAmount?: number,
    baseAmount?: number
  ): AddLiquiditySimulationResponse {
    const baseReserves = ammMarket.baseAmount;
    const quoteReserves = ammMarket.quoteAmount;

    const quoteAmountArg = quoteAmount
      ? new BN(
          quoteAmount *
            new BN(10).pow(new BN(ammMarket.quoteToken.decimals)).toNumber()
        )
      : undefined;
    const baseAmountArg = baseAmount
      ? new BN(
          baseAmount *
            new BN(10).pow(new BN(ammMarket.baseToken.decimals)).toNumber()
        )
      : undefined;

    const simulation = this.ammClient.simulateAddLiquidity(
      baseReserves,
      quoteReserves,
      ammMarket.lpMintSupply,
      baseAmountArg,
      quoteAmountArg
    );

    const simulationBase =
      simulation.baseAmount.toNumber() / 10 ** ammMarket.baseToken.decimals;
    const simulationQuote =
      simulation.quoteAmount.toNumber() / 10 ** ammMarket.quoteToken.decimals;

    return {
      baseAmount: simulationBase,
      quoteAmount: simulationQuote,
      // warning this value is not divided by the lot size of the LP tokens
      expectedLpTokens: simulation.expectedLpTokens.toNumber(),
    };
  }

  async removeLiquidity(
    ammMarket: AmmMarket,
    lpTokensToBurn: number,
    slippage: number
  ) {
    // fetch or have lp token account
    const lpTokensLots = new BN(
      lpTokensToBurn * new BN(10).pow(new BN(9)).toNumber()
    );
    const lpRatio = lpTokensLots.toNumber() / ammMarket.lpMintSupply;
    const minQuoteAmount = lpRatio * ammMarket.quoteAmount.toNumber();
    const minQuoteWithSlippage = calculateMinWithSlippage(
      minQuoteAmount,
      slippage
    );
    const minBaseAmount = lpRatio * ammMarket.baseAmount.toNumber();
    const minBaseWithSlippage = calculateMinWithSlippage(
      minBaseAmount,
      slippage
    );
    const ix = this.ammClient.removeLiquidityIx(
      ammMarket.publicKey,
      ammMarket.baseMint,
      ammMarket.quoteMint,
      lpTokensLots,
      new BN(minBaseWithSlippage),
      new BN(minQuoteWithSlippage)
    );
    const tx = await ix.transaction();
    return (
      this.transactionSender?.send([tx], this.rpcProvider.connection) ?? []
    );
  }

  async swap(
    ammMarket: AmmMarket,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number,
    slippage: number
  ): Promise<string[]> {
    if (!this.transactionSender) return [];
    let [inputToken, outputToken] = swapType.buy
      ? [ammMarket.quoteToken, ammMarket.baseToken]
      : [ammMarket.baseToken, ammMarket.quoteToken];

    let inputAmountScaled: BN = PriceMath.getChainAmount(
      inputAmount,
      inputToken.decimals
    );
    let outputAmountMinScaled: BN = PriceMath.getChainAmount(
      inputAmount,
      outputToken.decimals
    );

    const outputAmountWithSlippage = calculateMinWithSlippage(
      outputAmountMinScaled.toNumber(),
      slippage
    );
    const tx = await this.ammClient
      .swapIx(
        ammMarket.publicKey,
        ammMarket.baseMint,
        ammMarket.quoteMint,
        swapType,
        inputAmountScaled,
        new BN(outputAmountWithSlippage)
      )
      .transaction();

    return (
      this.transactionSender?.send([tx], this.rpcProvider.connection) ?? []
    );
  }

  async getSwapPreview(
    ammMarket: AmmMarket,
    inputAmount: number,
    isBuyBase: boolean
  ): Promise<SwapPreview> {
    // TODO we shouldn't need to refetch this if we can build the account type correctly
    const ammAccount = await this.ammClient.getAmm(ammMarket.publicKey);

    const inputAmountLots = isBuyBase
      ? inputAmount * 10 ** ammMarket.baseToken.decimals
      : inputAmount * 10 ** ammMarket.quoteToken.decimals;
    const resp = this.calculateSwapPreview(
      ammAccount,
      new BN(inputAmountLots),
      isBuyBase
    );
    return resp;
  }

  calculateSwapPreview(
    amm: AmmAccount,
    inputAmount: BN,
    isBuyBase: boolean
  ): SwapPreview {
    const quoteAmount = amm.quoteAmount;
    const baseAmount = amm.baseAmount;
    const startPrice =
      quoteAmount.toNumber() /
      Math.pow(10, amm.quoteMintDecimals) /
      (baseAmount.toNumber() / Math.pow(10, amm.baseMintDecimals));
    const k = quoteAmount.mul(baseAmount);
    const inputMinusFee = inputAmount
      .mul(new BN(10000).sub(new BN(100)))
      .div(new BN(10000));

    if (isBuyBase) {
      const tempQuoteAmount = quoteAmount.add(inputMinusFee);
      const tempBaseAmount = k.div(tempQuoteAmount);
      const finalPrice =
        tempQuoteAmount.toNumber() /
        Math.pow(10, amm.quoteMintDecimals) /
        (tempBaseAmount.toNumber() / Math.pow(10, amm.baseMintDecimals));
      const outputAmountBase = baseAmount.sub(tempBaseAmount);
      const inputUnits =
        inputAmount.toNumber() / Math.pow(10, amm.quoteMintDecimals);
      const outputUnits =
        outputAmountBase.toNumber() / Math.pow(10, amm.baseMintDecimals);
      const priceImpact = Math.abs(finalPrice - startPrice) / startPrice;

      return {
        isBuyBase,
        inputAmount,
        outputAmount: outputAmountBase,
        inputUnits,
        outputUnits,
        startPrice,
        finalPrice,
        avgSwapPrice: inputUnits / outputUnits,
        priceImpact,
      };
    } else {
      const tempBaseAmount = baseAmount.add(inputMinusFee);
      const tempQuoteAmount = k.div(tempBaseAmount);
      const finalPrice =
        tempQuoteAmount.toNumber() /
        Math.pow(10, amm.quoteMintDecimals) /
        (tempBaseAmount.toNumber() / Math.pow(10, amm.baseMintDecimals));
      const outputAmountQuote = quoteAmount.sub(tempQuoteAmount);
      const inputUnits =
        inputAmount.toNumber() / Math.pow(10, amm.baseMintDecimals);
      const outputUnits =
        outputAmountQuote.toNumber() / Math.pow(10, amm.quoteMintDecimals);
      const priceImpact = Math.abs(finalPrice - startPrice) / startPrice;

      return {
        isBuyBase,
        inputAmount,
        outputAmount: outputAmountQuote,
        inputUnits,
        outputUnits,
        startPrice,
        finalPrice,
        avgSwapPrice: outputUnits / inputUnits,
        priceImpact,
      };
    }
  }

  async getPoolLiquidity(ammAddr: PublicKey) {
    const ammAccount = await this.ammClient.getAmm(ammAddr);

    return {
      base: ammAccount.baseAmount,
      quote: ammAccount.quoteAmount,
    };
  }

  async getAmmAddress(
    proposal: PublicKey,
    baseMint: PublicKey,
    quoteMint: PublicKey
  ) {
    return getAmmAddr(AMM_PROGRAM_ID, baseMint, quoteMint, proposal)[0];
  }

  async getLpToken(ammAddr: PublicKey) {
    const [lpMint] = getAmmLpMintAddr(this.ammClient.getProgramId(), ammAddr);
    const lpToken = await enrichTokenMetadata(lpMint, this.rpcProvider);
    return lpToken;
  }

  async getLpTokenBalance(
    ammAddr: PublicKey,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance> {
    const ammAccount = await this.ammClient.getAmm(ammAddr);
    const lpToken = await this.getLpToken(ammAddr);

    try {
      const pda = getAssociatedTokenAddressSync(
        new PublicKey(ammAccount.lpMint),
        ownerWallet,
        true
      );
      const balance = (
        await this.rpcProvider.connection.getTokenAccountBalance(pda)
      ).value;

      const balanceFormatted =
        parseFloat(balance.amount) / lpToken.decimals ** 10;

      return {
        balance: balanceFormatted,
        token: lpToken,
      };
    } catch (e) {
      return {
        balance: 0,
        token: lpToken,
      };
    }
  }
}
