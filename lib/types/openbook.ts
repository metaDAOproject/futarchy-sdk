import { BN, IdlAccounts, IdlTypes, Program } from "@coral-xyz/anchor";
import { Keypair, PublicKey } from "@solana/web3.js";
import {
  MarketAccount,
  OpenbookV2,
  OpenOrdersAccount,
  LeafNode,
  Market as OBMarket,
  OracleConfigParams,
} from "@openbook-dex/openbook-v2";
import {
  AccountWithKey,
  MarketType,
  MergeWithOptionalFields,
  Order,
  VaultAccount,
  Market,
} from "@/types";
import { OpenbookTwapV0_1 } from "@/idl/openbook_twap_v0.1";
import { OpenbookTwapV0_2 } from "@/idl/openbook_twap_v0.2";
import { OpenbookTwap } from "@/idl/openbook_twap";

/**
 * Order
 */
export type OpenbookOrder = Order & {
  market: PublicKey;
  clientOrderId: BN;
  owner: PublicKey;
  ownerSlot: number;
};

export type OpenOrdersAccountWithKey = AccountWithKey<OpenOrdersAccount>;

export type PlaceOrderArgs = IdlTypes<OpenbookV2>["PlaceOrderArgs"];

export type PlaceTakeOrderArgs = IdlTypes<OpenbookV2>["PlaceTakeOrderArgs"];

/**
 * Market
 */
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

export type Markets = {
  pass: MarketAccount;
  passAsks: LeafNode[];
  passBids: LeafNode[];
  fail: MarketAccount;
  failAsks: LeafNode[];
  failBids: LeafNode[];
  passTwap: TwapMarketAccount;
  failTwap: TwapMarketAccount;
  baseVault: VaultAccount;
  quoteVault: VaultAccount;
};

/**
 * TWAP
 */
export type OpenbookTwapIDLs = OpenbookTwapV0_1 | OpenbookTwapV0_2;

export type TWAPOracle = IdlTypes<OpenbookTwap>["TWAPOracle"];

export type TwapMarketAccount = MergeWithOptionalFields<
  IdlAccounts<OpenbookTwap>["twapMarket"],
  MergeWithOptionalFields<
    IdlAccounts<OpenbookTwapV0_2>["twapMarket"],
    IdlAccounts<OpenbookTwapV0_1>["twapMarket"]
  >
>;

export type TwapPlaceOrderArgs = MergeWithOptionalFields<
  IdlTypes<OpenbookTwap>["PlaceOrderArgs"],
  MergeWithOptionalFields<
    IdlTypes<OpenbookTwapV0_2>["PlaceOrderArgs"],
    IdlTypes<OpenbookTwapV0_1>["PlaceOrderArgs"]
  >
>;

export type TwapProgram = Program<OpenbookTwapV0_2> | Program<OpenbookTwapV0_1>;

/**
 * Client
 */
export interface OpenbookClientCreateMarketArgs {
  payer: PublicKey;
  name: string;
  quoteMint: PublicKey;
  baseMint: PublicKey;
  quoteLotSize: BN;
  baseLotSize: BN;
  makerFee: BN;
  takerFee: BN;
  timeExpiry: BN;
  oracleA: PublicKey | null;
  oracleB: PublicKey | null;
  openOrdersAdmin: PublicKey | null;
  consumeEventsAdmin: PublicKey | null;
  closeMarketAdmin: PublicKey | null;
  oracleConfigParams?: OracleConfigParams;
  market?: Keypair;
  collectFeeAdmin?: PublicKey;
}
