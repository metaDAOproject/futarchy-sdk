"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyRPCClient = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const conditional_vault_1 = require("../../idl/conditional_vault");
const conditionalVault_1 = require("../../constants/conditionalVault");
const dao_1 = require("./dao");
const proposals_1 = require("./proposals");
const balances_1 = require("./balances");
const openbookMarkets_1 = require("./openbookMarkets");
const openbook_v2_1 = require("@openbook-dex/openbook-v2");
class FutarchyRPCClient {
    constructor(programVersion, 
    // has to be AnchorProvider because of Openbook SDK
    rpcProvider, transactionSender) {
        const autocratProgram = new anchor_1.Program(programVersion.idl, programVersion.programId, rpcProvider);
        const vaultProgram = new anchor_1.Program(conditional_vault_1.IDL, conditionalVault_1.autocratVersionToConditionalVaultMap[programVersion.label], rpcProvider);
        this.daos = new dao_1.FutarchyRPCDaoClient(rpcProvider, programVersion, autocratProgram);
        this.proposals = new proposals_1.FutarchyRPCProposalsClient(autocratProgram, vaultProgram);
        this.balances = new balances_1.FutarchyRPCBalancesClient(rpcProvider);
        this.markets = new openbookMarkets_1.FutarchyOpenbookMarketsRPCClient(rpcProvider, programVersion, new anchor_1.Program(openbook_v2_1.IDL, openbook_v2_1.OPENBOOK_PROGRAM_ID, rpcProvider), new openbook_v2_1.OpenBookV2Client(rpcProvider, openbook_v2_1.OPENBOOK_PROGRAM_ID), transactionSender);
    }
    static make(programVersion, rpcProvider, transactionSender) {
        return new FutarchyRPCClient(programVersion, rpcProvider, transactionSender);
    }
}
exports.FutarchyRPCClient = FutarchyRPCClient;
