import { PublicKey } from "@solana/web3.js";
import { Market, MarketFetchRequest } from "./markets";

export class AmmMarketFetchRequest implements MarketFetchRequest {
  public marketKey: PublicKey;

  constructor(marketKey: PublicKey) {
    this.marketKey = marketKey;
  }
}

export type AmmMarket = Market & {
  type: "amm";
  baseAmount: number;
  quoteAmount: number;
  lpMintSupply: number;
};

export type LiquidityAddError = "AddLiquidityMaxBaseExceeded";
