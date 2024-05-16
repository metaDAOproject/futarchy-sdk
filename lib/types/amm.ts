import { PublicKey } from "@solana/web3.js";
import { Market, MarketFetchRequest } from "./markets";
import { BN } from "@coral-xyz/anchor";
import { TokenProps } from "./tokens";

export class AmmMarketFetchRequest implements MarketFetchRequest {
  public marketKey: PublicKey;

  constructor(marketKey: PublicKey) {
    this.marketKey = marketKey;
  }
}

export type AmmMarket = Market & {
  type: "amm";
  baseAmount: BN;
  quoteAmount: BN;
  lpMintSupply: number;
  lpToken: TokenProps;
  createdAtSlot: BN;
  twapLastUpdatedSlot: BN;
  twapAggregator: BN;
};

export type LiquidityAddError =
  | "AddLiquidityMaxBaseExceeded"
  | "InsufficientQuoteBalance"
  | "InsufficientBaseBalance";

/**
 * expectedLpTokens is not divided by the lot size of the LP token. Quote and Base are divided by the lot size of their respective tokens.
 */
export type AddLiquiditySimulationResponse = {
  baseAmount: number;
  quoteAmount: number;
  expectedLpTokens: number;
};

export type RemoveLiquiditySimulationResponse = {
  baseAmount: number;
  quoteAmount: number;
};

export type SwapPreview = {
  isBuyBase: boolean;
  inputAmount: BN;
  outputAmount: BN;
  inputUnits: number;
  outputUnits: number;
  startPrice: number;
  finalPrice: number;
  avgSwapPrice: number;
  priceImpact: number;
};
