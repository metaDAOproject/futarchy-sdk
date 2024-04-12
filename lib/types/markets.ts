import { BN, IdlAccounts } from "@coral-xyz/anchor";
import { MergeWithOptionalFields, TokenProps } from "../types";
import { OpenbookTwap } from "../idl/openbook_twap";
import { OpenbookTwapV0_1 } from "../idl/openbook_twap_v0.1";
import { OpenbookTwapV0_2 } from "../idl/openbook_twap_v0.2";
import { PublicKey } from "@solana/web3.js";
import { MarketAccount } from "@openbook-dex/openbook-v2";

export type MarketType = "pass" | "fail";

export type OrderBookSideType = "ask" | "bid";

export type Order = {
  time: Date;
  marketType: MarketType;
  status: "open" | "closed";
  size: number;
  price: number;
  side: OrderBookSideType;
  token: TokenProps;
};

export type OrderbookOrder = Pick<Order, "price" | "size" | "side">;

export type OpenbookOrder = Order & {
  market: PublicKey;
  clientOrderId: BN;
  owner: PublicKey;
  ownerSlot: number;
};

export type Market = {
  marketType: MarketType;
  baseVault: PublicKey;
  quoteVault: PublicKey;
  publicKey: PublicKey;
  bids: Order[];
  asks: Order[];
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

export type TwapMarketAccount = MergeWithOptionalFields<
  TwapMarketAccount1And2,
  IdlAccounts<OpenbookTwap>["twapMarket"]
>;

export type OpenbookTwapIDLs = OpenbookTwapV0_1 | OpenbookTwapV0_2;
