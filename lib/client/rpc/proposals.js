"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyRPCProposalsClient = void 0;
class FutarchyRPCProposalsClient {
    constructor(autocratProgram, vaultProgram) {
        this.autocratProgram = autocratProgram;
        this.vaultProgram = vaultProgram;
    }
    async fetchProposals(dao) {
        const allProposals = (await this.autocratProgram.account.proposal.all()).map((prop) => ({
            title: `Proposal ${prop.account.number}`,
            description: "",
            ...prop,
        }));
        const allVaults = await this.vaultProgram.account.conditionalVault.all();
        const vaultsByAddress = allVaults.reduce((prev, curr) => {
            prev[curr.publicKey.toString()] = curr.account;
            return prev;
        }, {});
        const proposalsWithVaults = allProposals.map((p) => {
            const baseVaultAccount = vaultsByAddress[p.account.baseVault.toString()];
            const quoteVaultAccount = vaultsByAddress[p.account.quoteVault.toString()];
            return { ...p, baseVaultAccount, quoteVaultAccount };
        });
        return proposalsWithVaults.filter((p) => {
            const { baseVaultAccount } = p;
            return (baseVaultAccount.settlementAuthority.toString() ===
                dao.treasury.toString());
        });
    }
}
exports.FutarchyRPCProposalsClient = FutarchyRPCProposalsClient;
