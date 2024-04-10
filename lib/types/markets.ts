import { BN, IdlAccounts } from "@coral-xyz/anchor";
import { MergeWithOptionalFields, TokenProps } from "../types";
import { OpenbookTwapV0_1 } from "../idl/openbook_twap_v0.1";
import { OpenbookTwapV0_2 } from "../idl/openbook_twap_v0.2";
import { PublicKey } from "@solana/web3.js";

export type MarketType = "pass" | "fail";

export type OrderBookSide = "ask" | "bid";

export type Order = {
  time: Date;
  marketType: MarketType;
  status: "open" | "closed";
  size: number;
  price: number;
  side: OrderBookSide;
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
  bids: Order[];
  asks: Order[];
};
export type OpenbookProposalMarket = {
  marketType: MarketType;
  bids: OpenbookOrder[];
  asks: OpenbookOrder[];
};

export type TwapMarketAccount = MergeWithOptionalFields<
  IdlAccounts<OpenbookTwapV0_1>["twapMarket"],
  IdlAccounts<OpenbookTwapV0_2>["twapMarket"]
>;
