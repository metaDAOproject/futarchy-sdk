"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyOpenbookMarketsRPCClient = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const openbook_v2_1 = require("@openbook-dex/openbook-v2");
const web3_js_1 = require("@solana/web3.js");
const openbook_twap_v0_1_json_1 = __importDefault(require("../../idl/openbook_twap_v0.1.json"));
const openbook_twap_v0_2_json_1 = __importDefault(require("../../idl/openbook_twap_v0.2.json"));
const constants_1 = require("../../constants");
const spl_token_1 = require("@solana/spl-token");
const tokens_1 = require("../../tokens");
const openbookTwap_1 = require("../../openbookTwap");
class FutarchyOpenbookMarketsRPCClient {
    constructor(rpcProvider, programVersion, openbook, openbookClient, transactionSender) {
        this.openbook = openbook;
        this.openbookClient = openbookClient;
        this.rpcProvider = rpcProvider;
        if (["V0.2", "V0.3"].includes(programVersion === null || programVersion === void 0 ? void 0 : programVersion.label)) {
            this.openbookTwap = new anchor_1.Program(openbook_twap_v0_2_json_1.default, constants_1.OPENBOOK_TWAP_PROGRAM_IDV0_2, rpcProvider);
        }
        else {
            this.openbookTwap = new anchor_1.Program(openbook_twap_v0_1_json_1.default, constants_1.OPENBOOK_TWAP_PROGRAM_IDV0_1, rpcProvider);
        }
        this.transactionSender = transactionSender;
    }
    async fetchMarket(marketKey) {
        const obMarket = await openbook_v2_1.Market.load(this.openbookClient, marketKey);
        const baseToken = await (0, tokens_1.enrichTokenMetadata)(obMarket.account.baseMint, this.rpcProvider);
        const quoteToken = await (0, tokens_1.enrichTokenMetadata)(obMarket.account.quoteMint, this.rpcProvider);
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
    async fetchOrderBook(market) {
        const obMarket = new openbook_v2_1.Market(this.openbookClient, market.publicKey, market.marketInstance.account);
        const bids = [];
        const bidsBookSide = await obMarket.loadBids();
        for (const bid of bidsBookSide.items()) {
            const bidOrder = this.getOrderbookOrderFromBookSideOrder(bid, "bid", market);
            bids.push(bidOrder);
        }
        const asks = [];
        const asksBookSide = await obMarket.loadAsks();
        for (const ask of asksBookSide.items()) {
            const askOrder = this.getOrderbookOrderFromBookSideOrder(ask, "ask", market);
            asks.push(askOrder);
        }
        return {
            asks,
            bids,
        };
    }
    getOrderbookOrderFromBookSideOrder(bookSideOrder, side, market) {
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
    async getUsersOpenOrderPks(userWalletPk) {
        const indexerPk = this.openbookClient.findOpenOrdersIndexer(userWalletPk);
        const indexerAcc = await this.openbookClient.deserializeOpenOrdersIndexerAccount(indexerPk);
        const openOrdersPks = indexerAcc === null || indexerAcc === void 0 ? void 0 : indexerAcc.addresses;
        return openOrdersPks !== null && openOrdersPks !== void 0 ? openOrdersPks : [];
    }
    async fetchUserOrdersFromOrderbooks(owner, orderbooks) {
        const openOrdersPks = (await this.getUsersOpenOrderPks(owner)).map((p) => p.toString());
        const allOrders = orderbooks.map((ob) => [...ob.bids, ...ob.asks]).flat();
        const userOrders = allOrders
            .filter((o) => { var _a; return openOrdersPks.includes((_a = o.owner) === null || _a === void 0 ? void 0 : _a.toString()); })
            .sort((a, b) => (a.clientOrderId < b.clientOrderId ? 1 : -1));
        return userOrders !== null && userOrders !== void 0 ? userOrders : [];
    }
    async placeOrder(market, order, placeOrderType, openOrdersAccountAddress) {
        if (!openOrdersAccountAddress) {
            // use the first open orders account by default
            const openOrdersIndexer = await this.getUsersOpenOrderPks(this.transactionSender.owner);
            openOrdersAccountAddress = openOrdersIndexer[0];
        }
        const mint = order.side === "ask"
            ? market.marketInstance.account.baseMint
            : market.marketInstance.account.quoteMint;
        const marketVault = order.side === "ask"
            ? market.marketInstance.account.marketBaseVault
            : market.marketInstance.account.marketQuoteVault;
        // TODO not sure how this works when clientOrderId not specified
        const clientOrderId = new anchor_1.BN(order.clientOrderId || Date.now());
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
                twapMarket: (0, openbookTwap_1.getTwapMarketKey)(market.publicKey, this.openbookTwap.programId),
                userTokenAccount: (0, spl_token_1.getAssociatedTokenAddressSync)(mint, this.transactionSender.owner, true),
                openbookProgram: this.openbook.programId,
            })
                .transaction();
            return this.transactionSender.send([placeTx], this.rpcProvider.connection);
        }
        return [];
    }
    createOrderToPlace(order, placeOrderType) {
        // TODO support more types
        const orderType = placeOrderType === "limit"
            ? openbook_v2_1.PlaceOrderTypeUtils.Limit
            : openbook_v2_1.PlaceOrderTypeUtils.Market;
        const orderToPlace = {
            price: order.price,
            side: order.side === "ask" ? openbook_v2_1.SideUtils.Ask : openbook_v2_1.SideUtils.Bid,
            size: order.size,
            clientOrderId: order.clientOrderId,
            expiryTimestamp: new anchor_1.BN(0),
            selfTradeBehavior: openbook_v2_1.SelfTradeBehaviorUtils.AbortTransaction,
            orderType,
        };
        return orderToPlace;
    }
    createPlaceOrderArgs({ amount, price, isLimitOrder, isPostOnlyOrder, isAsk, accountIndex, market, }) {
        let priceLots = market.priceLotsToUi(price);
        const _priceLots = market.priceLotsToUi(price);
        const maxBaseLots = market.baseLotsToUi(amount);
        let maxQuoteLotsIncludingFees = market.quoteLotsToUi(priceLots * maxBaseLots);
        if (!isLimitOrder) {
            if (!isAsk) {
                // TODO: Want to setup max price (TBD)
                priceLots = new anchor_1.BN(1000000000000000);
                maxQuoteLotsIncludingFees = priceLots * maxBaseLots;
            }
            else {
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
            ? openbook_v2_1.PlaceOrderTypeUtils.PostOnly
            : isLimitOrder
                ? openbook_v2_1.PlaceOrderTypeUtils.Limit
                : openbook_v2_1.PlaceOrderTypeUtils.Market;
        return {
            side: isAsk ? openbook_v2_1.SideUtils.Ask : openbook_v2_1.SideUtils.Bid,
            priceLots,
            maxBaseLots,
            maxQuoteLotsIncludingFees,
            clientOrderId: accountIndex,
            orderType,
            expiryTimestamp: new anchor_1.BN(0),
            selfTradeBehavior: openbook_v2_1.SelfTradeBehaviorUtils.AbortTransaction,
            limit: 255,
        };
    }
    async cancelOrder(market, orderWithAccountAddress) {
        const tx = await this.cancelAndSettleFundsTransactions(orderWithAccountAddress, orderWithAccountAddress.openOrdersAccountAddress, market);
        return this.transactionSender.send([tx], this.rpcProvider.connection);
    }
    async cancelAndSettleFundsTransactions(order, openOrdersAccountAddress, market) {
        const obMarket = await openbook_v2_1.Market.load(this.openbookClient, market.publicKey);
        const openOrders = await openbook_v2_1.OpenOrders.load(openOrdersAccountAddress, obMarket);
        const userBaseAccount = (0, spl_token_1.getAssociatedTokenAddressSync)(market.baseMint, this.transactionSender.owner, true);
        const userQuoteAccount = (0, spl_token_1.getAssociatedTokenAddressSync)(market.quoteMint, this.transactionSender.owner, true);
        const ixs = [];
        const id = new anchor_1.BN(order.clientOrderId);
        const [cancelIx] = await openOrders.cancelOrderByClientIdIx(id);
        ixs.push(cancelIx);
        const [settleIx] = await openOrders.settleFundsIx(userBaseAccount, userQuoteAccount, 
        // TODO: what is referrer address and what about penaltyfee payer??
        null, this.transactionSender.owner);
        ixs.push(settleIx);
        return new web3_js_1.Transaction().add(...ixs);
    }
    async withdraw(owner, amount, mint) {
        return;
    }
}
exports.FutarchyOpenbookMarketsRPCClient = FutarchyOpenbookMarketsRPCClient;
