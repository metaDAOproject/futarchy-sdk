"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyOpenbookMarketsRPCClient = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const openbook_v2_1 = require("@openbook-dex/openbook-v2");
const openbook_1 = require("../../openbook");
const web3_js_1 = require("@solana/web3.js");
const openbook_twap_v0_1_json_1 = __importDefault(require("../../idl/openbook_twap_v0.1.json"));
const openbook_twap_v0_2_json_1 = __importDefault(require("../../idl/openbook_twap_v0.2.json"));
const constants_1 = require("../../constants");
const spl_token_1 = require("@solana/spl-token");
const utils_1 = require("../../utils");
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
            openbookMarketAccount: passOpenBookMarket,
            baseVault: passOpenBookMarket.marketBaseVault,
            quoteVault: passOpenBookMarket.marketQuoteVault,
            publicKey: proposal.account.openbookPassMarket,
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
        // pass it through here or just add nested object for god sakes?
        const failMarket = {
            openbookMarketAccount: failOpenBookMarket,
            baseVault: failOpenBookMarket.marketBaseVault,
            quoteVault: failOpenBookMarket.marketQuoteVault,
            publicKey: proposal.account.openbookFailMarket,
            marketType: "fail",
            bids: failBidsNodes.map((leafNode) => {
                const size = (0, openbook_v2_1.baseLotsToUi)(failOpenBookMarket, leafNode.quantity);
                const price = (0, openbook_v2_1.priceLotsToUi)(failOpenBookMarket, leafNode.key.shrn(64));
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
                const size = (0, openbook_v2_1.baseLotsToUi)(failOpenBookMarket, leafNode.quantity);
                const price = (0, openbook_v2_1.priceLotsToUi)(failOpenBookMarket, leafNode.key.shrn(64));
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
        return { pass: passMarket, fail: failMarket };
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
            .sort((a, b) => (a.clientOrderId < b.clientOrderId ? 1 : -1));
        return userOrders !== null && userOrders !== void 0 ? userOrders : [];
    }
    async placeUserOrder(market, order, placeOrderType) {
        const mint = order.side === "ask"
            ? market.openbookMarketAccount.baseMint
            : market.openbookMarketAccount.quoteMint;
        const openOrdersIndexer = (0, openbook_1.findOpenOrdersIndexer)(this.transactionSender.owner);
        const marketVault = order.side === "ask"
            ? market.openbookMarketAccount.marketBaseVault
            : market.openbookMarketAccount.marketQuoteVault;
        const [accountIndex, openTx] = await (0, openbook_1.findOpenOrdersIndex)({
            signer: this.transactionSender.owner,
            openbook: this.openbook,
        });
        const [ixs, openOrdersAccount] = await this.createOpenOrdersInstruction(market.publicKey, accountIndex, `${(0, utils_1.shortKey)(this.transactionSender.owner)}-${accountIndex.toString()}`, this.transactionSender.owner, openOrdersIndexer);
        openTx.add(...ixs);
        const args = this.createPlaceOrderArgs({
            order,
            orderType: placeOrderType === "limit" ? openbook_v2_1.OrderType.Limit : openbook_v2_1.OrderType.Market,
            placeOrderType,
            isAsk: order.side === "ask",
            accountIndex,
            market: market.openbookMarketAccount,
        });
        if (!args) {
            console.error("Error matching price");
            return [];
        }
        const placeTx = await this.openbookTwap.methods
            .placeOrder(args)
            .accounts({
            openOrdersAccount,
            asks: market.openbookMarketAccount.asks,
            bids: market.openbookMarketAccount.bids,
            eventHeap: market.openbookMarketAccount.eventHeap,
            market: market.publicKey,
            marketVault,
            twapMarket: (0, openbookTwap_1.getTwapMarketKey)(market.publicKey, this.openbookTwap.programId),
            userTokenAccount: (0, spl_token_1.getAssociatedTokenAddressSync)(mint, this.transactionSender.owner, true),
            openbookProgram: this.openbook.programId,
        })
            .preInstructions(openTx.instructions)
            .transaction();
        return this.transactionSender.send([placeTx], this.rpcProvider.connection);
    }
    async createOpenOrdersInstruction(market, accountIndex, name, owner, openOrdersIndexer) {
        const ixs = [];
        if (accountIndex.toNumber() === 0) {
            throw Object.assign(new Error("accountIndex can not be 0"), {
                code: 403,
            });
        }
        const openOrdersAccount = (0, openbook_1.findOpenOrders)(accountIndex, owner);
        ixs.push(await this.openbook.methods
            .createOpenOrdersAccount(name)
            .accounts({
            openOrdersIndexer,
            openOrdersAccount,
            market,
            owner,
            delegateAccount: null,
        })
            .instruction());
        return [ixs, openOrdersAccount];
    }
    createPlaceOrderArgs({ order, orderType, placeOrderType, isAsk, accountIndex, market, }) {
        // TODO: Update openbook lib to LATEST
        let priceLots = (0, openbook_v2_1.uiPriceToLots)(market, order.price);
        const _priceLots = (0, openbook_v2_1.uiPriceToLots)(market, order.price);
        const maxBaseLots = (0, openbook_v2_1.uiBaseToLots)(market, order.size);
        let maxQuoteLotsIncludingFees = (0, openbook_v2_1.uiQuoteToLots)(market, priceLots.mul(maxBaseLots));
        if (placeOrderType === "limit") {
            if (!isAsk) {
                // TODO: Want to setup max price (TBD)
                priceLots = new anchor_1.BN(1000000000000000);
                maxQuoteLotsIncludingFees = priceLots.mul(maxBaseLots);
            }
            else {
                // TODO: Check working
                priceLots = market.quoteLotSize;
                maxQuoteLotsIncludingFees = priceLots.mul(maxBaseLots);
            }
        }
        if (_priceLots === priceLots) {
            console.error("error price");
            return null;
        }
        return {
            side: isAsk ? openbook_v2_1.SideUtils.Ask : openbook_v2_1.SideUtils.Bid,
            priceLots,
            maxBaseLots,
            maxQuoteLotsIncludingFees,
            clientOrderId: accountIndex,
            orderType,
            expiryTimestamp: new anchor_1.BN(0),
            selfTradeBehavior: openbook_v2_1.SelfTradeBehavior.AbortTransaction,
            limit: 255,
        };
    }
    async cancelUserOrder(market, order, proposal) {
        const txs = await this.cancelAndSettleFundsTransactions(this.transactionSender.owner, order.clientOrderId, proposal.quoteVaultAccount.conditionalOnFinalizeTokenMint, proposal.baseVaultAccount.conditionalOnFinalizeTokenMint, proposal.quoteVaultAccount.conditionalOnRevertTokenMint, proposal.baseVaultAccount.conditionalOnRevertTokenMint, market);
        return this.transactionSender.send(txs, this.rpcProvider.connection);
    }
    async cancelAndSettleFundsTransactions(owner, orderId, quoteConditionalOnFinalizeTokenMint, baseConditionalOnFinalizeTokenMint, quoteConditionalOnRevertTokenMint, baseConditionalOnRevertTokenMint, market) {
        const openOrdersAccount = (0, openbook_1.findOpenOrders)(new anchor_1.BN(orderId), owner);
        const userBaseAccount = (0, spl_token_1.getAssociatedTokenAddressSync)(market.marketType === "pass"
            ? baseConditionalOnFinalizeTokenMint
            : baseConditionalOnRevertTokenMint, owner, true);
        const userQuoteAccount = (0, spl_token_1.getAssociatedTokenAddressSync)(market.marketType === "pass"
            ? quoteConditionalOnFinalizeTokenMint
            : quoteConditionalOnRevertTokenMint, owner, true);
        // TODO: 2x Txns for each side..
        const placeTx = await this.openbook.methods
            .settleFunds()
            .accounts({
            owner: owner,
            penaltyPayer: owner,
            openOrdersAccount,
            market: market.publicKey,
            marketAuthority: market.openbookMarketAccount.marketAuthority,
            marketBaseVault: market.openbookMarketAccount.marketBaseVault,
            marketQuoteVault: market.openbookMarketAccount.marketQuoteVault,
            userBaseAccount,
            userQuoteAccount,
            referrerAccount: null,
            tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
            systemProgram: constants_1.SYSTEM_PROGRAM,
        })
            .preInstructions([
            await this.openbookTwap.methods
                .cancelOrderByClientId(new anchor_1.BN(orderId))
                .accounts({
                openOrdersAccount,
                asks: market.openbookMarketAccount.asks,
                bids: market.openbookMarketAccount.bids,
                market: market.publicKey,
                twapMarket: web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("twap_market"), market.publicKey.toBuffer()], this.openbookTwap.programId)[0],
                openbookProgram: this.openbook.programId,
            })
                .instruction(),
            (0, spl_token_1.createAssociatedTokenAccountIdempotentInstruction)(owner, userBaseAccount, owner, market.openbookMarketAccount.baseMint),
            (0, spl_token_1.createAssociatedTokenAccountIdempotentInstruction)(owner, userQuoteAccount, owner, market.openbookMarketAccount.quoteMint),
        ])
            .transaction();
        return [placeTx];
    }
}
exports.FutarchyOpenbookMarketsRPCClient = FutarchyOpenbookMarketsRPCClient;
