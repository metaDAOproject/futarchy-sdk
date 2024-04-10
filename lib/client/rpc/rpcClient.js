"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyRPCClient = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const conditional_vault_1 = require("../../idl/conditional_vault");
const conditionalVault_1 = require("../../constants/conditionalVault");
const dao_1 = require("./dao");
const proposals_1 = require("./proposals");
const balances_1 = require("./balances");
class FutarchyRPCClient {
    constructor(programVersion, rpcProvider) {
        const autocratProgram = new anchor_1.Program(programVersion.idl, programVersion.programId, rpcProvider);
        const vaultProgram = new anchor_1.Program(conditional_vault_1.IDL, conditionalVault_1.autocratVersionToConditionalVaultMap[programVersion.label], rpcProvider);
        this.daos = new dao_1.FutarchyRPCDaoClient(rpcProvider, programVersion, autocratProgram);
        this.proposals = new proposals_1.FutarchyRPCProposalsClient(autocratProgram, vaultProgram);
        this.balances = new balances_1.FutarchyRPCBalancesClient(rpcProvider);
    }
    static make(programVersion, rpcProvider) {
        return new FutarchyRPCClient(programVersion, rpcProvider);
    }
}
exports.FutarchyRPCClient = FutarchyRPCClient;
