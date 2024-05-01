import { FutarchyAmmMarketsClient } from "@/client";
import { enrichTokenMetadata } from "@/tokens";
import { TransactionSender } from "@/transactions";
import { TokenWithBalance } from "@/types";
import {
  AmmMarket,
  AmmMarketFetchRequest,
  LiquidityAddError,
} from "@/types/amm";
import { BN, Program, Provider } from "@coral-xyz/anchor";
import {
  AMM_PROGRAM_ID,
  AmmClient,
  SwapPreview,
  SwapType,
  getATA,
  getAmmAddr,
} from "@metadaoproject/futarchy-ts";
import { Amm as AmmIDLType } from "@metadaoproject/futarchy-ts/dist/types/amm";
import { unpackMint, getAssociatedTokenAddressSync } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";

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
    maxBasAmount: number
  ): LiquidityAddError | null {
    const quoteAmountArg = new BN(
      quoteAmount *
        new BN(10).pow(new BN(ammMarket.quoteToken.decimals)).toNumber()
    );
    const baseAmountArg = new BN(
      maxBasAmount *
        new BN(10).pow(new BN(ammMarket.baseToken.decimals)).toNumber()
    );
    // base passed in should be ammBaseAmount honestly...
    const baseReserve = new BN(ammMarket.baseAmount);
    const quoteReserve = new BN(ammMarket.quoteAmount);

    const ammBaseAmount = quoteAmountArg
      .mul(baseReserve)
      .div(quoteReserve)
      .add(new BN(1));
    if (baseAmountArg.toNumber() < ammBaseAmount.toNumber()) {
      console.error(
        `liquidity max base exceeded. baseAmountArg: ${baseAmountArg.toNumber()}. quoteAmountArg: ${quoteAmountArg.toNumber()}, ammBaseAmount: ${ammBaseAmount.toNumber()}`
      );
      return "AddLiquidityMaxBaseExceeded";
    }
    return null;
  }

  async addLiquidity(
    ammMarket: AmmMarket,
    quoteAmount: number,
    maxBasAmount: number
  ): Promise<string[] | LiquidityAddError> {
    if (!this.transactionSender) return [];

    const validationError = this.validateAddLiquidity(
      ammMarket,
      quoteAmount,
      maxBasAmount
    );
    if (validationError) {
      return validationError;
    }

    const quoteAmountArg = new BN(
      quoteAmount *
        new BN(10).pow(new BN(ammMarket.quoteToken.decimals)).toNumber()
    );

    // we just pass this in as min LP tokens and this replicates the calculation in the program
    const lpTokensToMint = quoteAmountArg
      .mul(new BN(ammMarket.lpMintSupply))
      .div(ammMarket.quoteAmount);

    const baseAmountArg = new BN(
      maxBasAmount *
        new BN(10).pow(new BN(ammMarket.baseToken.decimals)).toNumber()
    );

    const ix = this.ammClient.addLiquidityIx(
      ammMarket.publicKey,
      ammMarket.baseMint,
      ammMarket.quoteMint,
      quoteAmountArg,
      baseAmountArg,
      lpTokensToMint,
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

  async removeLiquidity(ammMarket: AmmMarket, lpTokensToBurn: number) {
    const minBaseAmount = 23;
    const minQuoteAmount = 20;
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
    const quoteMintInfo = await this.rpcProvider.connection.getAccountInfo(
      ammMarket.quoteMint
    );
    const quoteDecimals = unpackMint(
      ammMarket.quoteMint,
      quoteMintInfo
    ).decimals;

    const baseMintInfo = await this.rpcProvider.connection.getAccountInfo(
      ammMarket.quoteMint
    );
    const baseDecimals = unpackMint(ammMarket.baseMint, baseMintInfo).decimals;

    let inputAmountScaled: BN;
    let outputAmountMinScaled: BN;
    if (swapType.buy) {
      inputAmountScaled = new BN(inputAmount * 10 ** quoteDecimals);
      outputAmountMinScaled = new BN(outputAmountMin * 10 ** baseDecimals);
    } else {
      inputAmountScaled = new BN(inputAmount * 10 ** baseDecimals);
      outputAmountMinScaled = new BN(outputAmountMin * 10 ** quoteDecimals);
    }
    const tx = await this.amm.methods
      .swap({
        swapType,
        inputAmount: inputAmountScaled,
        outputAmountMin: outputAmountMinScaled,
      })
      .accounts({
        user: this.rpcProvider.publicKey,
        amm: ammMarket.publicKey,
        baseMint: ammMarket.baseMint,
        quoteMint: ammMarket.quoteMint,
        userAtaBase: getATA(
          ammMarket.baseMint,
          this.rpcProvider.publicKey!!
        )[0],
        userAtaQuote: getATA(
          ammMarket.quoteMint,
          this.rpcProvider.publicKey!!
        )[0],
        vaultAtaBase: getATA(ammMarket.baseMint, ammMarket.publicKey)[0],
        vaultAtaQuote: getATA(ammMarket.quoteMint, ammMarket.publicKey)[0],
      })
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
    const resp = this.ammClient.getSwapPreview(
      ammAccount,
      new BN(inputAmountLots),
      isBuyBase
    );
    return resp;
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
