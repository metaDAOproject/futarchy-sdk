import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import {
  DaoWithTokens,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
} from "../../types";
import { FutarchyBalancesClient } from "../client";
import { PublicKey } from "@solana/web3.js";
import { ProposalWithVaults } from "../../types/proposals";
import { Provider } from "@coral-xyz/anchor";

export class FutarchyRPCBalancesClient implements FutarchyBalancesClient {
  private rpcProvider: Provider;

  constructor(rpcProvider: Provider) {
    this.rpcProvider = rpcProvider;
  }

  async fetchMainTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    if (ownerWallet && dao.baseToken.publicKey && dao.quoteToken.publicKey) {
      const tokensWithPDA = [
        {
          pda: getAssociatedTokenAddressSync(
            new PublicKey(dao.baseToken.publicKey),
            ownerWallet,
            true
          ),
          token: dao.baseToken,
        },
        {
          pda: getAssociatedTokenAddressSync(
            new PublicKey(dao.quoteToken.publicKey),
            ownerWallet,
            true
          ),
          token: dao.quoteToken,
        },
      ];
      return (
        await Promise.all(
          tokensWithPDA.map<Promise<TokenWithBalance | undefined>>(
            async (t) => {
              try {
                const tokenBalance =
                  await this.rpcProvider.connection.getTokenAccountBalance(
                    t.pda
                  );
                return {
                  balance: tokenBalance.value.uiAmount ?? 0,
                  token: t.token,
                };
              } catch (e) {
                if (!JSON.stringify(e).includes("not found")) {
                  console.info(
                    "error fetching wallet balance for token:",
                    t.token.symbol
                  );
                }
                return {
                  balance: 0,
                  token: t.token,
                };
              }
            }
          )
        )
      ).filter((b): b is TokenWithBalance => !!b);
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
  async fetchAllConditionalTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey,
    proposalsWithVaults: ProposalWithVaults[]
  ): Promise<TokenWithBalanceWithProposal[]> {
    if (ownerWallet && dao.baseToken.publicKey && dao.quoteToken.publicKey) {
      const tokensWithPDA = proposalsWithVaults
        .map((p) => {
          return [
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  p.baseVaultAccount.conditionalOnFinalizeTokenMint
                ),
                ownerWallet,
                true
              ),
              token: {
                ...dao.baseToken,
                symbol: "p" + dao.baseToken.symbol,
              },
              proposal: p.publicKey,
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(p.baseVaultAccount.conditionalOnRevertTokenMint),
                ownerWallet,
                true
              ),
              token: {
                ...dao.baseToken,
                symbol: "f" + dao.baseToken.symbol,
              },
              proposal: p.publicKey,
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  p.quoteVaultAccount.conditionalOnFinalizeTokenMint
                ),
                ownerWallet,
                true
              ),
              token: {
                ...dao.quoteToken,
                symbol: "p" + dao.quoteToken.symbol,
              },
              proposal: p.publicKey,
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(p.quoteVaultAccount.conditionalOnRevertTokenMint),
                ownerWallet,
                true
              ),
              token: {
                ...dao.quoteToken,
                symbol: "f" + dao.quoteToken.symbol,
              },
              proposal: p.publicKey,
            },
          ];
        })
        .flat();

      const tokensBalances = await Promise.all(
        tokensWithPDA.map(async (t) => {
          try {
            const tokenBalance =
              await this.rpcProvider.connection.getTokenAccountBalance(t.pda);
            return {
              balance: tokenBalance.value.uiAmount ?? 0,
              token: t.token,
              proposal: t.proposal,
            };
          } catch (e) {
            if (!JSON.stringify(e).includes("could not find account")) {
              console.info(
                "error fetching wallet balance for token:",
                t.token.symbol
              );
            }
            return {
              balance: 0,
              token: t.token,
              proposal: t.proposal,
            };
          }
        })
      );

      return tokensBalances.filter(
        (b): b is TokenWithBalanceWithProposal => !!b
      );
    }
    return [];
  }
}
