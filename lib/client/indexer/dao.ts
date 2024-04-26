import { Dao, DaoAggregate, FutarchyProtocol } from "@/types";
import { FutarchyDaoClient } from "@/client";
import { FutarchyRPCDaoClient } from "../rpc";
import { Client as IndexerGraphQLClient } from "./graphql";
import { getFutarchyProtocols } from "@/utils";
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
  async fetchAllDaos(): Promise<DaoAggregate[]> {
    try {
      const { dao_details } = await this.graphqlClient.query?.({
        dao_details: {
          // pass arguments to the query
          name: true,
          slug: true,
          url: true,
          github: true,
          x_account: true,
          description: true,
          daos: {
            program_acct: true,
            dao_acct: true,
            tokenByBaseAcct: {
              decimals: true,
              symbol: true,
              mint_acct: true,
              name: true,
            },
            tokenByQuoteAcct: {
              decimals: true,
              symbol: true,
              mint_acct: true,
              name: true,
            },
            treasury_acct: true,
            proposals_aggregate: {
              aggregate: {
                count: true,
              },
            },
          },
        },
      });

      const daoAggregates = dao_details.map<DaoAggregate>((daoDetails) => {
        return {
          daoName: daoDetails.name ?? "",
          daoSlug: daoDetails.slug ?? "",
          daos: daoDetails.daos
            .map((d) => {
              if (this.protocolMap.get(d.program_acct)) {
                return {
                  baseToken: {
                    symbol: d.tokenByBaseAcct.symbol,
                    decimals: d.tokenByBaseAcct.decimals,
                    name: d.tokenByBaseAcct.name ?? "",
                    publicKey: d.tokenByBaseAcct.mint_acct,
                    url: "https://app.themetadao.org/_next/static/media/meta.5003001f.png",
                  },
                  quoteToken: {
                    symbol: d.tokenByQuoteAcct?.symbol,
                    decimals: d.tokenByQuoteAcct?.decimals,
                    name: d.tokenByQuoteAcct?.name,
                    publicKey: d.tokenByQuoteAcct?.mint_acct,
                    url: "https://app.themetadao.org/_next/static/media/meta.5003001f.png",
                  },
                  daoAccount: {
                    usdcMint: new PublicKey(
                      d.tokenByQuoteAcct?.mint_acct ?? ""
                    ),
                    treasury: new PublicKey(d.treasury_acct ?? ""),
                    tokenMint: d.tokenByBaseAcct.mint_acct
                      ? new PublicKey(d.tokenByBaseAcct.mint_acct)
                      : undefined,
                    proposalCount: d.proposals_aggregate.aggregate?.count,
                  },
                  publicKey: new PublicKey(d.dao_acct),
                  protocol: this.protocolMap.get(d.program_acct),
                };
              }
            })
            .filter((d): d is Dao => !!d),
        };
      });

      return daoAggregates;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async fetchDao(daoAddress: string): Promise<Dao | undefined> {
    return undefined;
  }
}
