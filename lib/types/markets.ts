import { PublicKey } from "@solana/web3.js";
import { TokenProps } from "@/types";

export type OrderBookSideType = "ask" | "bid";

export type PlaceOrderType =
  | "limit"
  | "market"
  | "grid"
  | "immediateOrCancel"
  | "fillOrKill"
  | "postOnly"
  | "postOnlySlide";

export const validOrderTypes = [
  "limit",
  "market",
  "grid",
  "immediateOrCancel",
  "fillOrKill",
  "postOnly",
  "postOnlySlide",
];

export function isPlaceOrderType(str: string): str is PlaceOrderType {
  return validOrderTypes.includes(str);
}

/**
 * Orders
 */
export type OrderBookSide = "ask" | "bid";

export type Order = {
  time: Date;
  status: "open" | "closed";
  size: number;
  filled: number; // Amount of the order that is already filled
  price: number;
  side: OrderBookSideType;
  token: TokenProps;
  owner: PublicKey;
};

export type Orderbook<O extends Order = Order> = {
  asks: O[];
  bids: O[];
};

/**
 * Markets
 */
export type MarketType = "openbook" | "amm";
export type ConditionalMarketType = "pass" | "fail";

export interface MarketFetchRequest {
  marketKey: PublicKey;
}

export type Market = {
  type: MarketType;
  publicKey: PublicKey;
  baseMint: PublicKey;
  baseToken: TokenProps;
  quoteMint: PublicKey;
  quoteToken: TokenProps;
  createdAt: number;
};

export type OrderbookMarket = Market & {
  minOrderAmount: number;
  minPriceIncrement: number;
  makerFee: number;
  takerFee: number;
};

export type ConditionalMarkets<M extends Market> = {
  pass: M;
  fail: M;
};
