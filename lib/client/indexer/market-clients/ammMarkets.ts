import { FutarchyAmmMarketsClient } from "@/client";
import { FutarchyAmmMarketsRPCClient } from "../../rpc";
import {
  AddLiquiditySimulationResponse,
  AmmMarket,
  AmmMarketFetchRequest,
  LiquidityAddError,
  RemoveLiquiditySimulationResponse,
  SwapPreview,
  TokenMetadataSource,
  TokenProps,
  TokenWithBalance,
  VaultAccountWithProtocol
} from "@/types";
import { PublicKey } from "@solana/web3.js";
import { SwapType } from "@metadaoproject/futarchy";
import { TransactionProcessingUpdate } from "@/types/transactions";
import { Observable } from "rxjs";

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
    maxBaseAmount: number,
    slippage: number,
    userBaseBalance?: number,
    userQuoteBalance?: number
  ): LiquidityAddError | null {
    return this.rpcMarketsClient.validateAddLiquidity(
      ammMarket,
      quoteAmount,
      maxBaseAmount,
      slippage,
      userBaseBalance,
      userQuoteBalance
    );
  }

  async addLiquidity(
    ammMarket: AmmMarket,
    quoteAmount: number,
    maxBaseAmount: number,
    slippage: number
  ) {
    return this.rpcMarketsClient.addLiquidity(
      ammMarket,
      quoteAmount,
      maxBaseAmount,
      slippage
    );
  }

  simulateAddLiquidity(
    ammMarket: AmmMarket,
    quoteAmount?: number,
    baseAmount?: number
  ): AddLiquiditySimulationResponse {
    return this.rpcMarketsClient.simulateAddLiquidity(
      ammMarket,
      quoteAmount,
      baseAmount
    );
  }

  async removeLiquidity(
    ammMarket: AmmMarket,
    lpTokensToBurn: number,
    slippage: number
  ) {
    return this.rpcMarketsClient.removeLiquidity(
      ammMarket,
      lpTokensToBurn,
      slippage
    );
  }

  simulateRemoveLiquidity(
    lpTokensToBurn: number,
    ammMarket: AmmMarket
  ): RemoveLiquiditySimulationResponse {
    return this.rpcMarketsClient.simulateRemoveLiquidity(
      lpTokensToBurn,
      ammMarket
    );
  }

  async swap(
    ammMarket: AmmMarket,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number,
    slippage: number
  ) {
    return this.rpcMarketsClient.swap(
      ammMarket,
      swapType,
      inputAmount,
      outputAmountMin,
      slippage
    );
  }

  async mintAndSwap(
    mintAmount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol,
    ammMarket: AmmMarket,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number,
    slippage: number
  ): Promise<Observable<TransactionProcessingUpdate> | undefined> {
    return this.rpcMarketsClient.mintAndSwap(
      mintAmount,
      vaultAccountAddress,
      vaultAccount,
      ammMarket,
      swapType,
      inputAmount,
      outputAmountMin,
      slippage
    );
  }

  /**
   *
   * @param ammMarket
   * @param inputAmount
   * @param isBuyBase
   * @param slippage - pass this in as a percentage (0.3% would equal 0.3)
   * @returns
   */

  async getSwapPreview(
    ammMarket: AmmMarket,
    inputAmount: number,
    isBuyBase: boolean,
    slippage: number
  ): Promise<SwapPreview> {
    return this.rpcMarketsClient.getSwapPreview(
      ammMarket,
      inputAmount,
      isBuyBase,
      slippage
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

  async getLpTokenWithPDA(ammAddr: PublicKey, owner: PublicKey) {
    return this.rpcMarketsClient.getLpTokenWithPDA(ammAddr, owner);
  }

  async getLpTokenBalance(
    ammAddr: PublicKey,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance> {
    return this.rpcMarketsClient.getLpTokenBalance(ammAddr, ownerWallet);
  }
}
