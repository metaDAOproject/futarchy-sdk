import { FutarchyUserClient } from "@/client";
import {
  Client as IndexerGraphQLClient,
  user_performance_bool_exp
} from "./__generated__";
import {
  UserPerformance,
  UserPerformanceFetchRequest,
  UserRanking,
  UserDeposit,
  ProposalUserAndTradeCount
} from "@/types/user";
import { PublicKey } from "@solana/web3.js";
import { FutarchyProtocol, ProposalState } from "@/types";

export class FutarchyIndexerUserClient implements FutarchyUserClient {
  private graphqlClient: IndexerGraphQLClient;
  private protocolMap: Map<string, FutarchyProtocol>;

  constructor(
    graphqlClient: IndexerGraphQLClient,
    protocolMap: Map<string, FutarchyProtocol>
  ) {
    this.graphqlClient = graphqlClient;
    this.protocolMap = protocolMap;
  }

  async fetchUserPerformance(
    request: UserPerformanceFetchRequest
  ): Promise<UserPerformance[]> {
    const userPerformanceWhere: user_performance_bool_exp = Object.entries(
      request
    )
      .filter((field) => {
        const [_, val] = field;
        return !!val;
      })
      .reduce((where, field) => {
        const [key, val] = field;
        if (key === "userAcct" && val && typeof val === "object") {
          where.user_acct = { _eq: val.toBase58() };
        }
        if (key === "proposalAcct" && val && typeof val === "object") {
          where.proposal_acct = { _eq: val.toBase58() };
        }
        if (key === "daoSlug" && typeof val === "string") {
          where.proposal = {
            dao: {
              dao_detail: {
                slug: { _eq: val }
              }
            }
          };
        }
        return where;
      }, {} as user_performance_bool_exp);
    const { user_performance } = await this.graphqlClient.query?.({
      user_performance: {
        __args: {
          where: userPerformanceWhere,
          order_by: [
            {
              created_at: "asc"
            }
          ]
        },
        user_acct: true,
        dao_acct: true,
        proposal_acct: true,
        tokens_bought: true,
        tokens_sold: true,
        volume_bought: true,
        volume_sold: true,
        tokens_bought_resolving_market: true,
        tokens_sold_resolving_market: true,
        volume_bought_resolving_market: true,
        volume_sold_resolving_market: true,
        buy_orders_count: true,
        sell_orders_count: true,
        total_volume: true,
        created_at: true,
        proposal: {
          dao: {
            dao_detail: {
              slug: true
            },
            tokenByBaseAcct: {
              decimals: true
            },
            tokenByQuoteAcct: {
              decimals: true
            }
          },
          proposal_num: true,
          proposal_acct: true,
          proposer_acct: true,
          status: true,
          initial_slot: true,
          created_at: true,
          end_slot: true,
          ended_at: true,
          completed_at: true,
          proposal_details: {
            title: true,
            slug: true,
            description: true,
            categories: true,
            content: true
          }
        }
      }
    });
    try {
      return user_performance
        .map<UserPerformance | null>((p) => {
          const proposal = p.proposal;
          const proposalDetails = proposal.proposal_details[0];
          const sumVolume = p.volume_bought + p.volume_sold;
          const subVolume = p.volume_bought - p.volume_sold;
          const volume = sumVolume;

          const sumResolvingMarketVolume =
            p.volume_bought_resolving_market + p.volume_sold_resolving_market;
          const subResolvingMarketVolume =
            p.volume_bought_resolving_market - p.volume_sold_resolving_market;

          const pnl = subResolvingMarketVolume;

          return {
            userAcct: new PublicKey(p.user_acct),
            daoAcct: new PublicKey(p.dao_acct),
            proposalAcct: new PublicKey(p.proposal_acct),
            tokensBought: p.tokens_bought,
            tokensSold: p.tokens_sold,
            volumeBought: p.volume_bought,
            volumeSold: p.volume_sold,
            totalVolume: p.total_volume,
            tokensBoughtResolvingMarket: p.tokens_bought_resolving_market,
            tokensSoldResolvingMarket: p.tokens_sold_resolving_market,
            volumeBoughtResolvingMarket: p.volume_bought_resolving_market,
            volumeSoldResolvingMarket: p.volume_sold_resolving_market,
            buyOrderCount: p.buy_orders_count,
            sellOrderCount: p.sell_orders_count,
            createdAt: new Date(p.created_at),
            pnl: pnl,
            proposal: {
              account: {
                number: proposal.proposal_num
              },
              dao: {
                slug: proposal.dao?.dao_detail?.slug ?? ""
              },
              endDate: proposal.ended_at
                ? new Date(proposal.ended_at)
                : new Date(
                    new Date(proposal.created_at).setDate(
                      new Date(proposal.created_at).getDate() + 3
                    )
                  ),
              // TODO figure this out by slot enqueued maybe
              finalizationDate: proposal.completed_at,
              participants: [],
              // TOKEN amount on twap is probably volume
              // DO WE WANT TO PASS ALL DATA IN HERE FOR PRICES?????
              proposer: {
                publicKey: proposal.proposer_acct
              },
              publicKey: new PublicKey(proposal.proposal_acct),
              state: proposal.status as ProposalState,
              tags:
                proposalDetails?.categories?.map(
                  (c: { category: string }) => c.category
                ) ?? [],
              title: proposalDetails?.title ?? "",
              volume: volume
            }
          };
        })
        .filter((p): p is UserPerformance => !!p);
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async fetchTopTradersByDao(daoSlug: string): Promise<UserRanking[]> {
    const { top_dao_traders } = await this.graphqlClient.query({
      top_dao_traders: {
        __args: { args: { dao_slug: daoSlug } },
        total_volume: true,
        user_acct: true
      }
    });

    return top_dao_traders
      .map<UserRanking>((u) => ({
        totalVolume: u.total_volume ?? 0,
        userAcct: new PublicKey(u.user_acct)
      }))
      .sort((a, b) => b.totalVolume - a.totalVolume)
      .slice(0, 4);
  }

  async fetchUserDeposits(userAcct: string): Promise<UserDeposit[]> {
    const { user_deposits } = await this.graphqlClient.query({
      user_deposits: {
        __args: {
          where: {
            user_acct: {
              _eq: userAcct
            }
          }
        },
        user_acct: true,
        token_amount: true,
        mint_acct: true,
        tx_sig: true,
        token: {
          decimals: true,
          name: true
        },
        created_at: true
      }
    });

    return user_deposits.map<UserDeposit>((d) => {
      return {
        txSig: d.tx_sig,
        userAcct: new PublicKey(d.user_acct),
        tokenAmount: d.token_amount,
        mintAcct: new PublicKey(d.mint_acct),
        token: {
          name: d.token.name,
          decimals: d.token.decimals
        },
        createdAt: d.created_at
      };
    });
  }

  async fetchProposalUserAndTrades(
    proposalAcct: string | null
  ): Promise<ProposalUserAndTradeCount[]> {
    const { user_count_and_trade_count_per_proposal } =
      await this.graphqlClient.query({
        user_count_and_trade_count_per_proposal: {
          __args: {
            args: { proposal_acct: proposalAcct },
            where: {
              proposal_acct: {
                _eq: proposalAcct
              }
            }
          },
          proposal_acct: true,
          user_count: true,
          trade_count: true
        }
      });

    return user_count_and_trade_count_per_proposal.map<ProposalUserAndTradeCount>(
      (d) => {
        return {
          proposalAcct: new PublicKey(d.proposal_acct),
          userCount: d.user_count,
          tradeCount: d.trade_count
        };
      }
    );
  }
}
