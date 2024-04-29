import { BN, Program, Provider } from "@coral-xyz/anchor";
import {
  Market as OBMarket,
  Order as OBOrder,
  OpenbookV2,
  SideUtils,
  OpenBookV2Client,
  OpenOrders,
  SelfTradeBehaviorUtils,
  PlaceOrderTypeUtils,
  OPENBOOK_PROGRAM_ID,
} from "@openbook-dex/openbook-v2";
import numeral from "numeral";
import {
  Transaction,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import {
  Market,
  MarketFetchRequest,
  OpenbookMarket,
  OpenbookMarketFetchRequest,
  OpenbookOrder,
  OrderBookSideType,
  Orderbook,
  PlaceOrderType,
  ProposalAccountWithKey,
  TwapPlaceOrderArgs,
} from "@/types";
import {
  FutarchyAmmMarketsClient,
  FutarchyMarketsClient,
  FutarchyOrderbookMarketsClient,
} from "@/client";
import { TransactionSender } from "@/transactions";
import { enrichTokenMetadata } from "@/tokens";
import { getTwapMarketKey } from "@/openbookTwap";
import { BASE_FORMAT, MAX_MARKET_PRICE, NUMERAL_FORMAT } from "@/constants";
import { shortKey } from "@/utils";
import { AmmClient } from "@metadaoproject/futarchy-ts";
import { FutarchyOpenbookMarketsRPCClient } from "./market-clients/openbookMarkets";
import { FutarchyAmmMarketsRPCClient } from "./market-clients/ammMarkets";
import { Amm as AmmIDLType } from "@metadaoproject/futarchy-ts/dist/types/amm";

export class FutarchyMarketsRPCClient implements FutarchyMarketsClient {
  // we have generic interface for orderbooks. when adding phoenix, this could be rethunk
  public openbook: FutarchyOpenbookMarketsRPCClient;
  public amm: FutarchyAmmMarketsClient;

  constructor(
    rpcProvider: Provider,
    openbook: Program<OpenbookV2>,
    openbookClient: OpenBookV2Client,
    amm: Program<AmmIDLType>,
    ammClient: AmmClient,
    transactionSender: TransactionSender | undefined
  ) {
    this.openbook = new FutarchyOpenbookMarketsRPCClient(
      rpcProvider,
      openbook,
      openbookClient,
      transactionSender
    );
    this.amm = new FutarchyAmmMarketsRPCClient(
      rpcProvider,
      amm,
      ammClient,
      transactionSender
    );
  }

  async fetchMarket(request: MarketFetchRequest) {
    if (request instanceof OpenbookMarketFetchRequest) {
      return this.openbook.fetchMarket(request);
    }
    return;
    // TODO logic to fetch any market
    // const obMarket = await OBMarket.load(
    //   this.openbookClient,
    //   request.marketKey
    // );

    // const baseToken = await enrichTokenMetadata(
    //   obMarket.account.baseMint,
    //   this.rpcProvider
    // );
    // const quoteToken = await enrichTokenMetadata(
    //   obMarket.account.quoteMint,
    //   this.rpcProvider
    // );

    // const marketName = "blah";

    // const baseTokenWithSymbol = !baseToken.isFallback
    //   ? baseToken
    //   : {
    //       ...baseToken,
    //       symbol: marketName.split("/")[0],
    //     };
    // const quoteTokenWithSymbol = !quoteToken.isFallback
    //   ? quoteToken
    //   : {
    //       ...quoteToken,
    //       symbol: marketName.split("/")[0],
    //     };

    // return {
    //   baseMint: obMarket.account.baseMint,
    //   baseToken: baseTokenWithSymbol,
    //   quoteMint: obMarket.account.quoteMint,
    //   quoteToken: quoteTokenWithSymbol,
    //   createdAt: obMarket.account.registrationTime.toNumber(),
    //   makerFee: obMarket.account.makerFee.toNumber(),
    //   marketAuthority: obMarket.account.marketAuthority,
    //   minOrderAmount: obMarket.minOrderSize,
    //   minPriceIncrement: obMarket.quoteLotFactor,
    //   publicKey: request.marketKey,
    //   takerFee: obMarket.account.takerFee.toNumber(),
    //   type: "openbook",
    //   // can avoid refetching market for the orderbook if we pass this in
    //   marketInstance: obMarket,
    //   twapProgram: request.twapProgram,
    // };
  }
}
