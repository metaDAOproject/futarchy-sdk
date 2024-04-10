"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersOpenOrderPks = exports.totalMetaInOrder = exports.totalUsdcInOrder = exports.totalInOrder = exports.isBidOrAsk = exports.isCompletedOrder = exports.isOpenOrder = exports.isClosableOrder = exports.isEmptyOrder = exports.isPartiallyFilled = exports.isBid = exports.isPass = exports.getParsedOrders = exports.getLeafNodes = exports.createOpenOrdersInstruction = exports.findOpenOrders = exports.createOpenOrdersIndexerInstruction = exports.findOpenOrdersIndexer = exports.createOpenbookMarket = exports.createProgramAccount = void 0;
const web3_js_1 = require("@solana/web3.js");
const numeral_1 = __importDefault(require("numeral"));
const spl_token_1 = require("@solana/spl-token");
const constants_1 = require("./constants");
const BooksideSpace = 90944 + 8;
const EventHeapSpace = 91280 + 8;
const createProgramAccount = async (program, authority, size) => {
    const lamports = await program.provider.connection.getMinimumBalanceForRentExemption(size);
    const address = web3_js_1.Keypair.generate();
    const tx = new web3_js_1.Transaction().add(web3_js_1.SystemProgram.createAccount({
        fromPubkey: authority,
        newAccountPubkey: address.publicKey,
        lamports,
        space: size,
        programId: program.programId,
    }));
    return { tx, signers: [address] };
};
exports.createProgramAccount = createProgramAccount;
const createOpenbookMarket = async (program, creator, baseMint, quoteMint, name, quoteLotSize, baseLotSize, makerFee, takerFee, timeExpiry, oracleA, oracleB, openOrdersAdmin, consumeEventsAdmin, closeMarketAdmin, oracleConfigParams = {
    confFilter: 0.1,
    maxStalenessSlots: 100,
}, market = web3_js_1.Keypair.generate(), collectFeeAdmin) => {
    const bids = await (0, exports.createProgramAccount)(program, creator, BooksideSpace);
    const asks = await (0, exports.createProgramAccount)(program, creator, BooksideSpace);
    const eventHeap = await (0, exports.createProgramAccount)(program, creator, EventHeapSpace);
    const [marketAuthority] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("Market"), market.publicKey.toBuffer()], program.programId);
    const baseVault = (0, spl_token_1.getAssociatedTokenAddressSync)(baseMint, marketAuthority, true);
    const quoteVault = (0, spl_token_1.getAssociatedTokenAddressSync)(quoteMint, marketAuthority, true);
    const [eventAuthority] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("__event_authority")], program.programId);
    return {
        signers: [...bids.signers, ...asks.signers, ...eventHeap.signers, market],
        instructions: [
            bids.tx,
            asks.tx,
            eventHeap.tx,
            await program.methods
                .createMarket(name, oracleConfigParams, quoteLotSize, baseLotSize, makerFee, takerFee, timeExpiry)
                .accounts({
                market: market.publicKey,
                marketAuthority,
                bids: bids.signers[0].publicKey,
                asks: asks.signers[0].publicKey,
                eventHeap: eventHeap.signers[0].publicKey,
                payer: creator,
                marketBaseVault: baseVault,
                marketQuoteVault: quoteVault,
                baseMint,
                quoteMint,
                oracleA,
                oracleB,
                collectFeeAdmin: collectFeeAdmin != null ? collectFeeAdmin : creator,
                openOrdersAdmin,
                consumeEventsAdmin,
                closeMarketAdmin,
                eventAuthority,
                program: program.programId,
            })
                .instruction(),
        ],
    };
};
exports.createOpenbookMarket = createOpenbookMarket;
const findOpenOrdersIndexer = (owner) => {
    const [openOrdersIndexer] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("OpenOrdersIndexer"), owner.toBuffer()], constants_1.OPENBOOK_PROGRAM_ID);
    return openOrdersIndexer;
};
exports.findOpenOrdersIndexer = findOpenOrdersIndexer;
const createOpenOrdersIndexerInstruction = async (program, openOrdersIndexer, owner) => program.methods
    .createOpenOrdersIndexer()
    .accounts({
    openOrdersIndexer,
    owner,
    payer: owner,
})
    .instruction();
exports.createOpenOrdersIndexerInstruction = createOpenOrdersIndexerInstruction;
const findOpenOrders = (accountIndex, owner) => {
    const [openOrders] = web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("OpenOrders"),
        owner.toBuffer(),
        accountIndex.toArrayLike(Buffer, "le", 4),
    ], constants_1.OPENBOOK_PROGRAM_ID);
    return openOrders;
};
exports.findOpenOrders = findOpenOrders;
const createOpenOrdersInstruction = async (program, market, accountIndex, name, owner, openOrdersIndexer) => {
    const ixs = [];
    if (accountIndex.toNumber() === 0) {
        throw Object.assign(new Error("accountIndex can not be 0"), {
            code: 403,
        });
    }
    const openOrdersAccount = (0, exports.findOpenOrders)(accountIndex, owner);
    ixs.push(await program.methods
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
};
exports.createOpenOrdersInstruction = createOpenOrdersInstruction;
function getLeafNodes(bookside, program) {
    const leafNodesData = bookside.nodes.nodes.filter((x) => x.tag === 2);
    return leafNodesData.map((e) => program.coder.types.decode("LeafNode", Buffer.from([0, ...e.data])));
}
exports.getLeafNodes = getLeafNodes;
function getParsedOrders(side, isBidSide) {
    if (side.length === 0) {
        return [];
    }
    const parsed = side
        .map((e) => ({
        price: e.key.shrn(64).toNumber(),
        size: e.quantity.toNumber(),
    }))
        .sort((a, b) => a.price - b.price);
    const sorted = isBidSide
        ? parsed.sort((a, b) => b.price - a.price)
        : parsed.sort((a, b) => a.price - b.price);
    // const deduped = new Map();
    // sorted.forEach((order) => {
    //   if (deduped.get(order.price) === undefined) {
    //     deduped.set(order.price, order.size);
    //   } else {
    //     deduped.set(order.price, deduped.get(order.price) + order.size);
    //   }
    // });
    return sorted;
}
exports.getParsedOrders = getParsedOrders;
const isPass = (order, proposal) => proposal === null || proposal === void 0 ? void 0 : proposal.account.openbookPassMarket.equals(order.account.market);
exports.isPass = isPass;
const isBid = (order) => {
    const isBidSide = order.account.position.bidsBaseLots.gt(order.account.position.asksBaseLots);
    if (isBidSide) {
        return true;
    }
    return false;
};
exports.isBid = isBid;
const isPartiallyFilled = (order) => {
    const orderPosition = order.account.position;
    if (orderPosition.baseFreeNative > constants_1.BN_0 ||
        orderPosition.quoteFreeNative > constants_1.BN_0) {
        return true;
    }
    return false;
};
exports.isPartiallyFilled = isPartiallyFilled;
const isEmptyOrder = (order) => order.account.openOrders[0].isFree === 1;
exports.isEmptyOrder = isEmptyOrder;
const isClosableOrder = (order) => order.account.position.asksBaseLots.eq(constants_1.BN_0) &&
    order.account.position.bidsBaseLots.eq(constants_1.BN_0) &&
    order.account.position.baseFreeNative.eq(constants_1.BN_0) &&
    order.account.position.quoteFreeNative.eq(constants_1.BN_0);
exports.isClosableOrder = isClosableOrder;
const isOpenOrder = (order, markets) => {
    if (order.account.openOrders[0].isFree === 0) {
        const passAsksFilter = markets.passAsks.filter((_order) => _order.owner.toString() === order.publicKey.toString());
        const passBidsFilter = markets.passBids.filter((_order) => _order.owner.toString() === order.publicKey.toString());
        const failAsksFilter = markets.failAsks.filter((_order) => _order.owner.toString() === order.publicKey.toString());
        const failBidsFilter = markets.failBids.filter((_order) => _order.owner.toString() === order.publicKey.toString());
        let _order = null;
        if (failAsksFilter.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            _order = failAsksFilter[0];
        }
        if (failBidsFilter.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            _order = failBidsFilter[0];
        }
        if (passAsksFilter.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            _order = passAsksFilter[0];
        }
        if (passBidsFilter.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            _order = passBidsFilter[0];
        }
        if (_order !== null) {
            return true;
        }
        return false;
    }
    return false;
};
exports.isOpenOrder = isOpenOrder;
const isCompletedOrder = (order, markets) => {
    const isOpen = (0, exports.isOpenOrder)(order, markets);
    const isEmpty = (0, exports.isEmptyOrder)(order) &&
        (order.account.position.asksBaseLots.gt(constants_1.BN_0) ||
            order.account.position.bidsBaseLots.gt(constants_1.BN_0));
    return isEmpty && !isOpen;
};
exports.isCompletedOrder = isCompletedOrder;
const isBidOrAsk = (order) => {
    const isBidSide = order.account.position.bidsBaseLots.gt(order.account.position.asksBaseLots);
    if (isBidSide) {
        return true;
    }
    return false;
};
exports.isBidOrAsk = isBidOrAsk;
const totalInOrder = (orders) => {
    let sumOrders = [];
    sumOrders = orders === null || orders === void 0 ? void 0 : orders.map((order) => (order.account.position.bidsBaseLots.toNumber() / 10000 +
        order.account.position.asksBaseLots.toNumber() / 10000) *
        order.account.openOrders[0].lockedPrice.toNumber());
    const totalValueLocked = sumOrders.reduce((partialSum, amount) => partialSum + amount, 0);
    return (0, numeral_1.default)(totalValueLocked).format(constants_1.NUMERAL_FORMAT);
};
exports.totalInOrder = totalInOrder;
const totalUsdcInOrder = (orders) => {
    let sumOrders = [];
    sumOrders = orders.map((order) => {
        if ((0, exports.isBidOrAsk)(order)) {
            return ((order.account.position.bidsBaseLots.toNumber() *
                order.account.openOrders[0].lockedPrice) /
                10000 +
                (order.account.position.asksBaseLots.toNumber() *
                    order.account.openOrders[0].lockedPrice) /
                    10000);
        }
        return 0;
    });
    const totalValueLocked = sumOrders.reduce((partialSum, amount) => partialSum + amount, 0);
    return (0, numeral_1.default)(totalValueLocked).format(constants_1.NUMERAL_FORMAT);
};
exports.totalUsdcInOrder = totalUsdcInOrder;
const totalMetaInOrder = (orders) => {
    let sumOrders = [];
    sumOrders = orders.map((order) => {
        if ((0, exports.isBidOrAsk)(order)) {
            return (order.account.position.bidsBaseLots.toNumber() +
                order.account.position.asksBaseLots.toNumber());
        }
        return 0;
    });
    const totalValueLocked = sumOrders.reduce((partialSum, amount) => partialSum + amount, 0);
    return (0, numeral_1.default)(totalValueLocked).format(constants_1.BASE_FORMAT);
};
exports.totalMetaInOrder = totalMetaInOrder;
const getUsersOpenOrderPks = async (client, userWalletPk) => {
    const indexerPk = client.findOpenOrdersIndexer(userWalletPk);
    const indexerAcc = await client.deserializeOpenOrdersIndexerAccount(indexerPk);
    const openOrdersPks = indexerAcc === null || indexerAcc === void 0 ? void 0 : indexerAcc.addresses;
    return openOrdersPks !== null && openOrdersPks !== void 0 ? openOrdersPks : [];
};
exports.getUsersOpenOrderPks = getUsersOpenOrderPks;
