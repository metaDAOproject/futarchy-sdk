import {
  AccountLayout,
  getAssociatedTokenAddressSync
} from "@solana/spl-token";
import {
  DaoAggregate,
  TokenProps,
  TokenWithBalance,
  TokenWithBalancePDAAndProposal,
  TokenWithPDA
} from "@/types";
import { FutarchyBalancesClient } from "@/client";
import { PublicKey } from "@solana/web3.js";
import { Proposal } from "@/types/proposals";
import { Provider } from "@coral-xyz/anchor";
import { Observable, retry } from "rxjs";
import BN from "bn.js";

const PASS_USDC_URL =
  "https://imagedelivery.net/HYEnlujCFMCgj6yA728xIw/f38677ab-8ec6-4706-6606-7d4e0a3cfc00/public";
const FAIL_USDC_URL =
  "https://imagedelivery.net/HYEnlujCFMCgj6yA728xIw/d9bfd8de-2937-419a-96f6-8d6a3a76d200/public";

export class FutarchyRPCBalancesClient implements FutarchyBalancesClient {
  private rpcProvider: Provider;

  constructor(rpcProvider: Provider) {
    this.rpcProvider = rpcProvider;
  }

  //TODO create a more general function for fetching balances on an array of token mints
  async fetchMainTokenWalletBalances(
    daoAggregate: DaoAggregate,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    if (ownerWallet) {
      //dedupe mints
      const tokensByMint = this.getDaoAggregateMainTokensByMint(
        daoAggregate,
        ownerWallet
      );

      return (
        await Promise.all(
          Array.from(tokensByMint.values())
            .filter((t): t is TokenWithPDA => !!t.pda)
            .map<Promise<TokenWithBalance | undefined>>(async (t) =>
              this.fetchTokenBalance(t.pda, t.token)
            )
        )
      ).filter((b): b is TokenWithBalance => !!b);
    }
    return [];
  }

  async fetchTokenBalance(pda: PublicKey | null, token: TokenProps) {
    if (!pda)
      return {
        balance: 0,
        token: token
      };

    try {
      const tokenBalance =
        await this.rpcProvider.connection.getTokenAccountBalance(pda);
      return {
        balance: tokenBalance.value.uiAmount ?? 0,
        token: token
      };
    } catch (e) {
      if (!JSON.stringify(e).includes("not found")) {
        console.info("error fetching wallet balance for token:", token.symbol);
      }
      return {
        balance: 0,
        token: token
      };
    }
  }

  watchMainTokenWalletBalances(
    daoAggregate: DaoAggregate,
    ownerWallet: PublicKey
  ): Observable<TokenWithBalance>[] {
    if (ownerWallet) {
      //dedupe mints
      const tokensByMint = this.getDaoAggregateMainTokensByMint(
        daoAggregate,
        ownerWallet
      );
      return Array.from(tokensByMint.values())
        .filter((t): t is TokenWithPDA => !!t.pda)
        .map<Observable<TokenWithBalance>>((t) => {
          return this.watchTokenBalance(t);
        });
    }
    return [];
  }

  public getDaoAggregateMainTokensByMint(
    daoAggregate: DaoAggregate,
    owner: PublicKey | null
  ): Map<string, Pick<TokenWithPDA, "token"> & { pda: PublicKey | null }> {
    return daoAggregate.daos.reduce((mapping, dao) => {
      if (!dao.baseToken.publicKey || !dao.quoteToken.publicKey) return mapping;
      if (!mapping.get(dao.baseToken.publicKey)) {
        mapping.set(dao.baseToken.publicKey, {
          pda: owner
            ? getAssociatedTokenAddressSync(
                new PublicKey(dao.baseToken.publicKey),
                owner,
                true
              )
            : null,
          token: dao.baseToken
        });
      }
      if (!mapping.get(dao.quoteToken.publicKey)) {
        mapping.set(dao.quoteToken.publicKey, {
          pda: owner
            ? getAssociatedTokenAddressSync(
                new PublicKey(dao.quoteToken.publicKey),
                owner,
                true
              )
            : null,
          token: dao.quoteToken
        });
      }

      return mapping;
    }, new Map() as Map<string, Pick<TokenWithPDA, "token"> & { pda: PublicKey | null }>);
  }

  public watchTokenBalance(
    tokenWithPDA: TokenWithPDA
  ): Observable<TokenWithBalance> {
    const obs = new Observable<TokenWithBalance>((subscriber) => {
      // yield initial fetch
      this.rpcProvider.connection
        .getTokenAccountBalance(tokenWithPDA.pda)
        .then((tokenBalance) => {
          subscriber.next({
            balance: tokenBalance.value.uiAmount ?? 0,
            token: tokenWithPDA.token
          });
        })
        .catch((e) => {
          subscriber.error(e);
        });

      //yield subsequent updates
      this.rpcProvider.connection.onAccountChange(
        tokenWithPDA.pda,
        (accountInfo) => {
          const accountData = AccountLayout.decode(accountInfo.data);
          const dividedTokenAmount = Number(accountData.amount) /
            10 ** tokenWithPDA.token.decimals;
          // this is bugged if value is decimal/between 0 and 1
          const tokenVal: TokenWithBalance = {
            balance: dividedTokenAmount,
            token: tokenWithPDA.token
          };
          subscriber.next(tokenVal);
        }
      );

      return () => subscriber.complete();
    });

    return obs.pipe<TokenWithBalance>(
      retry({
        count: 100,
        delay: 20_000
      })
    );
  }

  /**
   * Fetching all the conditional token wallet balances for all the providers is expensive because it fetches the token balances on each proposal.
   * @param dao
   * @param ownerWallet
   * @param proposalsWithVaults
   * @returns
   */
  async fetchAllConditionalTokenWalletBalances(
    ownerWallet: PublicKey | null,
    baseToken: TokenProps,
    quoteToken: TokenProps,
    proposals: Proposal[],
    passTokenUrl?: string,
    failTokenUrl?: string
  ): Promise<TokenWithBalancePDAAndProposal[]> {
    const tokenBalances = await Promise.all(
      proposals.map(async (proposal) => {
        if (proposal.publicKey && quoteToken.publicKey) {
          //TODO create proper type or even class with functionality for this(for readability)
          const tokensWithPDA = [
            {
              pda: ownerWallet
                ? getAssociatedTokenAddressSync(
                    new PublicKey(
                      proposal.baseVaultAccount.conditionalOnFinalizeTokenMint
                    ),
                    ownerWallet,
                    true
                  )
                : null,
              token: {
                ...baseToken,
                url: passTokenUrl ?? baseToken.url,
                publicKey:
                  proposal.baseVaultAccount.conditionalOnFinalizeTokenMint.toString(),
                symbol: "p" + baseToken.symbol
              } as TokenProps,
              proposal: proposal.publicKey
            },
            {
              pda: ownerWallet
                ? getAssociatedTokenAddressSync(
                    new PublicKey(
                      proposal.baseVaultAccount.conditionalOnRevertTokenMint
                    ),
                    ownerWallet,
                    true
                  )
                : null,
              token: {
                ...baseToken,
                url: failTokenUrl ?? baseToken.url,
                publicKey:
                  proposal.baseVaultAccount.conditionalOnRevertTokenMint.toString(),
                symbol: "f" + baseToken.symbol
              } as TokenProps,
              proposal: proposal.publicKey
            },
            {
              pda: ownerWallet
                ? getAssociatedTokenAddressSync(
                    new PublicKey(
                      proposal.quoteVaultAccount.conditionalOnFinalizeTokenMint
                    ),
                    ownerWallet,
                    true
                  )
                : null,
              token: {
                ...quoteToken,
                url: PASS_USDC_URL,
                publicKey:
                  proposal.quoteVaultAccount.conditionalOnFinalizeTokenMint.toString(),
                symbol: "p" + quoteToken.symbol
              } as TokenProps,
              proposal: proposal.publicKey
            },
            {
              pda: ownerWallet
                ? getAssociatedTokenAddressSync(
                    new PublicKey(
                      proposal.quoteVaultAccount.conditionalOnRevertTokenMint
                    ),
                    ownerWallet,
                    true
                  )
                : null,
              token: {
                ...quoteToken,
                url: FAIL_USDC_URL,
                publicKey:
                  proposal.quoteVaultAccount.conditionalOnRevertTokenMint.toString(),
                symbol: "f" + quoteToken.symbol
              } as TokenProps,
              proposal: proposal.publicKey
            }
          ];

          const tokensBalances = await Promise.all(
            tokensWithPDA.map(async (t) => {
              try {
                const tokenBalance = t.pda
                  ? await this.rpcProvider.connection.getTokenAccountBalance(
                      t.pda
                    )
                  : { value: { uiAmount: 0 } };
                return {
                  balance: tokenBalance.value.uiAmount ?? 0,
                  token: t.token,
                  proposal: t.proposal,
                  pda: t.pda
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
                  pda: t.pda
                };
              }
            })
          );

          return tokensBalances.filter(
            (b): b is TokenWithBalancePDAAndProposal => !!b
          );
        }
      })
    );
    return tokenBalances
      .filter((tb): tb is TokenWithBalancePDAAndProposal[] => !!tb)
      .flat();
  }

  getConditionalTokensFromProposals(
    proposals: Proposal[],
    owner: PublicKey | null,
    quoteToken: TokenProps,
    baseToken: TokenProps
  ): Array<TokenWithPDA & { proposal: PublicKey }> {
    if (!owner) return [];

    return proposals
      .map((proposal) => {
        if (owner && proposal.publicKey && quoteToken.publicKey) {
          //TODO create proper type or even class with functionality for this(for readability)
          return [
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  proposal.baseVaultAccount.conditionalOnFinalizeTokenMint
                ),
                owner,
                true
              ),
              token: {
                ...baseToken,
                publicKey:
                  proposal.baseVaultAccount.conditionalOnFinalizeTokenMint.toString(),
                symbol: "p" + baseToken.symbol
              } as TokenProps,
              proposal: proposal.publicKey
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  proposal.baseVaultAccount.conditionalOnRevertTokenMint
                ),
                owner,
                true
              ),
              token: {
                ...baseToken,
                publicKey:
                  proposal.baseVaultAccount.conditionalOnRevertTokenMint.toString(),
                symbol: "f" + baseToken.symbol
              } as TokenProps,
              proposal: proposal.publicKey
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  proposal.quoteVaultAccount.conditionalOnFinalizeTokenMint
                ),
                owner,
                true
              ),
              token: {
                ...quoteToken,
                publicKey:
                  proposal.quoteVaultAccount.conditionalOnFinalizeTokenMint.toString(),
                symbol: "p" + quoteToken.symbol
              } as TokenProps,
              proposal: proposal.publicKey
            },
            {
              pda: getAssociatedTokenAddressSync(
                new PublicKey(
                  proposal.quoteVaultAccount.conditionalOnRevertTokenMint
                ),
                owner,
                true
              ),
              token: {
                ...quoteToken,
                publicKey:
                  proposal.quoteVaultAccount.conditionalOnRevertTokenMint.toString(),
                symbol: "f" + quoteToken.symbol
              } as TokenProps,
              proposal: proposal.publicKey
            }
          ];
        }
      })
      .flat()
      .filter((t): t is TokenWithPDA & { proposal: PublicKey } => !!t);
  }
}
