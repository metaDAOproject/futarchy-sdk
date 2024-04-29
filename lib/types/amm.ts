import { PublicKey } from "@solana/web3.js";
import { MarketFetchRequest } from "./markets";

export class AmmMarketFetchRequest implements MarketFetchRequest {
  public marketKey: PublicKey;

  constructor(marketKey: PublicKey) {
    this.marketKey = marketKey;
  }
}
