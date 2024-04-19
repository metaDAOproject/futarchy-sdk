import { BN, IdlAccounts, IdlTypes } from "@coral-xyz/anchor";
import { MergeWithOptionalFields, TokenProps } from "../types";
import { OpenbookTwap } from "../idl/openbook_twap";
import { OpenbookTwapV0_1 } from "../idl/openbook_twap_v0.1";
import { OpenbookTwapV0_2 } from "../idl/openbook_twap_v0.2";
import { PublicKey } from "@solana/web3.js";
import {
  MarketAccount,
  OpenbookV2,
  Market as OBMarket,
} from "@openbook-dex/openbook-v2";

export type MarketType = "openbook";

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

export type Order = {
  time: Date;
  status: "open" | "closed";
  size: number;
  price: number;
  side: OrderBookSideType;
  token: TokenProps;
  owner: PublicKey;
};

export type Orderbook<O extends Order = Order> = {
  asks: O[];
  bids: O[];
};

export type OpenbookOrder = Order & {
  market: PublicKey;
  clientOrderId: BN;
  owner: PublicKey;
  ownerSlot: number;
};

export type Market = {
  type: MarketType;
  publicKey: PublicKey;
  minOrderAmount: number;
  minPriceIncrement: number;
  baseMint: PublicKey;
  baseToken: TokenProps;
  quoteMint: PublicKey;
  quoteToken: TokenProps;
  createdAt: number;
  makerFee: number;
  takerFee: number;
};

export type OpenbookMarket = Market & {
  marketAuthority: PublicKey;
  marketInstance: OBMarket;
};

export type OpenbookProposalMarket = {
  openbookMarketAccount: MarketAccount;
  marketType: MarketType;
  baseVault: PublicKey;
  quoteVault: PublicKey;
  publicKey: PublicKey;
  bids: OpenbookOrder[];
  asks: OpenbookOrder[];
};

export type ConditionalMarkets<M extends Market> = {
  pass: M;
  fail: M;
};

export type TwapMarketAccount1And2 = MergeWithOptionalFields<
  IdlAccounts<OpenbookTwapV0_1>["twapMarket"],
  IdlAccounts<OpenbookTwapV0_2>["twapMarket"]
>;

export type TwapPlaceOrderArgs = MergeWithOptionalFields<
  IdlTypes<OpenbookTwapV0_1>["PlaceOrderArgs"],
  IdlTypes<OpenbookTwapV0_2>["PlaceOrderArgs"]
>;

export type TwapMarketAccount = MergeWithOptionalFields<
  TwapMarketAccount1And2,
  IdlAccounts<OpenbookTwap>["twapMarket"]
>;

export type OpenbookTwapIDLs = OpenbookTwapV0_1 | OpenbookTwapV0_2;

export type PlaceOrderArgs = IdlTypes<OpenbookV2>["PlaceOrderArgs"];
export type PlaceTakeOrderArgs = IdlTypes<OpenbookV2>["PlaceTakeOrderArgs"];
