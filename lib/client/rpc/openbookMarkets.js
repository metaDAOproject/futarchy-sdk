"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyOpenbookMarketsRPCClient = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const openbook_v2_1 = require("@openbook-dex/openbook-v2");
const openbook_1 = require("../../openbook");
const constants_1 = require("../../constants");
class FutarchyOpenbookMarketsRPCClient {
    constructor(rpcProvider, openbook, openbookClient) {
        this.openbook = openbook;
        this.openbookClient = openbookClient;
        this.rpcProvider = rpcProvider;
    }
    async fetchConditionalMarketsFromProposal(proposal, baseToken, quoteToken) {
        const accountInfos = await this.rpcProvider.connection.getMultipleAccountsInfo([
            proposal.account.openbookPassMarket,
            proposal.account.openbookFailMarket,
            proposal.account.openbookTwapPassMarket,
            proposal.account.openbookTwapFailMarket,
            proposal.account.baseVault,
            proposal.account.quoteVault,
        ]);
        if (!accountInfos || accountInfos.indexOf(null) >= 0)
            return;
        const [passOpenBookMarket, failOpenBookMarket] = await Promise.all([
            // pass market is index 0
            this.openbook.coder.accounts.decode("market", accountInfos[0].data),
            // fail market is index 1
            this.openbook.coder.accounts.decode("market", accountInfos[1].data),
        ]);
        const bookAccountInfos = await this.rpcProvider.connection.getMultipleAccountsInfo([
            passOpenBookMarket.asks,
            passOpenBookMarket.bids,
            failOpenBookMarket.asks,
            failOpenBookMarket.bids,
        ]);
        const passAsksNodes = (0, openbook_1.getLeafNodes)(await this.openbook.coder.accounts.decode("bookSide", bookAccountInfos[0].data), this.openbook);
        const passBidsNodes = (0, openbook_1.getLeafNodes)(await this.openbook.coder.accounts.decode("bookSide", bookAccountInfos[1].data), this.openbook);
        const failAsksNodes = (0, openbook_1.getLeafNodes)(await this.openbook.coder.accounts.decode("bookSide", bookAccountInfos[2].data), this.openbook);
        const failBidsNodes = (0, openbook_1.getLeafNodes)(await this.openbook.coder.accounts.decode("bookSide", bookAccountInfos[3].data), this.openbook);
        const passMarket = {
            marketType: "pass",
            bids: passBidsNodes.map((leafNode) => {
                const size = (0, openbook_v2_1.baseLotsToUi)(passOpenBookMarket, leafNode.quantity);
                const price = (0, openbook_v2_1.priceLotsToUi)(passOpenBookMarket, leafNode.key.shrn(64));
                return {
                    price,
                    size,
                    market: proposal === null || proposal === void 0 ? void 0 : proposal.account.openbookPassMarket,
                    marketType: "pass",
                    owner: leafNode.owner,
                    ownerSlot: leafNode.ownerSlot,
                    side: "bid",
                    timestamp: leafNode.timestamp,
                    time: new Date(leafNode.timestamp),
                    status: "open",
                    token: {
                        ...quoteToken,
                        symbol: "p" + quoteToken.symbol,
                    },
                    clientOrderId: leafNode.clientOrderId,
                };
            }),
            asks: passAsksNodes.map((leafNode) => {
                const size = (0, openbook_v2_1.baseLotsToUi)(passOpenBookMarket, leafNode.quantity);
                const price = (0, openbook_v2_1.priceLotsToUi)(passOpenBookMarket, leafNode.key.shrn(64));
                return {
                    price,
                    size,
                    market: proposal === null || proposal === void 0 ? void 0 : proposal.account.openbookPassMarket,
                    marketType: "pass",
                    owner: leafNode.owner,
                    ownerSlot: leafNode.ownerSlot,
                    side: "ask",
                    timestamp: leafNode.timestamp,
                    time: new Date(leafNode.timestamp),
                    status: "open",
                    token: {
                        ...baseToken,
                        symbol: "p" + baseToken.symbol,
                    },
                    clientOrderId: leafNode.clientOrderId,
                };
            }),
        };
        const failMarket = {
            marketType: "fail",
            bids: failBidsNodes.map((leafNode) => {
                const size = (0, openbook_v2_1.baseLotsToUi)(passOpenBookMarket, leafNode.quantity);
                const price = (0, openbook_v2_1.priceLotsToUi)(passOpenBookMarket, leafNode.key.shrn(64));
                return {
                    price,
                    size,
                    market: proposal === null || proposal === void 0 ? void 0 : proposal.account.openbookFailMarket,
                    marketType: "fail",
                    owner: leafNode.owner,
                    ownerSlot: leafNode.ownerSlot,
                    side: "bid",
                    timestamp: leafNode.timestamp,
                    time: new Date(leafNode.timestamp),
                    status: "open",
                    token: {
                        ...quoteToken,
                        symbol: "f" + quoteToken.symbol,
                    },
                    clientOrderId: leafNode.clientOrderId,
                };
            }),
            asks: failAsksNodes.map((leafNode) => {
                const size = (0, openbook_v2_1.baseLotsToUi)(passOpenBookMarket, leafNode.quantity);
                const price = (0, openbook_v2_1.priceLotsToUi)(passOpenBookMarket, leafNode.key.shrn(64));
                return {
                    price,
                    size,
                    market: proposal === null || proposal === void 0 ? void 0 : proposal.account.openbookFailMarket,
                    marketType: "fail",
                    owner: leafNode.owner,
                    ownerSlot: leafNode.ownerSlot,
                    side: "ask",
                    timestamp: leafNode.timestamp,
                    time: new Date(leafNode.timestamp),
                    status: "open",
                    token: {
                        ...baseToken,
                        symbol: "f" + baseToken.symbol,
                    },
                    clientOrderId: leafNode.clientOrderId,
                };
            }),
        };
        return [passMarket, failMarket];
    }
    async filterUserOpenOrdersFromProposalMarkets(passMarket, failMarket, owner) {
        const openOrdersPks = (await (0, openbook_1.getUsersOpenOrderPks)(this.openbookClient, owner)).map((p) => p.toString());
        const allOrders = [
            ...passMarket.asks,
            ...passMarket.bids,
            ...failMarket.asks,
            ...failMarket.bids,
        ];
        const userOrders = allOrders
            .filter((o) => { var _a; return !!o.market && openOrdersPks.includes((_a = o.owner) === null || _a === void 0 ? void 0 : _a.toString()); })
            .map((o) => {
            const position = o.side === "bid"
                ? {
                    asksBaseLots: new anchor_1.BN(0),
                    bidsBaseLots: new anchor_1.BN(o.size),
                    baseFreeNative: new anchor_1.BN(),
                    quoteFreeNative: new anchor_1.BN(),
                    lockedMakerFees: new anchor_1.BN(),
                    referrerRebatesAvailable: new anchor_1.BN(),
                    penaltyHeapCount: new anchor_1.BN(),
                    makerVolume: new anchor_1.BN(),
                    takerVolume: new anchor_1.BN(),
                    reserved: [],
                }
                : {
                    bidsBaseLots: new anchor_1.BN(0),
                    asksBaseLots: new anchor_1.BN(o.size),
                    baseFreeNative: new anchor_1.BN(),
                    quoteFreeNative: new anchor_1.BN(),
                    lockedMakerFees: new anchor_1.BN(),
                    referrerRebatesAvailable: new anchor_1.BN(),
                    penaltyHeapCount: new anchor_1.BN(),
                    makerVolume: new anchor_1.BN(),
                    takerVolume: new anchor_1.BN(),
                    reserved: [],
                };
            const order = {
                publicKey: o.owner,
                account: {
                    owner: o.owner,
                    accountNum: o.clientOrderId.toNumber(),
                    market: o.market,
                    position,
                    bump: 0,
                    delegate: {
                        key: o.owner,
                    },
                    name: [],
                    openOrders: [
                        {
                            clientId: o.clientOrderId,
                            id: new anchor_1.BN(),
                            isFree: 0,
                            lockedPrice: new anchor_1.BN(o.price / constants_1.QUOTE_LOTS),
                            padding: new anchor_1.BN(),
                            sideAndTree: 0,
                        },
                    ],
                    padding: [],
                },
            };
            return order;
        })
            .sort((a, b) => (a.account.accountNum < b.account.accountNum ? 1 : -1));
        return [];
    }
}
exports.FutarchyOpenbookMarketsRPCClient = FutarchyOpenbookMarketsRPCClient;
