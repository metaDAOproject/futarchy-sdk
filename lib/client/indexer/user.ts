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
              name: true,
              slug: true
            },
            dao_acct: true,
            treasury_acct: true,
            pass_threshold_bps: true,
            slots_per_proposal: true,
            tokenByBaseAcct: {
              mint_acct: true,
              image_url: true,
              decimals: true,
              symbol: true,
              name: true,
              supply: true
            },
            tokenByQuoteAcct: {
              mint_acct: true,
              image_url: true,
              decimals: true,
              symbol: true,
              name: true,
              supply: true
            },
            program: {
              program_acct: true,
              version: true,
              program_name: true
            }
          },
          proposal_num: true,
          proposal_acct: true,
          proposer_acct: true,
          reactions: {
            reaction: true
          },
          conditional_vault: {
            underlying_mint_acct: true,
            underlying_token_acct: true,
            cond_finalize_token_mint_acct: true,
            cond_revert_token_mint_acct: true
          },
          conditionalVaultByQuoteVault: {
            underlying_mint_acct: true,
            underlying_token_acct: true,
            cond_finalize_token_mint_acct: true,
            cond_revert_token_mint_acct: true
          },
          status: true,
          initial_slot: true,
          created_at: true,
          end_slot: true,
          ended_at: true,
          completed_at: true,
          description_url: true,
          updated_at: true,
          base_vault: true,
          quote_vault: true,
          fail_market_acct: true,
          pass_market_acct: true,
          pricing_model_fail_acct: true,
          pricing_model_pass_acct: true,
          markets: {
            market_acct: true,
            base_mint_acct: true,
            quote_mint_acct: true,
            market_type: true,
            twaps: {
              __args: {
                order_by: [
                  {
                    created_at: "desc"
                  }
                ],
                limit: 1
              },
              token_amount: true,
              created_at: true,
              last_observation: true,
              last_price: true,
              observation_agg: true,
              updated_slot: true
            },
            orders: {
              quote_price: true,
              filled_base_amount: true
            },
            prices: {
              __args: {
                order_by: [
                  {
                    created_at: "desc"
                  }
                ],
                limit: 1
              },
              base_amount: true,
              quote_amount: true,
              price: true,
              created_at: true,
              updated_slot: true,
              prices_type: true
            }
          },
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

        const relatedProtocol = this.protocolMap.get(
          proposal.dao.program.program_acct
        );
        const failMarket = proposal.markets.find(
          (m) => m.market_acct === proposal.fail_market_acct
        );
        const passMarket = proposal.markets.find(
          (m) => m.market_acct === proposal.pass_market_acct
        );
        const baseVault = proposal.conditional_vault;
        const quoteVault = proposal.conditionalVaultByQuoteVault;
        const proposalDetails = proposal.proposal_details[0];
        const passPrice = passMarket?.prices ?? [];
        const failPrice = failMarket?.prices ?? [];
        const passTwap = passMarket?.twaps ?? [];
        const failTwap = failMarket?.twaps ?? [];
        const passVolume =
          passMarket?.orders?.reduce(
            (prev, curr) =>
              prev +
              PriceMath.getHumanAmount(
                new BN(curr.filled_base_amount),
                new BN(proposal.dao.tokenByBaseAcct?.decimals ?? 6)
              ) *
                curr.quote_price,
            0
          ) ?? 0;
        const failVolume =
          failMarket?.orders?.reduce(
            (prev, curr) =>
              prev +
              PriceMath.getHumanAmount(
                new BN(curr.filled_base_amount),
                new BN(proposal.dao.tokenByBaseAcct?.decimals ?? 6)
              ) *
                curr.quote_price,
            0
          ) ?? 0;

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

        if (!relatedProtocol || !passMarket || !failMarket) return null;

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
              baseVault: new PublicKey(proposal.base_vault ?? 5),
              quoteVault: new PublicKey(proposal.quote_vault ?? 5),
              descriptionUrl: proposal.description_url ?? "",
              instruction: {} as any,
              number: proposal.proposal_num,
              openbookFailMarket: new PublicKey(proposal.fail_market_acct ?? 5),
              openbookPassMarket: new PublicKey(proposal.pass_market_acct ?? 5),
              openbookTwapFailMarket: new PublicKey(
                proposal.pricing_model_fail_acct ?? 5
              ),
              openbookTwapPassMarket: new PublicKey(
                proposal.pricing_model_pass_acct ?? 5
              ),
              proposer: new PublicKey(proposal.proposer_acct),
              slotEnqueued: proposal.initial_slot
            },
            baseVaultAccount: {
              conditionalOnFinalizeTokenMint: new PublicKey(
                baseVault?.cond_finalize_token_mint_acct ?? 5
              ),
              conditionalOnRevertTokenMint: new PublicKey(
                baseVault?.cond_revert_token_mint_acct ?? 5
              ),
              protocol: relatedProtocol,
              // TODO adding this to get the types to work, but this is not long term
              settlementAuthority: new PublicKey(4),
              // TODO use conditional vault when it's available, deposit/withdrawal won't work until then
              underlyingTokenAccount: new PublicKey(
                baseVault?.underlying_token_acct ?? 5
              ),
              underlyingTokenMint: new PublicKey(
                baseVault?.underlying_mint_acct ?? 5
              )
            },
            quoteVaultAccount: {
              conditionalOnFinalizeTokenMint: new PublicKey(
                quoteVault?.cond_finalize_token_mint_acct ?? 5
              ),
              conditionalOnRevertTokenMint: new PublicKey(
                quoteVault?.cond_revert_token_mint_acct ?? 5
              ),
              protocol: relatedProtocol,
              // TODO adding this to get the types to work, but this is not long term
              settlementAuthority: new PublicKey(4),
              // TODO these should not be nullable in the DB
              underlyingTokenAccount: new PublicKey(
                quoteVault?.underlying_token_acct ?? 5
              ),
              underlyingTokenMint: new PublicKey(
                quoteVault?.underlying_mint_acct ?? 5
              )
            },
            passMarket: new PublicKey(passMarket?.market_acct ?? 5),
            passThreshold: proposal.dao.pass_threshold_bps ?? 0,
            failMarket: new PublicKey(failMarket?.market_acct ?? 5),
            content: proposalDetails?.content ?? "",
            description: proposalDetails?.description ?? "",
            // both markets should have the same type... but maybe this could be cleaned up
            marketType: proposal.markets[0].market_type as MarketType,
            startSlot: proposal.initial_slot,
            endSlot: proposal.end_slot,
            // TODO figure this out by slot enqueued maybe
            creationDate: new Date(proposal.created_at),
            endDate: proposal.ended_at
              ? new Date(proposal.ended_at)
              : new Date(
                  new Date(proposal.created_at).setDate(
                    new Date(proposal.created_at).getDate() + 3
                  )
                ),
            // TODO figure this out by slot enqueued maybe
            finalizationDate: proposal.completed_at,
            dao: {
              name: proposal.dao.dao_detail?.name ?? "",
              slug: proposal.dao.dao_detail?.slug ?? "",
              publicKey: new PublicKey(proposal.dao.dao_acct),
              daoAccount: {
                passThresholdBps: proposal.dao.pass_threshold_bps,
                slotsPerProposal: proposal.dao.slots_per_proposal,
                // TODO these null conditionals will create public keys that don't make sense
                treasury: new PublicKey(proposal.dao.treasury_acct ?? 5),
                // TODO these fields from the DB should not be nullable imo
                usdcMint: new PublicKey(
                  proposal.dao.tokenByQuoteAcct?.mint_acct ?? 5
                ),
                tokenMint: proposal.dao.tokenByBaseAcct
                  ? new PublicKey(proposal.dao.tokenByBaseAcct.mint_acct)
                  : undefined
              },
              baseToken: {
                decimals: proposal.dao.tokenByBaseAcct?.decimals ?? 0,
                name: proposal.dao.tokenByBaseAcct?.name ?? "",
                symbol: proposal.dao.tokenByBaseAcct?.symbol ?? "",
                url: proposal.dao.tokenByBaseAcct?.image_url ?? "",
                publicKey: proposal.dao.tokenByBaseAcct?.mint_acct ?? "",
                supply: proposal.dao.tokenByBaseAcct?.supply ?? 0
              },
              quoteToken: {
                decimals: proposal.dao.tokenByQuoteAcct?.decimals ?? 0,
                name: proposal.dao.tokenByQuoteAcct?.name ?? "",
                symbol: proposal.dao.tokenByQuoteAcct?.symbol ?? "",
                url: proposal.dao.tokenByQuoteAcct?.image_url ?? "",
                publicKey: proposal.dao.tokenByQuoteAcct?.mint_acct ?? "",
                supply: proposal.dao.tokenByQuoteAcct?.supply ?? 0
              }
            },
            participants: [],
            // TOKEN amount on twap is probably volume
            // DO WE WANT TO PASS ALL DATA IN HERE FOR PRICES?????
            prices: {
              fail: {
                // TODO: need to pull this data for twaps
                spot: failPrice.length > 0 ? failPrice[0].price : 0,
                // TODO: Fix this... We're really trying to handle a few things with different twaps here......
                twap:
                  failTwap.length > 0
                    ? failTwap[0].last_price
                      ? failTwap[0].last_price
                      : failTwap[0].last_observation
                    : 0,
                volume: failVolume
              },
              pass: {
                // TODO: need to pull this data for twaps as well
                spot: passPrice.length > 0 ? passPrice[0].price : 0,
                twap:
                  passTwap.length > 0
                    ? passTwap[0].last_price
                      ? passTwap[0].last_price
                      : passTwap[0].last_observation
                    : 0,
                volume: passVolume
              }
            },
            proposer: {
              publicKey: proposal.proposer_acct
            },
            publicKey: new PublicKey(proposal.proposal_acct),
            state: proposal.status as ProposalState,
            reactions: proposal.reactions.map((r) => r.reaction),
            protocol: relatedProtocol,
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
          ]
        },
        user_acct: true,
        user_performances_aggregate: {
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
