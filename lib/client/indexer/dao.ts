import {
  Dao,
  DaoAccount,
  DaoAggregate,
  DaoDetails__GQL,
  FutarchyProtocol
} from "@/types";
import { FutarchyDaoClient } from "@/client";
import { FutarchyRPCDaoClient } from "../rpc";
import {
  Client as IndexerGraphQLClient,
  dao_details_bool_exp
} from "./__generated__";
import { PublicKey } from "@solana/web3.js";

export class FutarchyIndexerDaoClient implements FutarchyDaoClient {
  private protocolMap: Map<string, FutarchyProtocol>;
  private rpcDaoClient: FutarchyRPCDaoClient;
  private graphqlClient: IndexerGraphQLClient;
  constructor(
    rpcDaoClient: FutarchyRPCDaoClient,
    graphqlClient: IndexerGraphQLClient,
    protocolMap: Map<string, FutarchyProtocol>
  ) {
    this.protocolMap = protocolMap;
    this.rpcDaoClient = rpcDaoClient;
    this.graphqlClient = graphqlClient;
  }
  async fetchAllDaos(showHidden?: boolean): Promise<DaoAggregate[]> {
    try {
      const whereClause: dao_details_bool_exp = showHidden
        ? {}
        : {
            _or: [
              {
                is_hide: { _eq: false }
              },
              {
                is_hide: { _is_null: true }
              }
            ]
          };

      const { dao_details } = await this.graphqlClient.query?.({
        dao_details: {
          __args: {
            where: whereClause
          },
          // pass arguments to the query
          name: true,
          slug: true,
          url: true,
          github: true,
          x_account: true,
          description: true,
          image_url: true,
          fail_token_image_url: true,
          pass_token_image_url: true,
          lp_token_image_url: true,
          daos: {
            created_at: true,
            program_acct: true,
            dao_acct: true,
            tokenByBaseAcct: {
              decimals: true,
              symbol: true,
              mint_acct: true,
              name: true,
              image_url: true,
              supply: true
            },
            tokenByQuoteAcct: {
              decimals: true,
              symbol: true,
              mint_acct: true,
              name: true,
              image_url: true,
              supply: true
            },
            pass_threshold_bps: true,
            slots_per_proposal: true,
            treasury_acct: true,
            proposals_aggregate: {
              aggregate: {
                count: true
              }
            }
          }
        }
      });

      const daoAggregates = dao_details.map<DaoAggregate>((daoDetails) =>
        this.getDaoAggregateFromDaoDetailsQuery(daoDetails)
      );

      return daoAggregates;
    } catch (e) {
      console.error(e);
      return this.rpcDaoClient.fetchAllDaos();
    }
  }

  async fetchDao(daoSlug: string): Promise<DaoAggregate | null> {
    try {
      const { dao_details } = await this.graphqlClient.query({
        dao_details: {
          __args: {
            where: {
              slug: { _eq: daoSlug }
            },
            limit: 1
          },
          name: true,
          slug: true,
          url: true,
          github: true,
          x_account: true,
          description: true,
          image_url: true,
          fail_token_image_url: true,
          pass_token_image_url: true,
          lp_token_image_url: true,
          daos: {
            __args: {
              order_by: [
                {
                  created_at: "asc_nulls_last"
                }
              ]
            },
            program_acct: true,
            dao_acct: true,
            tokenByBaseAcct: {
              decimals: true,
              symbol: true,
              mint_acct: true,
              name: true,
              image_url: true,
              supply: true
            },
            tokenByQuoteAcct: {
              decimals: true,
              symbol: true,
              mint_acct: true,
              name: true,
              image_url: true,
              supply: true
            },
            pass_threshold_bps: true,
            slots_per_proposal: true,
            treasury_acct: true,
            proposals_aggregate: {
              aggregate: {
                count: true
              }
            },
            created_at: true
          }
        }
      });
      if (dao_details[0]) {
        return this.getDaoAggregateFromDaoDetailsQuery(dao_details[0]);
      }
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  private getDaoAggregateFromDaoDetailsQuery(
    daoDetails: DaoDetails__GQL
  ): DaoAggregate {
    return {
      name: daoDetails.name ?? "",
      slug: daoDetails.slug ?? "",
      logo: daoDetails.image_url,
      description: daoDetails.description,
      url: daoDetails.url,
      xAccount: daoDetails.x_account ?? "",
      github: daoDetails.github ?? "",
      failTokenImageUrl: daoDetails.fail_token_image_url,
      passTokenImageUrl: daoDetails.pass_token_image_url,
      lpTokenImageUrl: daoDetails.lp_token_image_url,
      joinedAt: new Date(daoDetails.daos[0].created_at ?? ""),
      proposalCount: daoDetails.daos.reduce(
        (acc, d) => acc + (d.proposals_aggregate?.aggregate?.count ?? 0),
        0
      ),
      daos: daoDetails.daos
        .map((d) => {
          if (this.protocolMap.get(d.program_acct)) {
            return {
              baseToken: {
                symbol: d.tokenByBaseAcct?.symbol,
                decimals: d.tokenByBaseAcct?.decimals,
                name: d.tokenByBaseAcct?.name ?? null,
                publicKey: d.tokenByBaseAcct?.mint_acct,
                url: d.tokenByBaseAcct?.image_url,
                supply: d.tokenByBaseAcct?.supply ?? null
              },
              quoteToken: {
                symbol: d.tokenByQuoteAcct?.symbol,
                decimals: d.tokenByQuoteAcct?.decimals,
                name: d.tokenByQuoteAcct?.name,
                publicKey: d.tokenByQuoteAcct?.mint_acct,
                url: d.tokenByQuoteAcct?.image_url,
                supply: d.tokenByBaseAcct?.supply ?? null
              },
              daoAccount: {
                // TODO these nullable conditions result in public keys that don't make sense potentially
                usdcMint: new PublicKey(d.tokenByQuoteAcct?.mint_acct ?? 5),
                treasury: new PublicKey(d.treasury_acct ?? 5),
                tokenMint: d.tokenByBaseAcct?.mint_acct
                  ? new PublicKey(d.tokenByBaseAcct?.mint_acct)
                  : undefined,
                proposalCount: d.proposals_aggregate.aggregate?.count,
                passThresholdBps: d.pass_threshold_bps,
                slotsPerProposal: d.slots_per_proposal
              },
              publicKey: new PublicKey(d.dao_acct),
              protocol: this.protocolMap.get(d.program_acct)
            };
          }
        })
        .filter((d) => !!d) as Dao[]
    };
  }

  async getMinLpToProvide(daoAggregate: DaoAggregate) {
    return this.rpcDaoClient.getMinLpToProvide(daoAggregate);
  }

  async getTreasuryBalance(daoAccount: DaoAccount) {
    return this.rpcDaoClient.getTreasuryBalance(daoAccount);
  }
}
