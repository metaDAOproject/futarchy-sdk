"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyIndexerClient = void 0;
const dao_1 = require("./dao");
const proposals_1 = require("./proposals");
const balances_1 = require("./balances");
const markets_1 = require("./markets");
/**
 * This class is not yet implemented. Use the RPC client for now instead
 */
class FutarchyIndexerClient {
    constructor() {
        //TODO: implement all this
        this.daos = new dao_1.FutarchyIndexerDaoClient();
        this.proposals = new proposals_1.FutarchyIndexerProposalsClient();
        this.balances = new balances_1.FutarchyIndexerBalancesClient();
        this.markets = new markets_1.FutarchyIndexerMarketsClient();
    }
}
exports.FutarchyIndexerClient = FutarchyIndexerClient;
