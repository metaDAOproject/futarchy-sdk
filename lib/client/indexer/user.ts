import { FutarchyUserClient } from "@/client";
import {
  Client as IndexerGraphQLClient,
  user_performance_bool_exp
} from "./__generated__";
import {
  UserPerformance,
  UserPerformanceFetchRequest,
  UserRanking
} from "@/types/user";
import { PublicKey } from "@solana/web3.js";
import { FutarchyProtocol, MarketType, ProposalState } from "@/types";
import { PriceMath } from "@metadaoproject/futarchy";
import { BN } from "@coral-xyz/anchor";

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
          where: userPerformanceWhere
        },
        user_acct: true,
        proposal_acct: true,
        tokens_bought: true,
        tokens_sold: true,
        volume_bought: true,
        volume_sold: true,
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

    return user_performance
      .map<UserPerformance | null>((p) => {
        const proposal = p.proposal;
        const proposalDetails = proposal.proposal_details[0];

        const volume =
          PriceMath.getHumanAmount(
            new BN(p.volume_bought),
            new BN(proposal.dao.tokenByQuoteAcct?.decimals ?? 6)
          ) +
          PriceMath.getHumanAmount(
            new BN(p.volume_sold),
            new BN(proposal.dao.tokenByQuoteAcct?.decimals ?? 6)
          );

        const pnl =
          PriceMath.getHumanAmount(
            new BN(p.volume_bought),
            new BN(proposal.dao.tokenByQuoteAcct?.decimals ?? 6)
          ) -
          PriceMath.getHumanAmount(
            new BN(p.volume_sold),
            new BN(proposal.dao.tokenByQuoteAcct?.decimals ?? 6)
          );

        return {
          userAcct: new PublicKey(p.user_acct),
          proposalAcct: new PublicKey(p.proposal_acct),
          tokensBought: p.tokens_bought,
          tokensSold: p.tokens_sold,
          volumeBought: p.volume_bought,
          volumeSold: p.volume_sold,
          totalVolume: p.total_volume,
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
  }

  async fetchTopTraders(daoSlug: string | null): Promise<UserRanking[]> {
    const userPerformanceWhere = daoSlug
      ? {
          proposal: {
            dao: {
              dao_detail: {
                slug: { _eq: daoSlug }
              }
            }
          }
        }
      : undefined;

    const { users } = await this.graphqlClient.query({
      users: {
        __args: {
          limit: 4,
          order_by: [
            {
              user_performances_aggregate: {
                sum: {
                  total_volume: "desc_nulls_last"
                }
              }
            }
          ],
          where: {
            user_performances: userPerformanceWhere
          }
        },
        user_acct: true,
        user_performances_aggregate: {
          __args: {
            where: userPerformanceWhere
          },
          aggregate: {
            sum: {
              total_volume: true
            }
          }
        }
      }
    });

    return users.map<UserRanking>((u) => ({
      totalVolume: PriceMath.getHumanAmount(
        new BN(u.user_performances_aggregate.aggregate?.sum?.total_volume),
        6 // USDC is always 6...
      ),
      userAcct: new PublicKey(u.user_acct)
    }));
  }
}
