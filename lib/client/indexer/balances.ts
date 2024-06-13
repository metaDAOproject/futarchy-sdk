import { PublicKey } from "@solana/web3.js";
import {
  Dao,
  DaoAggregate,
  TokenProps,
  TokenWithBalance,
  TokenWithBalancePDAAndProposal,
  TokenWithPDA
} from "@/types";
import { FutarchyBalancesClient } from "@/client";
import { Proposal } from "@/types/proposals";
import { FutarchyRPCBalancesClient } from "../rpc";
import { Observable, catchError, of, switchMap } from "rxjs";
import { Client as GQLWebSocketClient } from "graphql-ws";
import { Client as IndexerGraphQLClient } from "./__generated__";
import {
  generateSubscriptionOp,
  token_accts_bool_exp,
  token_accts_order_by,
  token_accts_select_column
} from "./__generated__";

export class FutarchyIndexerBalancesClient implements FutarchyBalancesClient {
  private rpcBalancesClient: FutarchyRPCBalancesClient;
  private graphqlWSClient: GQLWebSocketClient;
  private graphqlClient: IndexerGraphQLClient;
  constructor(
    rpcBalancesClient: FutarchyRPCBalancesClient,
    graphqlWSClient: GQLWebSocketClient,
    graphqlClient: IndexerGraphQLClient
  ) {
    this.rpcBalancesClient = rpcBalancesClient;
    this.graphqlWSClient = graphqlWSClient;
    this.graphqlClient = graphqlClient;
  }

  /**
   * The owner can be null even though we are trying to return PDAs. This is because we use this function to populate parts of the UI that
   * we want to still work when a wallet is disconnected.
   * @param daoAggregate DaoAggregate
   * @param owner PublicKey | null
   * @returns
   */
  getDaoAggregateMainTokensByMint(
    daoAggregate: DaoAggregate,
    owner: PublicKey | null
  ): Map<string, Pick<TokenWithPDA, "token"> & { pda: PublicKey | null }> {
    return this.rpcBalancesClient.getDaoAggregateMainTokensByMint(
      daoAggregate,
      owner
    );
  }
  async fetchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    return this.rpcBalancesClient.fetchMainTokenWalletBalances(
      dao,
      ownerWallet
    );
  }

  watchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Observable<TokenWithBalance>[] {
    return this.rpcBalancesClient.watchMainTokenWalletBalances(
      dao,
      ownerWallet
    );
  }
  getConditionalTokensFromProposals(
    proposals: Proposal[],
    owner: PublicKey,
    quoteToken: TokenProps,
    baseToken: TokenProps
  ): (TokenWithPDA & { proposal: PublicKey })[] {
    return this.rpcBalancesClient.getConditionalTokensFromProposals(
      proposals,
      owner,
      quoteToken,
      baseToken
    );
  }
  async fetchAllConditionalTokenWalletBalances(
    ownerWallet: PublicKey | null,
    baseToken: TokenProps,
    quoteToken: TokenProps,
    proposalsWithVaults: Proposal[],
    passTokenUrl?: string,
    failtokenUrl?: string
  ): Promise<TokenWithBalancePDAAndProposal[]> {
    return this.rpcBalancesClient.fetchAllConditionalTokenWalletBalances(
      ownerWallet,
      baseToken,
      quoteToken,
      proposalsWithVaults,
      passTokenUrl,
      failtokenUrl
    );
  }

  async fetchTokenBalance(pda: PublicKey | null, token: TokenProps) {
    return this.rpcBalancesClient.fetchTokenBalance(pda, token);
  }

  watchTokenBalance(tokenWithPDA: TokenWithPDA): Observable<TokenWithBalance> {
    // how do we initially fetch from RPC and then
    const indexerObservable = this.watchTokenAcctForArgs(
      {
        where: {
          token_acct: { _eq: tokenWithPDA.pda.toBase58() }
        }
      },
      tokenWithPDA.token
    );

    return indexerObservable.pipe(
      catchError((_) => {
        const rpcObservable =
          this.rpcBalancesClient.watchTokenBalance(tokenWithPDA);
        return rpcObservable;
      }),
      switchMap((value) => {
        return of(value);
      })
    );
  }

  /**
   * Compares the token acct we have indexed to the balance stored by the RPC. If there is a mismatch, an error is thrown
   * @param args
   * @param tokenPropsOverride
   */
  private async compareBalances(
    pda: PublicKey | null,
    token: TokenProps
  ): Promise<void> {
    const { token_accts } = await this.graphqlClient.query({
      token_accts: {
        __args: {
          where: {
            token_acct: { _eq: pda?.toBase58() }
          },
          limit: 1
        },
        token_acct: true,
        owner_acct: true,
        amount: true,
        mint_acct: true,
        token: {
          symbol: true,
          image_url: true,
          decimals: true
        }
      }
    });

    const tokenAcct = token_accts[0];
    if (!tokenAcct) {
      throw new Error("token account not found");
    }

    const dbToken = tokenAcct.token;
    if (!dbToken.symbol || !dbToken.decimals || !dbToken.image_url) {
      throw new Error("token data incomplete");
    }

    const balanceScaled = (tokenAcct.amount ?? 0) / 10 ** (token.decimals ?? 0);
    const rpcBalance = await this.rpcBalancesClient.fetchTokenBalance(
      pda,
      token
    );

    if (rpcBalance.balance !== balanceScaled) {
      throw new Error("indexed token acct balance is not up to date with RPC");
    }
  }

  private watchTokenAcctForArgs(
    args: {
      distinct_on?: token_accts_select_column[] | null | undefined;
      limit?: number | null | undefined;
      offset?: number | null | undefined;
      order_by?: token_accts_order_by[] | null | undefined;
      where?: token_accts_bool_exp | null | undefined;
    },
    token: TokenProps
  ): Observable<TokenWithBalance> {
    return new Observable((subscriber) => {
      this.compareBalances(
        args.where?.token_acct?._eq
          ? new PublicKey(args.where.token_acct._eq)
          : null,
        token
      )
        .then(() => {
          const { query, variables } = generateSubscriptionOp({
            token_accts: {
              __args: {
                ...args,
                where: {
                  ...args.where
                },
                limit: 1
              },
              token_acct: true,
              owner_acct: true,
              amount: true,
              mint_acct: true,
              token: {
                symbol: true,
                image_url: true,
                decimals: true
              }
            }
          });

          const subscriptionCleanup = this.graphqlWSClient.subscribe<{
            token_accts: {
              token_acct: string;
              owner_acct: string;
              amount: number;
              mint_acct: string;
            }[];
          }>(
            { query, variables },
            {
              next: (data) => {
                const tokensWithBalances =
                  data.data?.token_accts
                    ?.map<TokenWithBalance | undefined>((tokenAcct) => {
                      const balanceScaled =
                        (tokenAcct.amount ?? 0) / 10 ** (token.decimals ?? 0);

                      return {
                        balance: balanceScaled,
                        token
                      };
                    })
                    .filter((t): t is TokenWithBalance => Boolean(t)) ?? [];
                if (tokensWithBalances.length === 0) {
                  subscriber.error("token balance not found");
                }
                subscriber.next(tokensWithBalances[0]);
              },
              error: (error) => subscriber.error(error),
              complete: () => subscriber.complete()
            }
          );
          return () => subscriptionCleanup();
        })
        .catch((error: Error) => {
          subscriber.error(error);
        });
    });
  }
}
