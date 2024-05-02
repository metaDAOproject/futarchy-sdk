import { FutarchyAmmMarketsClient } from "@/client";
import { enrichTokenMetadata } from "@/tokens";
import { calculateMaxWithSlippage, calculateMinWithSlippage } from "@/trading";
import { TransactionSender } from "@/transactions";
import { TokenWithBalance } from "@/types";
import {
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
  SwapType,
  getATA,
  getAmmAddr,
} from "@metadaoproject/futarchy-ts";
import { Amm as AmmIDLType } from "@metadaoproject/futarchy-ts/dist/types/amm";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { PublicKey, Transaction } from "@solana/web3.js";

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
        createdAt: ammAccount.createdAtSlot.toNumber(),
        publicKey: request.marketKey,
        type: "amm",
      };
    } catch (e) {
      console.error("error fetching amm market", e);
    }
  }

  validateAddLiquidity(
    ammMarket: AmmMarket,
    quoteAmount: number,
    maxBaseAmount: number,
    slippage: number
  ): LiquidityAddError | null {
    const quoteAmountArg = new BN(
      quoteAmount *
        new BN(10).pow(new BN(ammMarket.quoteToken.decimals)).toNumber()
    );
    const baseAmountArg = new BN(
      maxBaseAmount *
        new BN(10).pow(new BN(ammMarket.baseToken.decimals)).toNumber()
    );
    const quoteAmountWithSlippage = calculateMaxWithSlippage(
      quoteAmountArg,
      slippage
    );
    const baseAmountWithSlippage = calculateMaxWithSlippage(
      baseAmountArg,
      slippage
    );
    // base passed in should be ammBaseAmount honestly...
    const baseReserve = ammMarket.baseAmount;
    const quoteReserve = ammMarket.quoteAmount;

    const ammBaseAmount = new BN(quoteAmountWithSlippage)
      .mul(baseReserve)
      .div(quoteReserve)
      .add(new BN(1));
    if (baseAmountWithSlippage < ammBaseAmount.toNumber()) {
      console.warn(
        `liquidity max base exceeded. baseAmountArg: ${baseAmountWithSlippage}. quoteAmountArg: ${quoteAmountWithSlippage}, ammBaseAmount: ${ammBaseAmount.toNumber()}`
      );
      return "AddLiquidityMaxBaseExceeded";
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

    const quoteAmountWithSlippage = calculateMaxWithSlippage(
      quoteAmountArg,
      slippage
    );
    const maxBaseAmountWithSlippage = calculateMaxWithSlippage(
      maxBaseAmountArg,
      slippage
    );

    const minLpTokensToMint = new BN(quoteAmountWithSlippage)
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
      new BN(quoteAmountWithSlippage),
      new BN(maxBaseAmountWithSlippage),
      new BN(minLpTokensWithSlippage),
      this.rpcProvider.publicKey
    );
    const tx = await ix.transaction();
    return this.transactionSender.send([tx], this.rpcProvider.connection);
  }

  async simulateAddLiquidity(
    ammMarket: AmmMarket,
    baseAmount: number,
    quoteAmount: number
  ) {
    const baseReserves = ammMarket.baseAmount;
    const quoteReserves = ammMarket.quoteAmount;

    const simulation = this.ammClient.simulateAddLiquidity(
      baseReserves,
      quoteReserves,
      ammMarket.lpMintSupply,
      baseAmount,
      quoteAmount
    );

    return simulation;
  }

  async removeLiquidity(
    ammMarket: AmmMarket,
    lpTokensToBurn: BN,
    slippage: BN
  ) {
    const lpRatio = lpTokensToBurn.div(new BN(ammMarket.lpMintSupply));
    const minQuoteAmount = lpRatio
      .mul(new BN(ammMarket.quoteAmount))
      .mul(new BN(1 - slippage.toNumber()));
    const minBaseAmount = lpRatio
      .mul(new BN(ammMarket.baseAmount))
      .mul(new BN(1 - slippage.toNumber()));
    const ix = this.ammClient.removeLiquidityIx(
      ammMarket.publicKey,
      ammMarket.baseMint,
      ammMarket.quoteMint,
      lpTokensToBurn,
      minBaseAmount,
      minQuoteAmount
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
    outputAmountMin: number
  ): Promise<string[]> {
    if (!this.transactionSender) return [];
    let inputAmountScaled: BN;
    let outputAmountMinScaled: BN;
    if (swapType.buy) {
      inputAmountScaled = new BN(
        inputAmount * 10 ** ammMarket.quoteToken.decimals
      );
      outputAmountMinScaled = new BN(
        outputAmountMin * 10 ** ammMarket.baseToken.decimals
      );
    } else {
      inputAmountScaled = new BN(
        inputAmount * 10 ** ammMarket.baseToken.decimals
      );
      outputAmountMinScaled = new BN(
        outputAmountMin * 10 ** ammMarket.quoteToken.decimals
      );
    }
    const ix = await this.amm.methods
      .swap({
        swapType,
        inputAmount: inputAmountScaled,
        outputAmountMin: outputAmountMinScaled,
      })
      .accounts({
        user: this.transactionSender.owner,
        amm: ammMarket.publicKey,
        baseMint: ammMarket.baseMint,
        quoteMint: ammMarket.quoteMint,
        userAtaBase: getATA(
          ammMarket.baseMint,
          this.transactionSender.owner
        )[0],
        userAtaQuote: getATA(
          ammMarket.quoteMint,
          this.transactionSender.owner
        )[0],
        vaultAtaBase: getATA(ammMarket.baseMint, ammMarket.publicKey)[0],
        vaultAtaQuote: getATA(ammMarket.quoteMint, ammMarket.publicKey)[0],
      })
      .instruction();

    const tx = new Transaction().add(ix);

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
    const ammAccount = await this.ammClient.getAmm(ammAddr);
    const lpToken = await enrichTokenMetadata(
      ammAccount.lpMint,
      this.rpcProvider
    );
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

      return {
        balance: parseFloat(balance.amount),
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
