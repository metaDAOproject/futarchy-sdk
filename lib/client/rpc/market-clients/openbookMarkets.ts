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
import {
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import {
  OpenbookMarket,
  OpenbookMarketFetchRequest,
  OpenbookOrder,
  OrderBookSideType,
  Orderbook,
  PlaceOrderType,
  ProposalAccountWithKey,
  TwapPlaceOrderArgs,
} from "@/types";
import { FutarchyOrderbookMarketsClient } from "@/client";
import { TransactionSender } from "@/transactions";
import { enrichTokenMetadata } from "@/tokens";
import { getTwapMarketKey } from "@/openbookTwap";
import { BASE_FORMAT, MAX_MARKET_PRICE, NUMERAL_FORMAT } from "@/constants";
import { shortKey } from "@/utils";
import { utf8 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";

export class FutarchyOpenbookMarketsRPCClient
  implements FutarchyOrderbookMarketsClient<OpenbookMarket, OpenbookOrder>
{
  private openbook: Program<OpenbookV2>;
  private openbookClient: OpenBookV2Client;
  private rpcProvider: Provider;
  private transactionSender: TransactionSender | undefined;

  constructor(
    rpcProvider: Provider,
    openbook: Program<OpenbookV2>,
    openbookClient: OpenBookV2Client,
    transactionSender: TransactionSender | undefined
  ) {
    this.openbook = openbook;
    this.openbookClient = openbookClient;
    this.rpcProvider = rpcProvider;
    this.transactionSender = transactionSender;
  }

  async fetchMarket(
    // we may need to extend this to add the twapMarket address on here
    request: OpenbookMarketFetchRequest
  ): Promise<OpenbookMarket | undefined> {
    try {
      const obMarket = await OBMarket.load(
        this.openbookClient,
        request.marketKey
      );

      const baseToken = await enrichTokenMetadata(
        obMarket.account.baseMint,
        this.rpcProvider
      );
      const quoteToken = await enrichTokenMetadata(
        obMarket.account.quoteMint,
        this.rpcProvider
      );

      const marketName = utf8
        .decode(new Uint8Array(obMarket.account.name))
        .split("\x00")[0];

      const baseTokenWithSymbol = !baseToken.isFallback
        ? baseToken
        : {
            ...baseToken,
            symbol: marketName.split("/")[0],
          };
      const quoteTokenWithSymbol = !quoteToken.isFallback
        ? quoteToken
        : {
            ...quoteToken,
            symbol: marketName.split("/")[0],
          };

      return {
        baseMint: obMarket.account.baseMint,
        baseToken: baseTokenWithSymbol,
        quoteMint: obMarket.account.quoteMint,
        quoteToken: quoteTokenWithSymbol,
        createdAt: obMarket.account.registrationTime.toNumber(),
        makerFee: obMarket.account.makerFee.toNumber(),
        marketAuthority: obMarket.account.marketAuthority,
        minOrderAmount: obMarket.minOrderSize,
        minPriceIncrement: obMarket.quoteLotFactor,
        publicKey: request.marketKey,
        takerFee: obMarket.account.takerFee.toNumber(),
        type: "openbookv2",
        // can avoid refetching market for the orderbook if we pass this in
        marketInstance: obMarket,
        twapProgram: request.twapProgram,
      };
    } catch (e) {
      console.error("error fetching openbook market", e);
    }
  }

  async fetchOrderBook(
    market: OpenbookMarket
  ): Promise<Orderbook<OpenbookOrder> | undefined> {
    const obMarket = new OBMarket(
      this.openbookClient,
      market.publicKey,
      market.marketInstance.account
    );
    try {
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
    } catch (e) {
      console.error("error fetching orderbook", e);
      return;
    }
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
      time: new Date(bookSideOrder.leafNode.timestamp.toNumber()),
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
    order: Omit<OpenbookOrder, "owner" | "status" | "filled">,
    placeOrderType: PlaceOrderType
  ): Promise<string[]> {
    if (!this.transactionSender) return [];
    const mint =
      order.side === "ask"
        ? market.marketInstance.account.baseMint
        : market.marketInstance.account.quoteMint;
    const marketVault =
      order.side === "ask"
        ? market.marketInstance.account.marketBaseVault
        : market.marketInstance.account.marketQuoteVault;
    const [accountIndex, openTx] = await this.getOrCreateOpenOrdersIndexer({
      indexOffset: 0,
      owner: this.transactionSender?.owner,
    });
    const [openOrdersIx, openOrdersAccountAddress] =
      await this.openbookClient.createOpenOrdersIx(
        market.publicKey,
        `${shortKey(this.transactionSender.owner)}-${shortKey(accountIndex)}`,
        this.transactionSender.owner,
        // TODO do we have delegate?
        null,
        this.openbookClient.findOpenOrdersIndexer(this.transactionSender.owner)
      );
    openTx.add(...openOrdersIx);

    const placeLimitOrderArgs = this.createPlaceOrderArgs({
      orderType: placeOrderType,
      accountIndex,
      market: market.marketInstance,
      isAsk: order.side === "ask",
      amount: order.size,
      price: order.price,
    });

    if (!placeLimitOrderArgs) {
      console.error("failed to create place limit order args");
      return [];
    }

    const placeTx = await market.twapProgram.methods
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
          market.twapProgram.programId
        ),
        userTokenAccount: getAssociatedTokenAddressSync(
          mint,
          this.transactionSender.owner,
          true
        ),
        openbookProgram: this.openbook.programId,
      })
      .preInstructions(openTx.instructions)
      .transaction();

    return this.transactionSender.send([placeTx], this.rpcProvider.connection);
  }

  async getOrCreateOpenOrdersIndexer({
    owner,
    indexOffset,
  }: {
    owner: PublicKey;
    indexOffset?: number;
  }): Promise<[BN, Transaction]> {
    const openTx = new Transaction();
    const openOrdersIndexer = this.openbookClient.findOpenOrdersIndexer(owner);
    let accountIndex = new BN(1);
    try {
      const indexer = await this.openbook.account.openOrdersIndexer.fetch(
        openOrdersIndexer
      );
      accountIndex = new BN(
        (indexer?.createdCounter || 0) + 1 + (indexOffset || 0)
      );
    } catch {
      if (!indexOffset) {
        openTx.add(
          await this.openbook.methods
            .createOpenOrdersIndexer()
            .accounts({
              openOrdersIndexer,
              owner,
              payer: owner,
            })
            .instruction()
        );
      } else {
        accountIndex = new BN(1 + (indexOffset || 0));
      }
    }

    return [accountIndex, openTx];
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
    const priceCalc = orderType === "limit" ? price : 0;
    let priceLots = market.priceUiToLots(priceCalc);
    const _priceLots = market.priceUiToLots(priceCalc);
    const maxBaseLots = market.baseUiToLots(amount);
    let maxQuoteLotsIncludingFees = market.quoteUiToLots(
      priceLots.mul(maxBaseLots)
    );

    if (_priceLots === priceLots) {
      console.error("price lots not matching on create place order args");
      return;
    }

    return {
      side: isAsk ? SideUtils.Ask : SideUtils.Bid,
      priceLots,
      maxBaseLots,
      maxQuoteLotsIncludingFees: maxQuoteLotsIncludingFees,
      clientOrderId: new BN(accountIndex),
      orderType:
        orderType === "limit"
          ? PlaceOrderTypeUtils.Limit
          : PlaceOrderTypeUtils.Market,
      expiryTimestamp: new BN(0),
      selfTradeBehavior: SelfTradeBehaviorUtils.AbortTransaction,
      limit: 255,
    };
  }

  private getMarketOrderPrice(
    side: OrderBookSideType,
    market: OBMarket
  ): number {
    return side === "ask"
      ? market.account.quoteLotSize.toNumber()
      : MAX_MARKET_PRICE;
  }

  async cancelOrder(
    market: OpenbookMarket,
    order: OpenbookOrder
  ): Promise<string[]> {
    if (!this.transactionSender) return [];
    const tx = await this.cancelAndSettleFundsTransactions(order, market);
    return this.transactionSender.send([tx], this.rpcProvider.connection);
  }

  private async cancelAndSettleFundsTransactions(
    order: OpenbookOrder,
    market: OpenbookMarket
  ) {
    if (!this.transactionSender) return [];
    const openOrders = await OpenOrders.load(
      order.owner,
      market.marketInstance,
      this.openbookClient
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
      // TODO: shoudl we add referrer address?
      null,
      this.transactionSender.owner
    );
    ixs.push(settleIx);

    //TODO: close the account too

    return new Transaction().add(...ixs);
  }

  /** deprecated */
  async placeOrderNoNewOpenOrdersAccount(
    market: OpenbookMarket,
    order: Omit<OpenbookOrder, "owner" | "status" | "filled">,
    placeOrderType: PlaceOrderType,
    openOrdersAccountAddress?: PublicKey
  ): Promise<string[]> {
    // consider just creating an open orders account everytime
    if (!this.transactionSender) {
      return [];
    }
    const placeTx = new Transaction();
    if (!openOrdersAccountAddress) {
      // use the first open orders account by default
      const openOrders = await OpenOrders.loadNullableForMarketAndOwner(
        market.marketInstance,
        this.transactionSender.owner
      );
      openOrdersAccountAddress = openOrders?.pubkey;
      // if it's still null, check for OOI, if no OOI create that, then create OO and use address
      if (!openOrdersAccountAddress) {
        const [openOrdersIx, accountAddress] =
          await this.openbookClient.createOpenOrdersIx(
            market.publicKey,
            `${shortKey(this.transactionSender.owner)}-${shortKey(
              market.publicKey
            )}`,
            this.transactionSender.owner,
            // TODO do we have delegate?
            null,
            null
          );
        placeTx.add(...openOrdersIx);
        openOrdersAccountAddress = accountAddress;
      }
    }
    if (!openOrdersAccountAddress) {
      console.error("no OpenOrders address found");
      return [];
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
    let placeIx: TransactionInstruction | undefined;
    switch (placeOrderType) {
      case "limit":
        const placeLimitOrderArgs = this.createPlaceOrderArgs({
          orderType: placeOrderType,
          accountIndex: clientOrderId.toNumber(),
          market: market.marketInstance,
          isAsk: order.side === "ask",
          amount: order.size,
          price: order.price,
        });
        if (placeLimitOrderArgs) {
          placeIx = await market.twapProgram.methods
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
                market.twapProgram.programId
              ),
              userTokenAccount: getAssociatedTokenAddressSync(
                mint,
                this.transactionSender.owner,
                true
              ),
              openbookProgram: this.openbook.programId,
            })
            .instruction();
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
          accountIndex: clientOrderId.toNumber(),
          market: market.marketInstance,
          isAsk: order.side === "ask",
          amount: order.size,
          price: order.price,
        });
        if (placeMarketOrderArgs) {
          placeIx = await market.twapProgram.methods
            .placeTakeOrder(placeMarketOrderArgs)
            .accounts({
              asks: market.marketInstance.account.asks,
              bids: market.marketInstance.account.bids,
              eventHeap: market.marketInstance.account.eventHeap,
              market: market.publicKey,
              twapMarket: getTwapMarketKey(
                market.publicKey,
                market.twapProgram.programId
              ),
              openbookProgram: this.openbook.programId,
              // marketVault,
              // openOrdersAccount: openOrdersAccountAddress,
              // userTokenAccount: getAssociatedTokenAddressSync(
              //   mint,
              //   this.transactionSender.owner,
              //   true
              // ),

              userBaseAccount,
              userQuoteAccount,
              marketAuthority: market.marketInstance.account.marketAuthority,
              marketBaseVault: market.marketInstance.account.marketBaseVault,
              marketQuoteVault: market.marketInstance.account.marketQuoteVault,
              // name of program account is misleading...
              tokenProgram: TOKEN_PROGRAM_ID,
            })
            .instruction();
        }
        break;
    }
    if (placeIx) {
      placeTx.add(placeIx);
      return this.transactionSender.send(
        [placeTx],
        this.rpcProvider.connection
      );
    }

    return [];
  }
}

/** HELPERS AND UTILS FOR OPENBOOK MARKETS */

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
) => proposal?.account.openbookPassMarket?.equals(order.market)!!;

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
