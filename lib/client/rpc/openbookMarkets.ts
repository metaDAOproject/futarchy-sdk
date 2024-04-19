import { BN, Program, Provider } from "@coral-xyz/anchor";
import {
  OpenbookMarket,
  OpenbookOrder,
  OrderBookSideType,
  Orderbook,
  PlaceOrderType,
  TwapPlaceOrderArgs,
} from "../../types/markets";
import { FutarchyMarketsClient } from "../client";
import {
  Market as OBMarket,
  Order as OBOrder,
  OpenbookV2,
  SideUtils,
  OpenBookV2Client,
  OpenOrders,
  OrderToPlace,
  SelfTradeBehaviorUtils,
  PlaceOrderTypeUtils,
  PlaceOrderArgs,
} from "@openbook-dex/openbook-v2";
import { ProgramVersion } from "../../types";
import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { OpenbookTwapV0_2 } from "../../idl/openbook_twap_v0.2";
import OPENBOOK_TWAP_IDLV0_1 from "../../idl/openbook_twap_v0.1.json";
import OPENBOOK_TWAP_IDLV0_2 from "../../idl/openbook_twap_v0.2.json";
import {
  OPENBOOK_TWAP_PROGRAM_IDV0_1,
  OPENBOOK_TWAP_PROGRAM_IDV0_2,
} from "../../constants";
import { OpenbookTwapV0_1 } from "../../idl/openbook_twap_v0.1";
import { TransactionSender } from "../../transactions";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";

import { enrichTokenMetadata } from "../../tokens";
import { getTwapMarketKey } from "../../openbookTwap";

export class FutarchyOpenbookMarketsRPCClient
  implements FutarchyMarketsClient<OpenbookMarket, OpenbookOrder>
{
  private openbook: Program<OpenbookV2>;
  private openbookClient: OpenBookV2Client;
  private openbookTwap: Program<OpenbookTwapV0_2> | Program<OpenbookTwapV0_1>;
  private rpcProvider: Provider;
  private transactionSender: TransactionSender;

  constructor(
    rpcProvider: Provider,
    programVersion: ProgramVersion,
    openbook: Program<OpenbookV2>,
    openbookClient: OpenBookV2Client,
    transactionSender: TransactionSender
  ) {
    this.openbook = openbook;
    this.openbookClient = openbookClient;
    this.rpcProvider = rpcProvider;
    if (["V0.2", "V0.3"].includes(programVersion?.label!)) {
      this.openbookTwap = new Program<OpenbookTwapV0_2>(
        OPENBOOK_TWAP_IDLV0_2 as OpenbookTwapV0_2,
        OPENBOOK_TWAP_PROGRAM_IDV0_2,
        rpcProvider
      );
    } else {
      this.openbookTwap = new Program<OpenbookTwapV0_1>(
        OPENBOOK_TWAP_IDLV0_1 as OpenbookTwapV0_1,
        OPENBOOK_TWAP_PROGRAM_IDV0_1,
        rpcProvider
      );
    }
    this.transactionSender = transactionSender;
  }

  async fetchMarket(marketKey: PublicKey): Promise<OpenbookMarket | undefined> {
    const obMarket = await OBMarket.load(this.openbookClient, marketKey);

    const baseToken = await enrichTokenMetadata(
      obMarket.account.baseMint,
      this.rpcProvider
    );
    const quoteToken = await enrichTokenMetadata(
      obMarket.account.quoteMint,
      this.rpcProvider
    );

    const marketName = "blah";

    const baseTokenWithSymbol = !baseToken.isFallback
      ? baseToken
      : {
          ...baseToken,
          symbol: marketName.split("/")[0],
        };

    return {
      baseMint: obMarket.account.baseMint,
      baseToken,
      quoteMint: obMarket.account.quoteMint,
      quoteToken,
      createdAt: obMarket.account.registrationTime,
      makerFee: obMarket.account.makerFee,
      marketAuthority: obMarket.account.marketAuthority,
      minOrderAmount: obMarket.minOrderSize,
      minPriceIncrement: obMarket.quoteLotFactor,
      publicKey: marketKey,
      takerFee: obMarket.account.takerFee,
      type: "openbook",
      // can avoid refetching market for the orderbook if we pass this in
      marketInstance: obMarket,
    };
  }

  async fetchOrderBook(
    market: OpenbookMarket
  ): Promise<Orderbook<OpenbookOrder> | undefined> {
    const obMarket = new OBMarket(
      this.openbookClient,
      market.publicKey,
      market.marketInstance.account
    );
    const bids: OpenbookOrder[] = [];
    const bidsBookSide = await obMarket.loadBids();
    for (const bid of bidsBookSide.items()) {
      const bidOrder: OpenbookOrder = this.getOrderbookOrderFromBookSideOrder(
        bid,
        "bid",
        market
      );
      bids.push(bidOrder);
    }
    const asks: OpenbookOrder[] = [];
    const asksBookSide = await obMarket.loadAsks();
    for (const ask of asksBookSide.items()) {
      const askOrder: OpenbookOrder = this.getOrderbookOrderFromBookSideOrder(
        ask,
        "ask",
        market
      );
      asks.push(askOrder);
    }
    return {
      asks,
      bids,
    };
  }

  private getOrderbookOrderFromBookSideOrder(
    bookSideOrder: OBOrder,
    side: OrderBookSideType,
    market: OpenbookMarket
  ): OpenbookOrder {
    return {
      price: bookSideOrder.price,
      side: side,
      size: bookSideOrder.size,
      owner: bookSideOrder.leafNode.owner,
      clientOrderId: bookSideOrder.leafNode.clientOrderId,
      market: bookSideOrder.market.pubkey,
      ownerSlot: bookSideOrder.leafNode.ownerSlot,
      status: "open",
      time: new Date(bookSideOrder.leafNode.timestamp),
      token: side === "bid" ? market.quoteToken : market.baseToken,
    };
  }

  private async getUsersOpenOrderPks(
    userWalletPk: PublicKey
  ): Promise<PublicKey[]> {
    const indexerPk = this.openbookClient.findOpenOrdersIndexer(userWalletPk);
    const indexerAcc =
      await this.openbookClient.deserializeOpenOrdersIndexerAccount(indexerPk);
    const openOrdersPks = indexerAcc?.addresses;
    return openOrdersPks ?? [];
  }

  async fetchUserOrdersFromOrderbooks(
    owner: PublicKey,
    orderbooks: Orderbook[]
  ): Promise<OpenbookOrder[]> {
    const openOrdersPks = (await this.getUsersOpenOrderPks(owner)).map((p) =>
      p.toString()
    );

    const allOrders = orderbooks.map((ob) => [...ob.bids, ...ob.asks]).flat();

    const userOrders = allOrders
      .filter((o): o is OpenbookOrder =>
        openOrdersPks.includes(o.owner?.toString())
      )
      .sort((a, b) => (a.clientOrderId < b.clientOrderId ? 1 : -1));

    return userOrders ?? [];
  }

  async placeOrder(
    market: OpenbookMarket,
    order: Omit<OpenbookOrder, "status">,
    placeOrderType: PlaceOrderType,
    openOrdersAccountAddress?: PublicKey
  ): Promise<string[]> {
    if (!openOrdersAccountAddress) {
      // use the first open orders account by default
      const openOrdersIndexer = await this.getUsersOpenOrderPks(
        this.transactionSender.owner
      );
      openOrdersAccountAddress = openOrdersIndexer[0];
    }
    const mint =
      order.side === "ask"
        ? market.marketInstance.account.baseMint
        : market.marketInstance.account.quoteMint;
    const marketVault =
      order.side === "ask"
        ? market.marketInstance.account.marketBaseVault
        : market.marketInstance.account.marketQuoteVault;
    // TODO not sure how this works when clientOrderId not specified
    const clientOrderId = new BN(order.clientOrderId || Date.now());
    const placeOrderArgs = this.createPlaceOrderArgs({
      accountIndex: clientOrderId,
      market: market.marketInstance,
      isAsk: order.side === "ask",
      amount: order.size,
      price: order.price,
      isLimitOrder: placeOrderType === "limit",
      isPostOnlyOrder: false,
    });
    if (placeOrderArgs) {
      const placeTx = await this.openbookTwap.methods
        .placeOrder(placeOrderArgs)
        .accounts({
          openOrdersAccount: openOrdersAccountAddress,
          asks: market.marketInstance.account.asks,
          bids: market.marketInstance.account.bids,
          eventHeap: market.marketInstance.account.eventHeap,
          market: market.publicKey,
          marketVault,
          twapMarket: getTwapMarketKey(
            market.publicKey,
            this.openbookTwap.programId
          ),
          userTokenAccount: getAssociatedTokenAddressSync(
            mint,
            this.transactionSender.owner,
            true
          ),
          openbookProgram: this.openbook.programId,
        })
        .transaction();
      return this.transactionSender.send(
        [placeTx],
        this.rpcProvider.connection
      );
    }
    return [];
  }

  private createOrderToPlace(
    order: Omit<OpenbookOrder, "status">,
    placeOrderType: PlaceOrderType
  ): OrderToPlace {
    // TODO support more types
    const orderType =
      placeOrderType === "limit"
        ? PlaceOrderTypeUtils.Limit
        : PlaceOrderTypeUtils.Market;
    const orderToPlace: OrderToPlace = {
      price: order.price,
      side: order.side === "ask" ? SideUtils.Ask : SideUtils.Bid,
      size: order.size,
      clientOrderId: order.clientOrderId,
      expiryTimestamp: new BN(0),
      selfTradeBehavior: SelfTradeBehaviorUtils.AbortTransaction,
      orderType,
    };
    return orderToPlace;
  }

  private createPlaceOrderArgs({
    amount,
    price,
    isLimitOrder,
    isPostOnlyOrder,
    isAsk,
    accountIndex,
    market,
  }: {
    amount: number;
    price: number;
    isLimitOrder?: boolean;
    isPostOnlyOrder?: boolean;
    isAsk?: boolean;
    accountIndex: number;
    market: OBMarket;
  }): TwapPlaceOrderArgs | undefined {
    let priceLots = market.priceLotsToUi(price);
    const _priceLots = market.priceLotsToUi(price);
    const maxBaseLots = market.baseLotsToUi(amount);
    let maxQuoteLotsIncludingFees = market.quoteLotsToUi(
      priceLots * maxBaseLots
    );

    if (!isLimitOrder) {
      if (!isAsk) {
        // TODO: Want to setup max price (TBD)
        priceLots = new BN(1_000_000_000_000_000);
        maxQuoteLotsIncludingFees = priceLots * maxBaseLots;
      } else {
        // TODO: Check working
        priceLots = market.account.quoteLotSize;
        maxQuoteLotsIncludingFees = priceLots * maxBaseLots;
      }
    }
    if (_priceLots === priceLots) {
      console.error("price lots not matching on create place order args");
      return;
    }
    // Setup our order type
    // eslint-disable-next-line max-len
    const orderType = isPostOnlyOrder
      ? PlaceOrderTypeUtils.PostOnly
      : isLimitOrder
      ? PlaceOrderTypeUtils.Limit
      : PlaceOrderTypeUtils.Market;

    return {
      side: isAsk ? SideUtils.Ask : SideUtils.Bid,
      priceLots,
      maxBaseLots,
      maxQuoteLotsIncludingFees,
      clientOrderId: accountIndex,
      orderType,
      expiryTimestamp: new BN(0),
      selfTradeBehavior: SelfTradeBehaviorUtils.AbortTransaction,
      limit: 255,
    };
  }

  async cancelOrder(
    market: OpenbookMarket,
    orderWithAccountAddress: OpenbookOrder & {
      openOrdersAccountAddress: PublicKey;
    }
  ): Promise<string[]> {
    const tx = await this.cancelAndSettleFundsTransactions(
      orderWithAccountAddress,
      orderWithAccountAddress.openOrdersAccountAddress,
      market
    );
    return this.transactionSender.send([tx], this.rpcProvider.connection);
  }

  private async cancelAndSettleFundsTransactions(
    order: OpenbookOrder,
    openOrdersAccountAddress: PublicKey,
    market: OpenbookMarket
  ) {
    const obMarket = await OBMarket.load(this.openbookClient, market.publicKey);
    const openOrders = await OpenOrders.load(
      openOrdersAccountAddress,
      obMarket
    );

    const userBaseAccount = getAssociatedTokenAddressSync(
      market.baseMint,
      this.transactionSender.owner,
      true
    );
    const userQuoteAccount = getAssociatedTokenAddressSync(
      market.quoteMint,
      this.transactionSender.owner,
      true
    );

    const ixs: TransactionInstruction[] = [];
    const id = new BN(order.clientOrderId);
    const [cancelIx] = await openOrders.cancelOrderByClientIdIx(id);
    ixs.push(cancelIx);
    const [settleIx] = await openOrders.settleFundsIx(
      userBaseAccount,
      userQuoteAccount,
      // TODO: what is referrer address and what about penaltyfee payer??
      null,
      this.transactionSender.owner
    );
    ixs.push(settleIx);

    return new Transaction().add(...ixs);
  }

  public async withdraw(
    owner: PublicKey,
    amount: number,
    mint: number
  ): Promise<number | undefined> {
    return;
  }
}
