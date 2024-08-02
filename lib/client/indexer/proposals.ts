import { PublicKey } from "@solana/web3.js";
import {
  Proposal,
  DaoAggregate,
  VaultAccountWithProtocol,
  FutarchyProtocol,
  ProposalState,
  MarketType,
  ProposalAccounts,
  ProgramVersionLabel,
  ProposalCounts,
  ProposalWithFullData,
  BalanceLockedInProposal,
  TransactionProcessingUpdate,
  Dao,
  GovernanceParticipant,
  ProposalRanking
} from "@/types";
import { FutarchyProposalsClient } from "@/client";
import { FutarchyRPCProposalsClient } from "@/client/rpc";
import {
  Client as IndexerGraphQLClient,
  generateSubscriptionOp
} from "./__generated__";
import {
  CreateProposalInstruction,
  ProposalOnChainFields,
  MarketParams,
  ProposalDetails,
  ProposalInputs
} from "@/types/createProp";
import { BN } from "@coral-xyz/anchor";
import { PriceMath } from "@metadaoproject/futarchy";
import { Observable } from "rxjs";
import { Client as GQLWebSocketClient } from "graphql-ws";
import { SUPPORTED_EMOJIS } from "@/constants/reactions";
import { ReactionType } from "@/types/reactions";
import dayjs from "dayjs";
import { createSlug } from "@/utils";

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
    const { proposals } = await this.graphqlClient.query?.({
      proposals: {
        __args: {
          where: {
            dao: { dao_detail: { slug: { _eq: dao.slug } } }
          },
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
          prices: {
            __args: {
              limit: 1,
              order_by: [
                {
                  created_at: "desc"
                }
              ]
            },
            price: true,
            created_at: true
          },
          orders: {
            actor_acct: true,
            quote_price: true,
            filled_base_amount: true
          }
        },
        proposal_details: {
          title: true,
          slug: true,
          categories: true
        },
        dao: {
          pass_threshold_bps: true,
          program: {
            program_acct: true,
            version: true,
            program_name: true
          }
        }
      }
    });
    const ret = proposals.map<Proposal | undefined>((p) => {
      const relatedProtocol = this.protocolMap.get(p.dao.program.program_acct);
      // TODO: do a lot of null checking on public key strings that are nullable
      // so we don't potentially pass empty string to PublicKey
      if (relatedProtocol) {
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

        const passParticipants =
          passMarket?.orders.reduce<string[]>(
            (acc, order) => [...acc, order.actor_acct],
            [] as string[]
          ) ?? [];
        const failParticipants =
          failMarket?.orders.reduce<string[]>(
            (acc, order) => [...acc, order.actor_acct],
            [] as string[]
          ) ?? [];

        const participants = [
          ...new Set([...passParticipants, ...failParticipants])
        ].map<GovernanceParticipant>((p) => ({
          publicKey: p
        }));

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
          dao: {
            name: dao.name ?? "",
            slug: dao.slug ?? ""
          },
          passThreshold: p.dao.pass_threshold_bps ?? 0,
          passMarket: new PublicKey(passMarket.market_acct),
          failMarket: new PublicKey(failMarket.market_acct),
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
          participants,
          // TOKEN amount on twap is probably volume
          // DO WE WANT TO PASS ALL DATA IN HERE FOR PRICES?????
          prices: {
            fail: {
              // TODO: need to pull this data for twaps
              spot: failPrice.length > 0 ? failPrice[0].price : 0
              // TODO: Fix this... We're really trying to handle a few things with different twaps here......
            },
            pass: {
              // TODO: need to pull this data for twaps as well
              spot: passPrice.length > 0 ? passPrice[0].price : 0
            }
          },
          proposer: {
            publicKey: p.proposer_acct
          },
          publicKey: new PublicKey(p.proposal_acct),
          state: p.status as ProposalState,
          reactions: p.reactions.map((r) => r.reaction),
          slug: proposalDetails.slug || p.proposal_acct,
          // TODO we need our beatufiul tags
          title: proposalDetails.title ?? "",
          tags:
            proposalDetails.categories?.map(
              (c: { category: string }) => c.category
            ) ?? []
        };
      }
    });

    return ret
      .flat()
      .flat()
      .filter((p): p is Proposal => !!p);
  }

  async fetchTopProposals(daoSlug: string): Promise<ProposalRanking[]> {
    try {
      const { proposals } = await this.graphqlClient.query?.({
        proposals: {
          __args: {
            order_by: [
              {
                user_performances_aggregate: {
                  sum: {
                    total_volume: "desc_nulls_last"
                  }
                }
              }
            ],
            limit: 3,
            where: {
              dao: {
                dao_detail: {
                  slug: { _eq: daoSlug }
                }
              }
            }
          },
          proposal_acct: true,
          status: true,
          proposal_details: {
            title: true
          },
          user_performances_aggregate: {
            aggregate: {
              sum: {
                total_volume: true
              }
            }
          }
        }
      });

      return proposals
        .map((p) => ({
          proposalAcct: new PublicKey(p.proposal_acct),
          state: p.status as ProposalState,
          title: p.proposal_details[0]?.title ?? "",
          totalVolume:
            p.user_performances_aggregate.aggregate?.sum?.total_volume ?? 0
        }))
        .filter((p) => p.totalVolume > 0 && p.title);
    } catch (e) {
      console.error("error fetching top proposals", e);
      return [];
    }
  }

  async fetchProposal(
    proposalAcct: PublicKey
  ): Promise<ProposalWithFullData | null> {
    const { proposals } = await this.graphqlClient.query?.({
      proposals: {
        __args: {
          where: { proposal_acct: { _eq: proposalAcct.toBase58() } },
          order_by: [
            {
              created_at: "desc"
            }
          ]
        },
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
    });
    if (!proposals[0]) return null;

    const proposal = proposals[0];

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
    if (!relatedProtocol || !passMarket || !failMarket) return null;
    return {
      account: {
        baseVault: new PublicKey(proposal.base_vault ?? 5),
        quoteVault: new PublicKey(proposal.quote_vault ?? 5),
        descriptionUrl: proposal.description_url ?? "",
        //TODO pass in actual instruction...
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
        underlyingTokenMint: new PublicKey(baseVault?.underlying_mint_acct ?? 5)
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
      passThreshold: proposal.dao.pass_threshold_bps ?? 0,
      failMarket: new PublicKey(failMarket.market_acct),
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
      volume: passVolume + failVolume
    };
  }
  async fetchProposalCounts(daoSlug: string): Promise<ProposalCounts> {
    const { proposals } = await this.graphqlClient.query?.({
      proposals: {
        __args: {
          where: {
            dao: {
              dao_detail: {
                slug: {
                  _eq: daoSlug
                }
              }
            },
            proposal_details: {
              proposal_acct: { _is_null: false }
            }
          },
          order_by: [
            {
              created_at: "desc"
            }
          ]
        },
        proposal_acct: true,
        ended_at: true
      }
    });

    const liveLength = proposals.filter((p) =>
      dayjs(p.ended_at).isAfter(dayjs())
    ).length;
    const pastLen = proposals.length - liveLength;

    return {
      live: liveLength,
      past: pastLen
    };
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

  async withdraw(proposal: ProposalWithFullData) {
    return this.rpcProposalsClient.withdraw(proposal);
  }

  async createProposal(
    daoAggregate: DaoAggregate,
    version: ProgramVersionLabel,
    instructionParams: CreateProposalInstruction,
    marketParams: MarketParams,
    proposalInputs: ProposalInputs
  ): Promise<
    [Observable<TransactionProcessingUpdate>, ProposalOnChainFields] | undefined
  > {
    if (!this.rpcProposalsClient.transactionSender?.owner) return;

    try {
      const createProposalRes = await this.rpcProposalsClient.createProposal(
        daoAggregate,
        version,
        instructionParams,
        marketParams
      );
      if (!createProposalRes) return;

      const [txUpdates, proposalAccts] = createProposalRes;

      const propDetails: ProposalDetails = {
        ...proposalInputs,
        ...proposalAccts,
        proposerAcct: this.rpcProposalsClient.transactionSender.owner,
        slug: createSlug(proposalInputs.title)
      };

      txUpdates.subscribe({
        next: (update) => {
          if (update.status === "confirmed") {
            // save details to DB here
            const currentDao = daoAggregate.daos
              .filter((dao) => dao.protocol.deploymentVersion === version)
              .slice(-1)[0];

            this.saveProposalDetails(propDetails, currentDao, version);
          }
        }
      });

      return [txUpdates, proposalAccts];
    } catch (e) {
      console.error("error creating proposal:", e);
    }
  }

  async finalizeProposal(proposal: ProposalWithFullData) {
    return this.rpcProposalsClient.finalizeProposal(proposal);
  }

  // we should really probably change this column to a sequence so we don't have to manually fetch this OR we should just get rid of the column
  async getProposalIdAndEndSlot(): Promise<[number, number]> {
    const result = await this.graphqlClient.query({
      proposal_details: {
        __args: {
          order_by: [{ proposal_id: "desc" }],
          limit: 1
        },
        proposal: {
          dao: {
            slots_per_proposal: true
          }
        },
        proposal_id: true
      }
    });

    const latestProposal = result.proposal_details[0];
    const proposalId = latestProposal ? latestProposal.proposal_id + 1 : 0;
    const slotsPerProposal =
      latestProposal.proposal?.dao.slots_per_proposal ?? 0;

    return [proposalId, slotsPerProposal];
  }

  async saveProposalDetails(
    proposalDetails: ProposalDetails,
    dao: Dao,
    version: ProgramVersionLabel
  ) {
    const {
      proposalAcct,
      title,
      content,
      description,
      categories,
      slug,
      proposerAcct,
      baseCondVaultAcct,
      quoteCondVaultAcct,
      passMarketAcct,
      failMarketAcct
    } = proposalDetails;

    try {
      const [latestPropID, slotsPerProposal] =
        await this.getProposalIdAndEndSlot();

      const proposalOnChain = await this.rpcProposalsClient.fetchProposal(
        dao,
        proposalAcct
      );

      // Insert conditional vaults
      const conditionalVaultsResult = await this.graphqlClient.mutation({
        insert_conditional_vaults: {
          __args: {
            objects: [
              {
                cond_finalize_token_mint_acct:
                  proposalOnChain.baseVaultAccount.conditionalOnFinalizeTokenMint.toBase58(),
                cond_revert_token_mint_acct:
                  proposalOnChain.baseVaultAccount.conditionalOnRevertTokenMint.toBase58(),
                cond_vault_acct: baseCondVaultAcct.toBase58(),
                settlement_authority:
                  proposalOnChain.baseVaultAccount.settlementAuthority.toBase58(),
                status: proposalOnChain.state,
                underlying_mint_acct:
                  proposalOnChain.baseVaultAccount.underlyingTokenMint.toBase58(),
                underlying_token_acct:
                  proposalOnChain.baseVaultAccount.underlyingTokenAccount.toBase58()
              },
              {
                cond_finalize_token_mint_acct:
                  proposalOnChain.quoteVaultAccount.conditionalOnFinalizeTokenMint.toBase58(),
                cond_revert_token_mint_acct:
                  proposalOnChain.quoteVaultAccount.conditionalOnRevertTokenMint.toBase58(),
                cond_vault_acct: quoteCondVaultAcct.toBase58(),
                settlement_authority:
                  proposalOnChain.quoteVaultAccount.settlementAuthority.toBase58(),
                status: proposalOnChain.state,
                underlying_mint_acct:
                  proposalOnChain.quoteVaultAccount.underlyingTokenMint.toBase58(),
                underlying_token_acct:
                  proposalOnChain.quoteVaultAccount.underlyingTokenAccount.toBase58()
              }
            ]
          },
          returning: {
            cond_vault_acct: true // Fields you want to return after insertion
          }
        }
      });

      if (
        (conditionalVaultsResult.insert_conditional_vaults?.returning.length ??
          0) === 0
      )
        return;

      // Insert into proposals table
      const proposalsResult = await this.graphqlClient.mutation({
        insert_proposals_one: {
          __args: {
            object: {
              autocrat_version: parseFloat(version.split("V")[1]),
              dao_acct: dao.publicKey.toBase58(),
              proposal_acct: proposalAcct.toBase58(),
              proposal_num: proposalOnChain.account.number,
              proposer_acct: proposerAcct.toBase58(),
              status: "Pending",
              pass_market_acct: passMarketAcct.toBase58(),
              fail_market_acct: failMarketAcct.toBase58(),
              base_vault: baseCondVaultAcct.toBase58(),
              quote_vault: quoteCondVaultAcct.toBase58(),
              created_at: new Date(),
              updated_at: new Date(),
              initial_slot: proposalOnChain.account.slotEnqueued.toNumber(),
              end_slot: proposalOnChain.account.slotEnqueued
                .add(new BN(slotsPerProposal))
                .toNumber()
            }
          },
          proposal_acct: true // Fields you want to return after insertion
        }
      });

      if (!proposalsResult.insert_proposals_one?.proposal_acct) return;

      const result = await this.graphqlClient.mutation({
        insert_proposal_details_one: {
          __args: {
            object: {
              proposal_id: latestPropID,
              proposal_acct:
                proposalsResult.insert_proposals_one?.proposal_acct,
              title: title,
              description: description,
              categories: categories,
              content: content,
              slug: slug,
              proposer_acct: proposerAcct.toBase58(),
              base_cond_vault_acct: baseCondVaultAcct.toBase58(),
              quote_cond_vault_acct: quoteCondVaultAcct.toBase58(),
              pass_market_acct: passMarketAcct.toBase58(),
              fail_market_acct: failMarketAcct.toBase58()
            }
          },
          proposal_acct: true // Fields you want to return after insertion
        }
      });

      console.log("Proposal details saved:", result);
    } catch (error) {
      console.error("Error saving proposal details:", error);
    }
  }
  async updateProposalAccounts(accounts: ProposalAccounts) {
    this.rpcProposalsClient.updateProposalAccounts(accounts);
  }

  //TODO: we should probably move this and comments to a separate client class (i.e. SocialClient or something)
  async addReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string,
    commentId: string | null
  ) {
    // TODO implement wallet login logic properly...
    if (!authId) return;
    try {
      const result = await this.graphqlClient.mutation({
        update_reactions: {
          __args: {
            where: {
              proposal_acct: { _eq: proposalAcct },
              reactor_acct: { _eq: pubKey }
            },
            _set: {
              reaction,
              updated_at: new Date()
            }
          },
          returning: {
            reaction: true // Fields you want to return after insertion
          }
        }
      });

      if (result.update_reactions?.returning.length === 0) {
        // insert one since update found nothing
        const result = await this.graphqlClient.mutation({
          insert_reactions: {
            __args: {
              objects: [
                {
                  reaction,
                  proposal_acct: proposalAcct,
                  comment_id: commentId,
                  reactor_acct: pubKey,
                  updated_at: new Date()
                }
              ]
            },
            returning: {
              reaction: true, // Fields you want to return after insertion
              reactor_acct: true,
              proposal_acct: true,
              comment_id: true
            }
          }
        });
        return result;
      }

      return result;
    } catch (error) {
      console.error("Error inserting reaction:", error);
      throw error;
    }
  }

  async removeReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string
  ) {
    console.log("removing reaction bbbyy");
    // TODO implement wallet login logic properly...
    if (!authId) return;
    try {
      // TODO we should not be deleting a reaction
      // we should more likely either update the existing reaction
      const result = await this.graphqlClient.mutation({
        delete_reactions_by_pk: {
          __args: {
            proposal_acct: proposalAcct,
            reaction: reaction,
            reactor_acct: pubKey
          },
          reaction: true,
          reactor_acct: true,
          proposal_acct: true
        }
      });

      return result;
    } catch (error) {
      console.error("Error deleting reaction:", error);
      throw error;
    }
  }

  async mergeConditionalTokensForUnderlyingTokens(
    amount: BN,
    proposal: ProposalWithFullData,
    underlyingToken: "base" | "quote"
  ) {
    return this.rpcProposalsClient.mergeConditionalTokensForUnderlyingTokens(
      amount,
      proposal,
      underlyingToken
    );
  }

  public async reclaimFromManyProposals(
    proposalBalances: (BalanceLockedInProposal & {
      proposal: ProposalWithFullData;
    })[]
  ) {
    return this.rpcProposalsClient.reclaimFromManyProposals(proposalBalances);
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
