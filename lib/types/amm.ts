import { PublicKey } from "@solana/web3.js";
import { Market, MarketFetchRequest } from "./markets";
import { BN } from "@coral-xyz/anchor";

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
};

export type LiquidityAddError = "AddLiquidityMaxBaseExceeded";

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
