import { FutarchyAmmMarketsClient } from "@/client";
import { FutarchyAmmMarketsRPCClient } from "../../rpc";
import {
  AmmMarket,
  AmmMarketFetchRequest,
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
  async addLiquidity(
    ammAddr: PublicKey,
    quoteAmount?: number | undefined,
    baseAmount?: number | undefined
  ): Promise<string[]> {
    return this.rpcMarketsClient.addLiquidity(ammAddr, quoteAmount, baseAmount);
  }

  async simulateAddLiquidity(
    ammAddr: PublicKey,
    baseAmount: number,
    quoteAmount: number
  ): Promise<any> {
    // Replace `any` with the actual return type if defined
    return this.rpcMarketsClient.simulateAddLiquidity(
      ammAddr,
      baseAmount,
      quoteAmount
    );
  }

  async removeLiquidity(
    ammAddr: PublicKey,
    lpTokensToBurn: number
  ): Promise<string[]> {
    return this.rpcMarketsClient.removeLiquidity(ammAddr, lpTokensToBurn);
  }

  async swap(
    ammAddr: PublicKey,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number
  ): Promise<string[]> {
    return this.rpcMarketsClient.swap(
      ammAddr,
      swapType,
      inputAmount,
      outputAmountMin
    );
  }

  async getSwapPreview(
    ammAddr: PublicKey,
    inputAmount: number,
    isBuyBase: boolean
  ): Promise<SwapPreview> {
    return this.rpcMarketsClient.getSwapPreview(
      ammAddr,
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
