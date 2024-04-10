"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyRPCDaoClient = void 0;
const tokens_1 = require("../../tokens");
class FutarchyRPCDaoClient {
    constructor(rpcProvider, programVersion, autocratProgram) {
        this.rpcProvider = rpcProvider;
        this.programVersion = programVersion;
        this.autocratProgram = autocratProgram;
    }
    async fetchAllDaos() {
        const allDaoAccounts = await this.autocratProgram.account.dao.all();
        const allDaos = await Promise.all(allDaoAccounts.map(async (d) => this.fetchDaoWithTokensFromState(d.account)));
        return allDaos.filter((d) => !!d);
    }
    async fetchDao(daoAddress) {
        const daoAccount = await this.fetchDaoAccount(daoAddress);
        if (daoAccount) {
            return await this.fetchDaoWithTokensFromState(daoAccount);
        }
    }
    async fetchDaoAccount(daoAddress) {
        const daoAccount = await this.autocratProgram.account.dao.fetch(daoAddress);
        return daoAccount;
    }
    async fetchDaoWithTokensFromState(daoAccount) {
        const baseMint = ["V0.2", "V0.3"].includes(this.programVersion.label)
            ? daoAccount.tokenMint
            : daoAccount.metaMint;
        const quoteMint = daoAccount.usdcMint;
        if (baseMint) {
            const baseToken = await (0, tokens_1.enrichTokenMetadata)(baseMint, this.rpcProvider);
            const quoteToken = await (0, tokens_1.enrichTokenMetadata)(quoteMint, this.rpcProvider);
            return {
                daoAccount,
                baseToken,
                quoteToken,
            };
        }
    }
}
exports.FutarchyRPCDaoClient = FutarchyRPCDaoClient;
