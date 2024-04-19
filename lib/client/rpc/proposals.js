"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyRPCProposalsClient = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const spl_token_1 = require("@solana/spl-token");
const numeral_1 = __importDefault(require("numeral"));
const tokens_1 = require("../../tokens");
const web3_js_1 = require("@solana/web3.js");
class FutarchyRPCProposalsClient {
    constructor(rpcProvider, autocratProgram, vaultProgram, transactionSender) {
        this.rpcProvider = rpcProvider;
        this.autocratProgram = autocratProgram;
        this.vaultProgram = vaultProgram;
        this.transactionSender = transactionSender;
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
    async deposit(amount, vaultAccountAddress, vaultAccount) {
        if (!this.rpcProvider.publicKey) {
            return;
        }
        // we fetch metadata with finalize token mint, but it doesn't matter
        const { decimals } = await (0, tokens_1.enrichTokenMetadata)(vaultAccount.conditionalOnFinalizeTokenMint, this.rpcProvider);
        const ixs = [
            (0, spl_token_1.createAssociatedTokenAccountIdempotentInstruction)(this.rpcProvider.publicKey, (0, spl_token_1.getAssociatedTokenAddressSync)(vaultAccount.conditionalOnFinalizeTokenMint, this.rpcProvider.publicKey, true), this.rpcProvider.publicKey, vaultAccount.conditionalOnFinalizeTokenMint),
            (0, spl_token_1.createAssociatedTokenAccountIdempotentInstruction)(this.rpcProvider.publicKey, (0, spl_token_1.getAssociatedTokenAddressSync)(vaultAccount.conditionalOnRevertTokenMint, this.rpcProvider.publicKey, true), this.rpcProvider.publicKey, vaultAccount.conditionalOnRevertTokenMint),
            await this.vaultProgram.methods
                .mintConditionalTokens(new anchor_1.BN((0, numeral_1.default)(amount)
                .multiply(10 ** (decimals || 0))
                .format("0")))
                .accounts({
                vault: vaultAccountAddress,
                userConditionalOnFinalizeTokenAccount: (0, spl_token_1.getAssociatedTokenAddressSync)(vaultAccount.conditionalOnFinalizeTokenMint, this.rpcProvider.publicKey, true),
                userConditionalOnRevertTokenAccount: (0, spl_token_1.getAssociatedTokenAddressSync)(vaultAccount.conditionalOnRevertTokenMint, this.rpcProvider.publicKey, true),
                userUnderlyingTokenAccount: (0, spl_token_1.getAssociatedTokenAddressSync)(vaultAccount.underlyingTokenMint, this.rpcProvider.publicKey, true),
                vaultUnderlyingTokenAccount: vaultAccount.underlyingTokenAccount,
                conditionalOnFinalizeTokenMint: vaultAccount.conditionalOnFinalizeTokenMint,
                conditionalOnRevertTokenMint: vaultAccount.conditionalOnRevertTokenMint,
            })
                .instruction(),
        ];
        const tx = new web3_js_1.Transaction().add(...ixs);
        return this.transactionSender.send([tx], this.rpcProvider.connection);
    }
    async withdraw(amount, vaultAccountAddress, vaultAccount) {
        return [];
    }
}
exports.FutarchyRPCProposalsClient = FutarchyRPCProposalsClient;
