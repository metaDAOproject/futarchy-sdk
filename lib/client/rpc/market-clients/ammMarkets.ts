import { FutarchyAmmMarketsClient } from "@/client";
import { enrichTokenMetadata } from "@/tokens";
import { TransactionSender } from "@/transactions";
import { Market, TokenWithBalance } from "@/types";
import { AmmMarketFetchRequest } from "@/types/amm";
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
  ): Promise<Market | undefined> {
    const ammAcount = await this.ammClient.getAmm(request.marketKey);
    const baseToken = await enrichTokenMetadata(
      ammAcount.baseMint,
      this.rpcProvider
    );
    const quoteToken = await enrichTokenMetadata(
      ammAcount.quoteMint,
      this.rpcProvider
    );

    const marketName = "blah";

    const baseTokenWithSymbol = !baseToken.isFallback
      ? baseToken
      : {
          ...baseToken,
          symbol: marketName.split("/")[0],
        };
    const quoteTokenWithSymbol = !quoteToken.isFallback
      ? quoteToken
      : {
          ...quoteToken,
          symbol: marketName.split("/")[0],
        };

    return {
      baseMint: ammAcount.baseMint,
      baseToken: baseTokenWithSymbol,
      quoteMint: ammAcount.quoteMint,
      quoteToken: quoteTokenWithSymbol,
      createdAt: ammAcount.createdAtSlot.toNumber(),
      publicKey: request.marketKey,
      type: "amm",
    };
  }

  async addLiquidity(
    ammAddr: PublicKey,
    quoteAmount?: number,
    baseAmount?: number
  ) {
    if (!this.transactionSender) return [];

    const ammAcount = await this.ammClient.getAmm(ammAddr);
    const minLpTokens = new BN(0);

    const quoteInfo = await this.rpcProvider.connection.getAccountInfo(
      ammAcount.quoteMint
    );
    const quoteDecimals = unpackMint(ammAcount.quoteMint, quoteInfo).decimals;
    const quoteAmountCasted = new BN(quoteAmount).mul(
      new BN(10).pow(new BN(quoteDecimals))
    );

    const baseInfo = await this.rpcProvider.connection.getAccountInfo(
      ammAcount.baseMint
    );
    const baseDecimals = unpackMint(ammAcount.quoteMint, baseInfo);
    const baseAmountCasted = new BN(baseAmount).mul(
      new BN(10).pow(new BN(baseDecimals))
    );

    const ix = this.ammClient.addLiquidityIx(
      ammAddr,
      ammAcount.baseMint,
      ammAcount.quoteMint,
      baseAmountCasted,
      quoteAmountCasted,
      minLpTokens,
      this.rpcProvider.publicKey
    );
    const tx = await ix.transaction();
    return this.transactionSender.send([tx], this.rpcProvider.connection);
  }

  async simulateAddLiquidity(
    ammAddr: PublicKey,
    baseAmount: number,
    quoteAmount: number
  ) {
    const ammAccount = await this.ammClient.getAmm(ammAddr);

    const baseReserves = ammAccount.baseAmount;
    const quoteReserves = ammAccount.quoteAmount;

    const lpMintInfo = await this.rpcProvider.connection.getAccountInfo(
      ammAccount.lpMint
    );
    const lpMintSupply = Number(
      unpackMint(ammAccount.lpMint, lpMintInfo).supply
    );

    const simulation = this.ammClient.simulateAddLiquidity(
      baseReserves,
      quoteReserves,
      lpMintSupply,
      baseAmount,
      quoteAmount
    );

    return simulation;
  }

  async removeLiquidity(ammAddr: PublicKey, lpTokensToBurn: number) {
    const ammAcount = await this.ammClient.getAmm(ammAddr);

    const minBaseAmount = 23;
    const minQuoteAmount = 20;
    const ix = this.ammClient.removeLiquidityIx(
      ammAddr,
      ammAcount.baseMint,
      ammAcount.quoteMint,
      lpTokensToBurn,
      minBaseAmount,
      minQuoteAmount
    );
    const tx = await ix.transaction();
    return this.transactionSender?.send([tx], this.rpcProvider.connection);
  }

  async swap(
    ammAddr: PublicKey,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number
  ) {
    const ammAcount = await this.ammClient.getAmm(ammAddr);
    // would need ix in futarchy.ts SDK, nice to have pricemath exported as well

    const quoteMintInfo = await this.rpcProvider.connection.getAccountInfo(
      ammAcount.quoteMint
    );
    const quoteDecimals = unpackMint(
      ammAcount.quoteMint,
      quoteMintInfo
    ).decimals;

    const baseMintInfo = await this.rpcProvider.connection.getAccountInfo(
      ammAcount.quoteMint
    );
    const baseDecimals = unpackMint(ammAcount.baseMint, baseMintInfo).decimals;

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
        amm: ammAddr,
        baseMint: ammAcount.baseMint,
        quoteMint: ammAcount.quoteMint,
        userAtaBase: getATA(
          ammAcount.baseMint,
          this.rpcProvider.publicKey!!
        )[0],
        userAtaQuote: getATA(
          ammAcount.quoteMint,
          this.rpcProvider.publicKey!!
        )[0],
        vaultAtaBase: getATA(ammAcount.baseMint, ammAddr)[0],
        vaultAtaQuote: getATA(ammAcount.quoteMint, ammAddr)[0],
      })
      .transaction();

    this.transactionSender?.send([tx], this.rpcProvider.connection);
  }

  async getSwapPreview(
    ammAddr: PublicKey,
    inputAmount: number,
    isBuyBase: boolean
  ): Promise<SwapPreview> {
    const ammAcount = await this.ammClient.getAmm(ammAddr);
    const resp = this.ammClient.getSwapPreview(
      ammAcount,
      inputAmount,
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
