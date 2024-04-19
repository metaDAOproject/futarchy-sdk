"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutarchyRPCBalancesClient = void 0;
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
class FutarchyRPCBalancesClient {
    constructor(rpcProvider) {
        this.rpcProvider = rpcProvider;
    }
    async fetchMainTokenWalletBalances(dao, ownerWallet) {
        if (ownerWallet && dao.baseToken.publicKey && dao.quoteToken.publicKey) {
            const tokensWithPDA = [
                {
                    pda: (0, spl_token_1.getAssociatedTokenAddressSync)(new web3_js_1.PublicKey(dao.baseToken.publicKey), ownerWallet, true),
                    token: dao.baseToken,
                },
                {
                    pda: (0, spl_token_1.getAssociatedTokenAddressSync)(new web3_js_1.PublicKey(dao.quoteToken.publicKey), ownerWallet, true),
                    token: dao.quoteToken,
                },
            ];
            return (await Promise.all(tokensWithPDA.map(async (t) => {
                var _a;
                try {
                    const tokenBalance = await this.rpcProvider.connection.getTokenAccountBalance(t.pda);
                    return {
                        balance: (_a = tokenBalance.value.uiAmount) !== null && _a !== void 0 ? _a : 0,
                        token: t.token,
                    };
                }
                catch (e) {
                    if (!JSON.stringify(e).includes("not found")) {
                        console.info("error fetching wallet balance for token:", t.token.symbol);
                    }
                    return {
                        balance: 0,
                        token: t.token,
                    };
                }
            }))).filter((b) => !!b);
        }
        return [];
    }
    /**
     * Fetching all the conditional token wallet balances for all the providers is expensive because it fetches the token balances on each proposal.
     * @param dao
     * @param ownerWallet
     * @param proposalsWithVaults
     * @returns
     */
    async fetchAllConditionalTokenWalletBalances(dao, ownerWallet, proposalsWithVaults) {
        if (ownerWallet && dao.baseToken.publicKey && dao.quoteToken.publicKey) {
            const tokensWithPDA = proposalsWithVaults
                .map((p) => {
                return [
                    {
                        pda: (0, spl_token_1.getAssociatedTokenAddressSync)(new web3_js_1.PublicKey(p.baseVaultAccount.conditionalOnFinalizeTokenMint), ownerWallet, true),
                        token: {
                            ...dao.baseToken,
                            symbol: "p" + dao.baseToken.symbol,
                        },
                        proposal: p.publicKey,
                    },
                    {
                        pda: (0, spl_token_1.getAssociatedTokenAddressSync)(new web3_js_1.PublicKey(p.baseVaultAccount.conditionalOnRevertTokenMint), ownerWallet, true),
                        token: {
                            ...dao.baseToken,
                            symbol: "f" + dao.baseToken.symbol,
                        },
                        proposal: p.publicKey,
                    },
                    {
                        pda: (0, spl_token_1.getAssociatedTokenAddressSync)(new web3_js_1.PublicKey(p.quoteVaultAccount.conditionalOnFinalizeTokenMint), ownerWallet, true),
                        token: {
                            ...dao.quoteToken,
                            symbol: "p" + dao.quoteToken.symbol,
                        },
                        proposal: p.publicKey,
                    },
                    {
                        pda: (0, spl_token_1.getAssociatedTokenAddressSync)(new web3_js_1.PublicKey(p.quoteVaultAccount.conditionalOnRevertTokenMint), ownerWallet, true),
                        token: {
                            ...dao.quoteToken,
                            symbol: "f" + dao.quoteToken.symbol,
                        },
                        proposal: p.publicKey,
                    },
                ];
            })
                .flat();
            const tokensBalances = await Promise.all(tokensWithPDA.map(async (t) => {
                var _a;
                try {
                    const tokenBalance = await this.rpcProvider.connection.getTokenAccountBalance(t.pda);
                    return {
                        balance: (_a = tokenBalance.value.uiAmount) !== null && _a !== void 0 ? _a : 0,
                        token: t.token,
                        proposal: t.proposal,
                    };
                }
                catch (e) {
                    if (!JSON.stringify(e).includes("could not find account")) {
                        console.info("error fetching wallet balance for token:", t.token.symbol);
                    }
                    return {
                        balance: 0,
                        token: t.token,
                        proposal: t.proposal,
                    };
                }
            }));
            return tokensBalances.filter((b) => !!b);
        }
        return [];
    }
}
exports.FutarchyRPCBalancesClient = FutarchyRPCBalancesClient;
