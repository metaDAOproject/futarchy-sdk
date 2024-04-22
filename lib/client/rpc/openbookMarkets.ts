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
} from "@openbook-dex/openbook-v2";
import numeral from "numeral";
import {
  Transaction,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import {
  OpenbookMarket,
  OpenbookOrder,
  OrderBookSideType,
  Orderbook,
  PlaceOrderType,
  ProposalAccountWithKey,
  TwapPlaceOrderArgs,
  TwapProgram,
} from "@/types";
import { FutarchyMarketsClient } from "@/client";
import { TransactionSender } from "@/transactions";
import { ProgramVersion } from "@/types";
import { enrichTokenMetadata } from "@/tokens";
import { getTwapMarketKey } from "@/openbookTwap";
import {
  BASE_FORMAT,
  NUMERAL_FORMAT,
  autocratVersionToTwapMap,
} from "@/constants";

export class FutarchyOpenbookMarketsRPCClient
  implements FutarchyMarketsClient<OpenbookMarket, OpenbookOrder>
{
  private openbook: Program<OpenbookV2>;
  private openbookClient: OpenBookV2Client;
  private openbookTwap: TwapProgram;
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
    this.transactionSender = transactionSender;

    const twapInfo = autocratVersionToTwapMap[programVersion.label];
    this.openbookTwap = new Program(
      twapInfo.idl as any,
      twapInfo.programId,
      rpcProvider
    );
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
      filled:
        bookSideOrder.size -
        getPartiallyFilledAmountFromBookSideOrder(bookSideOrder),
      owner: bookSideOrder.leafNode.owner,
      clientOrderId: bookSideOrder.leafNode.clientOrderId,
      market: bookSideOrder.market.pubkey,
      ownerSlot: bookSideOrder.leafNode.ownerSlot,
      status: "open",
      time: new Date(bookSideOrder.leafNode.timestamp),
      token: side === "bid" ? market.quoteToken : market.baseToken,
    };
  }

  async fetchUserOrdersFromOrderbooks(
    owner: PublicKey,
    orderbooks: Orderbook[]
  ): Promise<OpenbookOrder[]> {
    const openOrdersPks = (
      await this.openbookClient.findAllOpenOrders(owner)
    ).map((p) => p.toString());

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
      const openOrdersAccounts = await this.openbookClient.findAllOpenOrders(
        this.transactionSender.owner
      );
      openOrdersAccountAddress = openOrdersAccounts[0];
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

    let placeTx: Transaction | undefined = undefined;
    switch (placeOrderType) {
      case "limit":
        const placeLimitOrderArgs = this.createPlaceOrderArgs({
          orderType: placeOrderType,
          accountIndex: clientOrderId,
          market: market.marketInstance,
          isAsk: order.side === "ask",
          amount: order.size,
          price: order.price,
        });
        if (placeLimitOrderArgs) {
          placeTx = await this.openbookTwap.methods
            .placeOrder(placeLimitOrderArgs)
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
        }

        break;
      case "market":
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

        const placeMarketOrderArgs = this.createPlaceOrderArgs({
          orderType: placeOrderType,
          accountIndex: clientOrderId,
          market: market.marketInstance,
          isAsk: order.side === "ask",
          amount: order.size,
          price: order.price,
        });
        if (placeMarketOrderArgs) {
          const [ix] = await this.openbookClient.placeTakeOrderIx(
            market.publicKey,
            market.marketInstance.account,
            userBaseAccount,
            userQuoteAccount,
            null,
            placeMarketOrderArgs,
            []
          );
          placeTx = new Transaction().add(ix);
        }
        break;
    }

    if (placeTx) {
      return this.transactionSender.send(
        [placeTx],
        this.rpcProvider.connection
      );
    }

    return [];
  }

  private createPlaceOrderArgs({
    orderType,
    amount,
    price,
    isAsk,
    accountIndex,
    market,
  }: {
    orderType: PlaceOrderType;
    amount: number;
    price: number;
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

    if (_priceLots === priceLots) {
      console.error("price lots not matching on create place order args");
      return;
    }

    return {
      side: isAsk ? SideUtils.Ask : SideUtils.Bid,
      priceLots,
      maxBaseLots,
      maxQuoteLotsIncludingFees,
      clientOrderId: accountIndex,
      orderType:
        orderType === "limit"
          ? PlaceOrderTypeUtils.Limit
          : PlaceOrderTypeUtils.Market,
      expiryTimestamp: new BN(0),
      selfTradeBehavior: SelfTradeBehaviorUtils.AbortTransaction,
      limit: 255,
    };
  }

  async cancelOrder(
    market: OpenbookMarket,
    order: OpenbookOrder
  ): Promise<string[]> {
    const tx = await this.cancelAndSettleFundsTransactions(order, market);
    return this.transactionSender.send([tx], this.rpcProvider.connection);
  }

  private async cancelAndSettleFundsTransactions(
    order: OpenbookOrder,
    market: OpenbookMarket
  ) {
    const obMarket = await OBMarket.load(this.openbookClient, market.publicKey);
    const openOrders = await OpenOrders.loadNullableForMarketAndOwner(
      obMarket,
      this.transactionSender.owner
    );
    if (!openOrders) {
      return [];
    }

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

/**
 * Get the already filled quantity
 * @param order Openbook order
 * @returns Partially filled quantity
 */
export const getPartiallyFilledAmountFromBookSideOrder = (order: OBOrder) =>
  order.leafNode.quantity.div(new BN(order.sizeLots)); // TODO: Check this computation

export const isPass = (
  order: OpenbookOrder,
  proposal: ProposalAccountWithKey
) => proposal?.account.openbookPassMarket.equals(order.market)!!;

export const isPartiallyFilled = (order: OpenbookOrder): boolean =>
  order.filled > 0 && order.filled < order.size;

export const isEmptyOrder = (order: OpenbookOrder): boolean => order.size === 0;

export const isClosableOrder = (order: OpenbookOrder): boolean =>
  order.filled === order.size;

export const isOpenOrder = (order: OpenbookOrder): boolean =>
  order.status === "open";

export const isBid = (order: OpenbookOrder) => order.side === "bid";

/**
 * The total value (in quote asset) of the given orders
 * @param orders The orders used to compute the sum
 * @returns A formatted string of the total
 */
export const totalValueInOrders = (orders: OpenbookOrder[]): string => {
  const total = orders
    .map((order) =>
      order.side === "bid" ? order.size / order.price : order.size
    )
    .reduce((a, b) => a + b, 0);
  return numeral(total).format(NUMERAL_FORMAT);
};

/**
 * The total amount of quote asset in the given orders
 * @param orders The orders used to compute the sum
 * @returns A formatted string of the total
 */
export const totalQuoteAssetInOrders = (orders: OpenbookOrder[]) => {
  const total = orders
    .map((order) => (order.side === "bid" ? order.size : 0))
    .reduce((a, b) => a + b, 0);
  return numeral(total).format(NUMERAL_FORMAT);
};

export const totalBaseAssetInOrders = (orders: OpenbookOrder[]) => {
  const total = orders
    .map((order) => (order.side === "bid" ? 0 : order.size))
    .reduce((a, b) => a + b, 0);
  return numeral(total).format(BASE_FORMAT);
};
