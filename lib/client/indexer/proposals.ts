import { PublicKey } from "@solana/web3.js";
import {
  Proposal,
  DaoAggregate,
  VaultAccountWithProtocol,
  FutarchyProtocol,
  ProposalState,
  MarketType,
  ProposalAccounts,
  ProgramVersionLabel
} from "@/types";
import { FutarchyProposalsClient } from "@/client";
import { FutarchyRPCProposalsClient } from "@/client/rpc";
import {
  Client as IndexerGraphQLClient,
  generateSubscriptionOp
} from "./__generated__";
import { SendTransactionResponse } from "@/types/transactions";
import {
  CreateProposalInstruction,
  MarketParams,
  ProposalDetails
} from "@/types/createProp";
import { BN } from "@coral-xyz/anchor";
import { PriceMath } from "@metadaoproject/futarchy";
import { Observable } from "rxjs";
import { Client as GQLWebSocketClient } from "graphql-ws";
import { SUPPORTED_EMOJIS } from "@/constants/reactions";
import { ReactionType } from "@/types/reactions";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  private protocolMap: Map<string, FutarchyProtocol>;
  private rpcProposalsClient: FutarchyRPCProposalsClient;
  private graphqlClient: IndexerGraphQLClient;
  private graphqlWSClient: GQLWebSocketClient;

  constructor(
    rpcProposalsClient: FutarchyRPCProposalsClient,
    graphqlClient: IndexerGraphQLClient,
    graphqlWSClient: GQLWebSocketClient,
    protocolMap: Map<string, FutarchyProtocol>
  ) {
    this.rpcProposalsClient = rpcProposalsClient;
    this.graphqlClient = graphqlClient;
    this.graphqlWSClient = graphqlWSClient;
    this.protocolMap = protocolMap;
  }
  async fetchProposals(dao: DaoAggregate): Promise<Proposal[]> {
    const { dao_details } = await this.graphqlClient.query?.({
      dao_details: {
        __args: {
          where: {
            slug: { _eq: dao.slug }
          },
          limit: 1
        },
        daos: {
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
          },
          proposals: {
            __args: {
              order_by: [
                {
                  created_at: "desc"
                }
              ]
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
                  ]
                },
                token_amount: true,
                created_at: true,
                last_observation: true,
                last_price: true,
                observation_agg: true,
                updated_slot: true
              },
              // TODO: is this for user orders?
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
                  ]
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
      }
    });
    if (!dao_details[0]) return [];
    const proposals = dao_details.map((dd) =>
      dd.daos.map((d) => {
        const relatedProtocol = this.protocolMap.get(d.program.program_acct);
        // TODO: do a lot of null checking on public key strings that are nullable
        // so we don't potentially pass empty string to PublicKey
        if (relatedProtocol) {
          return d.proposals.map<Proposal | undefined>((p) => {
            const failMarket = p.markets.find(
              (m) => m.market_acct === p.fail_market_acct
            );
            const passMarket = p.markets.find(
              (m) => m.market_acct === p.pass_market_acct
            );
            const baseVault = p.conditional_vault;
            const quoteVault = p.conditionalVaultByQuoteVault;
            const proposalDetails = p.proposal_details[0];
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
                    new BN(d.tokenByBaseAcct?.decimals ?? 6)
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
                    new BN(d.tokenByBaseAcct?.decimals ?? 6)
                  ) *
                    curr.quote_price,
                0
              ) ?? 0;

            if (!proposalDetails || !passMarket || !failMarket) return;
            return {
              account: {
                baseVault: new PublicKey(p.base_vault ?? 5),
                quoteVault: new PublicKey(p.quote_vault ?? 5),
                descriptionUrl: p.description_url ?? "",
                //TODO pass in actual instruction...
                instruction: {} as any,
                number: p.proposal_num,
                openbookFailMarket: new PublicKey(p.fail_market_acct ?? 5),
                openbookPassMarket: new PublicKey(p.pass_market_acct ?? 5),
                openbookTwapFailMarket: new PublicKey(
                  p.pricing_model_fail_acct ?? 5
                ),
                openbookTwapPassMarket: new PublicKey(
                  p.pricing_model_pass_acct ?? 5
                ),
                proposer: new PublicKey(p.proposer_acct),
                slotEnqueued: p.initial_slot
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
              passMarket: new PublicKey(passMarket.market_acct),
              failMarket: new PublicKey(failMarket.market_acct),
              content: proposalDetails.content ?? "",
              description: proposalDetails.description ?? "",
              // both markets should have the same type... but maybe this could be cleaned up
              marketType: p.markets[0].market_type as MarketType,
              startSlot: p.initial_slot,
              endSlot: p.end_slot,
              // TODO figure this out by slot enqueued maybe
              creationDate: new Date(p.created_at),
              endDate: p.ended_at
                ? new Date(p.ended_at)
                : new Date(
                    new Date(p.created_at).setDate(
                      new Date(p.created_at).getDate() + 3
                    )
                  ),
              // TODO figure this out by slot enqueued maybe
              finalizationDate: p.completed_at,
              dao: {
                publicKey: new PublicKey(d.dao_acct),
                daoAccount: {
                  passThresholdBps: d.pass_threshold_bps,
                  slotsPerProposal: d.slots_per_proposal,
                  proposalCount: d.proposals.length,
                  // TODO these null conditionals will create public keys that don't make sense
                  treasury: new PublicKey(d.treasury_acct ?? 5),
                  // TODO these fields from the DB should not be nullable imo
                  usdcMint: new PublicKey(d.tokenByQuoteAcct?.mint_acct ?? 5),
                  tokenMint: d.tokenByBaseAcct
                    ? new PublicKey(d.tokenByBaseAcct.mint_acct)
                    : undefined
                },
                baseToken: {
                  decimals: d.tokenByBaseAcct?.decimals ?? 0,
                  name: d.tokenByBaseAcct?.name ?? "",
                  symbol: d.tokenByBaseAcct?.symbol ?? "",
                  url: d.tokenByBaseAcct?.image_url ?? "",
                  publicKey: d.tokenByBaseAcct?.mint_acct ?? "",
                  supply: d.tokenByBaseAcct?.supply ?? 0
                },
                quoteToken: {
                  decimals: d.tokenByQuoteAcct?.decimals ?? 0,
                  name: d.tokenByQuoteAcct?.name ?? "",
                  symbol: d.tokenByQuoteAcct?.symbol ?? "",
                  url: d.tokenByQuoteAcct?.image_url ?? "",
                  publicKey: d.tokenByQuoteAcct?.mint_acct ?? "",
                  supply: d.tokenByQuoteAcct?.supply ?? 0
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
                publicKey: p.proposer_acct
              },
              publicKey: new PublicKey(p.proposal_acct),
              state: p.status as ProposalState,
              reactions: p.reactions.map((r) => r.reaction),
              protocol: relatedProtocol,
              slug: proposalDetails.slug || p.proposal_acct,
              // TODO we need our beatufiul tags
              tags: proposalDetails.categories || [],
              title: proposalDetails.title ?? "",
              volume: passVolume + failVolume
            };
          });
        }
      })
    );
    return proposals
      .flat()
      .flat()
      .filter((p): p is Proposal => !!p);
  }
  
  async fetchProposalMarketsChartData (
    proposal: Proposal
  ) {
    // TODO: Fetch the market data SPECIFICALLY FOR THIS PROPOSAL MARKET
    const { proposal_details } = await this.graphqlClient.query?.({
      proposals: {
        __args: {
          where: {
            proposal_acct: { _eq: proposal.publicKey.toBase58() }
          },
        },
        proposal_acct: true,
        fail_market_acct: true,
        pass_market_acct: true,
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
              ]
            },
            token_amount: true,
            created_at: true,
            last_observation: true,
            last_price: true,
            observation_agg: true,
            updated_slot: true
          },
          // TODO: Proxy for showing volume, maybe add it back or remove it now
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
              ]
            },
            base_amount: true,
            quote_amount: true,
            price: true,
            created_at: true,
            updated_slot: true,
            prices_type: true
          }
        }
      }
    });
    if (!proposal_details[0]) return [];
    const proposals = proposal_details.map((p) => {
      const failMarket = p.markets.find(
        (m) => m.market_acct === p.fail_market_acct
      );
      const passMarket = p.markets.find(
        (m) => m.market_acct === p.pass_market_acct
      );
      const proposalDetails = p.proposal_details[0];
      const passPrice = passMarket?.prices ?? [];
      const failPrice = failMarket?.prices ?? [];
      const passTwap = passMarket?.twaps ?? [];
      const failTwap = failMarket?.twaps ?? [];
      // TODO: If we're fetching this we can kick this out somewhere to load it..
      // My preference would be to setup an aggregate and not push hard on this
      // speeds up loading (maybe)
      const passVolume =
        passMarket?.orders?.reduce(
          (prev, curr) =>
            prev +
            PriceMath.getHumanAmount(
              new BN(curr.filled_base_amount),
              // TODO: Need to setup this thing for not having DAO
              new BN(d.tokenByBaseAcct?.decimals ?? 6)
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
              // TODO: Need to setup this thing for not having DAO
              new BN(d.tokenByBaseAcct?.decimals ?? 6)
            ) *
              curr.quote_price,
          0
        ) ?? 0;

      if (!proposalDetails || !passMarket || !failMarket) return;
      return {
        passMarket: new PublicKey(passMarket.market_acct),
        failMarket: new PublicKey(failMarket.market_acct),
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
        publicKey: new PublicKey(p.proposal_acct),
        volume: passVolume + failVolume
      };
    });
    return proposals
    .flat()
    .flat()
    .filter((p): p is Proposal => !!p);
  }

  async fetchCurrentProposalLiquidity (
    proposal: Proposal
  ) {
    // TODO: Fetch the liquidity LIMIT 1 OR RPC METHOD FOR MOST UP TO DATE data SPECIFICALLY FOR THIS PROPOSAL MARKET
    
    const { proposal_details } = await this.graphqlClient.query?.({
      proposals: {
        __args: {
          where: {
            proposal_acct: { _eq: proposal.publicKey.toBase58() }
          },
          limit: 1,
        },
        fail_market_acct: true,
        pass_market_acct: true,
        pricing_model_fail_acct: true,
        pricing_model_pass_acct: true,
        markets: {
          market_acct: true,
          base_mint_acct: true,
          quote_mint_acct: true,
          market_type: true,
          prices: {
            __args: {
              order_by: [
                {
                  created_at: "desc"
                }
              ],
              limit: 1,
            },
            base_amount: true,
            quote_amount: true,
            created_at: true,
          }
        }
      }
    });
    return proposal_details.map<Proposal | undefined>((p) => {
      const failMarket = p.markets.find(
        (m) => m.market_acct === p.fail_market_acct
      );
      const passMarket = p.markets.find(
        (m) => m.market_acct === p.pass_market_acct
      );
      return {
        passMarketBaseLiquidity: passMarket.prices[0].base_amount,
        passMarketQuoteLiquidity: passMarket.prices[0].quote_amount,
        failMarketBaseLiquidity: failMarket.prices[0].base_amount,
        failMarketQuoteLiquidity: failMarket.prices[0].quote_amount,
      }
    });
  }

  async fetchProposalVolume (
    proposal: Proposal
  ) {
    // TODO: Fetch the proposal's volume metrics / this can be slow / lazy we just don't want to combine it all to slow it down
    // could be a simple aggregate function...
    // TODO: Fetch the liquidity LIMIT 1 OR RPC METHOD FOR MOST UP TO DATE data SPECIFICALLY FOR THIS PROPOSAL MARKET
    const { proposal_details } = await this.graphqlClient.query?.({
      proposals: {
        __args: {
          where: {
            proposal_acct: { _eq: proposal.publicKey.toBase58() }
          },
          limit: 1,
        },
        fail_market_acct: true,
        pass_market_acct: true,
        pricing_model_fail_acct: true,
        pricing_model_pass_acct: true,
        markets: {
          market_acct: true,
          base_mint_acct: true,
          quote_mint_acct: true,
          market_type: true,
          // TODO: is this for user orders?
          orders: {
            quote_price: true,
            filled_base_amount: true
          },
        }
      }
    });
    return proposal_details.map<Proposal | undefined>((p) => {
      const failMarket = p.markets.find(
        (m) => m.market_acct === p.fail_market_acct
      );
      const passMarket = p.markets.find(
        (m) => m.market_acct === p.pass_market_acct
      );
      const passVolume =
        passMarket?.orders?.reduce(
          (prev, curr) =>
            prev +
            PriceMath.getHumanAmount(
              new BN(curr.filled_base_amount),
              // TODO: Fix not having dao
              new BN(d.tokenByBaseAcct?.decimals ?? 6)
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
              // TODO: Fix not having dao
              new BN(d.tokenByBaseAcct?.decimals ?? 6)
            ) *
              curr.quote_price,
          0
        ) ?? 0;
      });
  }

  async deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ) {
    return this.rpcProposalsClient.deposit(
      amount,
      vaultAccountAddress,
      vaultAccount
    );
  }

  async withdraw(proposal: Proposal) {
    return this.rpcProposalsClient.withdraw(proposal);
  }

  async createProposal(
    daoAggregate: DaoAggregate,
    version: ProgramVersionLabel,
    instructionParams: CreateProposalInstruction,
    marketParams: MarketParams,
    proposalDetails: ProposalDetails
  ) {
    return this.rpcProposalsClient.createProposal(
      daoAggregate,
      version,
      instructionParams,
      marketParams,
      proposalDetails
    );
  }

  async finalizeProposal(proposal: Proposal) {
    return this.rpcProposalsClient.finalizeProposal(proposal);
  }

  async saveProposalDetails(proposalDetails: ProposalDetails) {
    this.rpcProposalsClient.saveProposalDetails(proposalDetails);
  }

  async updateProposalAccounts(accounts: ProposalAccounts) {
    this.rpcProposalsClient.updateProposalAccounts(accounts);
  }

  async mergeConditionalTokensForUnderlyingTokens(
    programVersion: ProgramVersionLabel,
    amount: BN,
    proposal: Proposal,
    underlyingToken: "base" | "quote"
  ) {
    return this.rpcProposalsClient.mergeConditionalTokensForUnderlyingTokens(
      programVersion,
      amount,
      proposal,
      underlyingToken
    );
  }

  watchReactions(
    proposal: string,
    user?: string
  ): Observable<{
    [key in ReactionType]: { count: number; userReacted: boolean };
  }> {
    const { query, variables } = generateSubscriptionOp({
      reactions: {
        __args: {
          where: {
            proposal_acct: { _eq: proposal }
          }
        },
        reactor_acct: true,
        updated_at: true,
        reaction: true,
        proposal_acct: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup: () => void = this.graphqlWSClient.subscribe<{
        reactions: {
          reactor_acct: string;
          updated_at: string;
          reaction: string;
          proposal_acct: string;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const reactions = data.data;

            const reactionCounts: {
              [key in ReactionType]: { count: number; userReacted: boolean };
            } = {};
            // Initialize each reaction type
            SUPPORTED_EMOJIS.forEach((reactionType) => {
              reactionCounts[reactionType] = { count: 0, userReacted: false };
            });

            // Might need some optimization later
            reactions?.reactions.forEach((reaction) => {
              reactionCounts[reaction.reaction]!!.count += 1;
              if (user && reaction.reactor_acct === user)
                reactionCounts[reaction.reaction]!!.userReacted = true;
            });

            subscriber.next(reactionCounts);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriptionCleanup()
        }
      );
      return () => subscriptionCleanup();
    });
  }
}
