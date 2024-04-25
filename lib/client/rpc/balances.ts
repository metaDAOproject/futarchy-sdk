import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import {
  Dao,
  DaoAggregate,
  FutarchyProtocol,
  TokenProps,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
} from "@/types";
import { FutarchyBalancesClient } from "@/client";
import { PublicKey } from "@solana/web3.js";
import { ProposalWithVaults } from "@/types/proposals";
import { Provider } from "@coral-xyz/anchor";
import { Token } from "@metaplex-foundation/js";

export class FutarchyRPCBalancesClient implements FutarchyBalancesClient {
  private rpcProvider: Provider;
  private futarchyProtocols: FutarchyProtocol[];

  constructor(rpcProvider: Provider, futarchyProtocols: FutarchyProtocol[]) {
    this.rpcProvider = rpcProvider;
    this.futarchyProtocols = futarchyProtocols;
  }

  //TODO create a more general function for fetching balances on an array of token mints
  async fetchMainTokenWalletBalances(
    daoAggregate: DaoAggregate,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    if (ownerWallet) {
      //dedupe mints
      const tokensByMint = daoAggregate.daos.reduce((mapping, dao) => {
        if (!dao.baseToken.publicKey || !dao.quoteToken.publicKey)
          return mapping;
        if (!mapping.get(dao.baseToken.publicKey)) {
          mapping.set(dao.baseToken.publicKey, {
            pda: getAssociatedTokenAddressSync(
              new PublicKey(dao.baseToken.publicKey),
              ownerWallet,
              true
            ),
            token: dao.baseToken,
          });
        }
        if (!mapping.get(dao.quoteToken.publicKey)) {
          mapping.set(dao.quoteToken.publicKey, {
            pda: getAssociatedTokenAddressSync(
              new PublicKey(dao.quoteToken.publicKey),
              ownerWallet,
              true
            ),
            token: dao.quoteToken,
          });
        }

        return mapping;
      }, new Map() as Map<string, { token: TokenProps; pda: PublicKey }>);

      return (
        await Promise.all(
          Array.from(tokensByMint.values()).map<
            Promise<TokenWithBalance | undefined>
          >(async (t) => {
            try {
              const tokenBalance =
                await this.rpcProvider.connection.getTokenAccountBalance(t.pda);
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
          })
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
    ownerWallet: PublicKey,
    baseToken: TokenProps,
    quoteToken: TokenProps,
    proposals: ProposalWithVaults[]
  ): Promise<TokenWithBalanceWithProposal[]> {
    const tokenBalances = await Promise.all(
      proposals.map(async (proposalWithVaults) => {
        if (
          ownerWallet &&
          proposalWithVaults.publicKey &&
          quoteToken.publicKey
        ) {
          //TODO create proper type or even class with functionality for this(for readability)
          const tokensWithPDA = [
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  proposalWithVaults.baseVaultAccount.conditionalOnFinalizeTokenMint
                ),
                ownerWallet,
                true
              ),
              token: {
                ...baseToken,
                publicKey:
                  proposalWithVaults.baseVaultAccount.conditionalOnFinalizeTokenMint.toString(),
                symbol: "p" + baseToken.symbol,
              } as TokenProps,
              proposal: proposalWithVaults.publicKey,
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  proposalWithVaults.baseVaultAccount.conditionalOnRevertTokenMint
                ),
                ownerWallet,
                true
              ),
              token: {
                ...baseToken,
                publicKey:
                  proposalWithVaults.baseVaultAccount.conditionalOnRevertTokenMint.toString(),
                symbol: "f" + baseToken.symbol,
              } as TokenProps,
              proposal: proposalWithVaults.publicKey,
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  proposalWithVaults.quoteVaultAccount.conditionalOnFinalizeTokenMint
                ),
                ownerWallet,
                true
              ),
              token: {
                ...quoteToken,
                publicKey:
                  proposalWithVaults.quoteVaultAccount.conditionalOnFinalizeTokenMint.toString(),
                symbol: "p" + quoteToken.symbol,
              } as TokenProps,
              proposal: proposalWithVaults.publicKey,
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  proposalWithVaults.quoteVaultAccount.conditionalOnRevertTokenMint
                ),
                ownerWallet,
                true
              ),
              token: {
                ...quoteToken,
                publicKey:
                  proposalWithVaults.quoteVaultAccount.conditionalOnRevertTokenMint.toString(),
                symbol: "f" + quoteToken.symbol,
              } as TokenProps,
              proposal: proposalWithVaults.publicKey,
            },
          ];

          const tokensBalances = await Promise.all(
            tokensWithPDA.map(async (t) => {
              try {
                const tokenBalance =
                  await this.rpcProvider.connection.getTokenAccountBalance(
                    t.pda
                  );
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
      })
    );
    return tokenBalances
      .filter((tb): tb is TokenWithBalanceWithProposal[] => !!tb)
      .flat();
  }
}
