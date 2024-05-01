import { FutarchyAmmMarketsClient } from "@/client";
import { FutarchyAmmMarketsRPCClient } from "../../rpc";
import {
  AmmMarket,
  AmmMarketFetchRequest,
  LiquidityAddError,
  Market,
  TokenMetadataSource,
  TokenProps,
  TokenWithBalance,
} from "@/types";
import { PublicKey } from "@solana/web3.js";
import { SwapPreview, SwapType } from "@metadaoproject/futarchy-ts";

export class FutarchyIndexerAmmMarketsClient
  implements FutarchyAmmMarketsClient
{
  private rpcMarketsClient: FutarchyAmmMarketsRPCClient;
  constructor(rpcMarketsClient: FutarchyAmmMarketsRPCClient) {
    this.rpcMarketsClient = rpcMarketsClient;
  }

  async fetchMarket(
    request: AmmMarketFetchRequest
  ): Promise<AmmMarket | undefined> {
    return this.rpcMarketsClient.fetchMarket(request);
  }

  validateAddLiquidity(
    ammMarket: AmmMarket,
    quoteAmount: number,
    baseAmount: number
  ): LiquidityAddError | null {
    return this.rpcMarketsClient.validateAddLiquidity(
      ammMarket,
      quoteAmount,
      baseAmount
    );
  }

  async addLiquidity(
    ammMarket: AmmMarket,
    quoteAmount: number,
    baseAmount: number
  ): Promise<string[] | LiquidityAddError> {
    return this.rpcMarketsClient.addLiquidity(
      ammMarket,
      quoteAmount,
      baseAmount
    );
  }

  async simulateAddLiquidity(
    ammMarket: AmmMarket,
    baseAmount: number,
    quoteAmount: number
  ): Promise<any> {
    // Replace `any` with the actual return type if defined
    return this.rpcMarketsClient.simulateAddLiquidity(
      ammMarket,
      baseAmount,
      quoteAmount
    );
  }

  async removeLiquidity(
    ammMarket: AmmMarket,
    lpTokensToBurn: number
  ): Promise<string[]> {
    return this.rpcMarketsClient.removeLiquidity(ammMarket, lpTokensToBurn);
  }

  async swap(
    ammMarket: AmmMarket,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number
  ): Promise<string[]> {
    return this.rpcMarketsClient.swap(
      ammMarket,
      swapType,
      inputAmount,
      outputAmountMin
    );
  }

  async getSwapPreview(
    ammMarket: AmmMarket,
    inputAmount: number,
    isBuyBase: boolean
  ): Promise<SwapPreview> {
    return this.rpcMarketsClient.getSwapPreview(
      ammMarket,
      inputAmount,
      isBuyBase
    );
  }

  async getPoolLiquidity(ammAddr: PublicKey): Promise<any> {
    // Replace `any` with the actual return type if defined
    return this.rpcMarketsClient.getPoolLiquidity(ammAddr);
  }

  async getAmmAddress(
    proposal: PublicKey,
    baseMint: PublicKey,
    quoteMint: PublicKey
  ): Promise<PublicKey> {
    return this.rpcMarketsClient.getAmmAddress(proposal, baseMint, quoteMint);
  }

  async getLpToken(ammAddr: PublicKey): Promise<
    TokenProps & {
      isFallback?: boolean | undefined;
      source: TokenMetadataSource;
    }
  > {
    return this.rpcMarketsClient.getLpToken(ammAddr);
  }

  async getLpTokenBalance(
    ammAddr: PublicKey,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance> {
    return this.rpcMarketsClient.getLpTokenBalance(ammAddr, ownerWallet);
  }
}
