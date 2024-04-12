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
            marketAuthority: passOpenBookMarket.marketAuthority,
            baseVault: passOpenBookMarket.marketBaseVault,
            quoteVault: passOpenBookMarket.marketQuoteVault,
            bidsPublicKey: passOpenBookMarket.bids,
            asksPublicKey: passOpenBookMarket.asks,
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
        const failMarket = {
            marketAuthority: failOpenBookMarket.marketAuthority,
            baseVault: failOpenBookMarket.marketBaseVault,
            quoteVault: failOpenBookMarket.marketQuoteVault,
            bidsPublicKey: failOpenBookMarket.bids,
            asksPublicKey: failOpenBookMarket.asks,
            publicKey: proposal.account.openbookPassMarket,
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
    //options
    // I could add everything I need to the order
    // just use the market in the queryData...
    async cancelUserOrder(market, order, proposal, baseMint, quoteMint) {
        const txs = await this.cancelAndSettleFundsTransactions(this.transactionSender.owner, order.clientOrderId, proposal.quoteVaultAccount.conditionalOnFinalizeTokenMint, proposal.baseVaultAccount.conditionalOnFinalizeTokenMint, proposal.quoteVaultAccount.conditionalOnRevertTokenMint, proposal.baseVaultAccount.conditionalOnRevertTokenMint, market, baseMint, quoteMint);
        return this.transactionSender.send(txs, this.rpcProvider.connection);
    }
    async cancelAndSettleFundsTransactions(owner, orderId, quoteConditionalOnFinalizeTokenMint, baseConditionalOnFinalizeTokenMint, quoteConditionalOnRevertTokenMint, baseConditionalOnRevertTokenMint, market, baseMint, quoteMint) {
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
            marketAuthority: market.marketAuthority,
            marketBaseVault: market.baseVault,
            marketQuoteVault: market.quoteVault,
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
                asks: market.asksPublicKey,
                bids: market.bidsPublicKey,
                market: market.publicKey,
                twapMarket: web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("twap_market"), market.publicKey.toBuffer()], this.openbookTwap.programId)[0],
                openbookProgram: this.openbook.programId,
            })
                .instruction(),
            (0, spl_token_1.createAssociatedTokenAccountIdempotentInstruction)(owner, userBaseAccount, owner, baseMint),
            (0, spl_token_1.createAssociatedTokenAccountIdempotentInstruction)(owner, userQuoteAccount, owner, quoteMint),
        ])
            .transaction();
        return [placeTx];
    }
}
exports.FutarchyOpenbookMarketsRPCClient = FutarchyOpenbookMarketsRPCClient;
