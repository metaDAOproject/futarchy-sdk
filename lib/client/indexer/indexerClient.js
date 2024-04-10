"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyIndexerClient = void 0;
const dao_1 = require("./dao");
const proposals_1 = require("./proposals");
const balances_1 = require("./balances");
/**
 * This class is not yet implemented. Use the RPC client for now instead
 */
class FutarchyIndexerClient {
    constructor() {
        this.daos = new dao_1.FutarchyIndexerDaoClient();
        this.proposals = new proposals_1.FutarchyIndexerProposalsClient();
        this.balances = new balances_1.FutarchyIndexerBalancesClient();
    }
    //TODO: implement all this
    async fetchAllDaos() {
        return [];
    }
    async fetchDao(daoAddress) {
        return;
    }
    async fetchMainTokenWalletBalances(dao, ownerWallet) {
        return [];
    }
    async fetchProposals(dao) {
        return [];
    }
    async fetchAllConditionalTokenWalletBalances(dao, ownerWallet, proposals) {
        return [];
    }
}
exports.FutarchyIndexerClient = FutarchyIndexerClient;
