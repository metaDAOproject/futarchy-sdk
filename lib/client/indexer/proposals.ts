import { Keypair, PublicKey } from "@solana/web3.js";
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
  ProposalRanking,
  ProposalRequestConfig,
  ProposalDaoConfiguration,
  ProposalInstruction,
  VaultAccountWithKey,
  VaultAccount
} from "@/types";
import { FutarchyProposalsClient } from "@/client";
import { FutarchyRPCProposalsClient } from "@/client/rpc";
import { Client as IndexerGraphQLClient } from "./__generated__";
import { ClientOptions } from "./__generated__/runtime";
import {
  CreateProposalInstruction,
  ProposalOnChainFields,
  MarketParams,
  ProposalDetails,
  ProposalInputs
} from "@/types/createProp";
import BN from "bn.js";
import { PriceMath } from "@metadaoproject/futarchy";
import { Observable } from "rxjs";
import { Client as GQLWebSocketClient } from "graphql-ws";
import dayjs from "dayjs";
import { createSlug } from "@/utils";
import { SUPPORTED_EMOJIS } from "@/constants";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  private protocolMap: Map<string, FutarchyProtocol>;
  private rpcProposalsClient: FutarchyRPCProposalsClient;
  private getGQLClient: (options?: ClientOptions) => IndexerGraphQLClient;
  private graphqlWSClient: GQLWebSocketClient;

  constructor(
    rpcProposalsClient: FutarchyRPCProposalsClient,
    getGQLClient: (options?: ClientOptions) => IndexerGraphQLClient,
    graphqlWSClient: GQLWebSocketClient,
    protocolMap: Map<string, FutarchyProtocol>
  ) {
    this.rpcProposalsClient = rpcProposalsClient;
    this.getGQLClient = getGQLClient;
    this.graphqlWSClient = graphqlWSClient;
    this.protocolMap = protocolMap;
  }
  async fetchProposals(
    dao: DaoAggregate,
    config: ProposalRequestConfig = {
      offset: 0,
      pageSize: 500,
      orderBy: {
        created_at: "desc"
      }
    }
  ): Promise<Proposal[]> {
    const { offset, orderBy, pageSize } = config;
    const { proposals } = await this.getGQLClient({}).query?.({
      proposals: {
        __args: {
          where: {
            dao: { dao_detail: { slug: { _eq: dao.slug } } }
          },
          offset,
          limit: pageSize,
          order_by: [orderBy]
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
            fail: {},
            pass: {}
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
      const { proposals } = await this.getGQLClient({}).query?.({
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
  ): Promise<(ProposalWithFullData & ProposalDaoConfiguration) | undefined> {
    const { proposals } = await this.getGQLClient({}).query?.({
      proposals: {
        __args: {
          where: { proposal_acct: { _eq: proposalAcct.toBase58() } },
          order_by: [
            {
              created_at: "desc"
            }
          ],
          limit: 1
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
          orders: {
            quote_price: true,
            filled_base_amount: true
          }
        },
        proposal_details: {
          title: true,
          slug: true,
          description: true,
          categories: true,
          content: true
        },
        pass_threshold_bps: true,
        duration_in_slots: true,
        min_base_futarchic_liquidity: true,
        min_quote_futarchic_liquidity: true,
        twap_initial_observation: true,
        twap_max_observation_change_per_update: true
      }
    });
    if (!proposals[0]) return undefined;

    const proposal = proposals[0];

    const rpcProposal =
      await this.rpcProposalsClient.autocratClient.getProposal(proposalAcct);
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

    const passVolume =
      passMarket?.orders?.reduce(
        (prev, curr) =>
          prev +
          PriceMath.getHumanAmount(
            new BN(curr.filled_base_amount),
            proposal.dao.tokenByBaseAcct?.decimals ?? 6
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
            proposal.dao.tokenByBaseAcct?.decimals ?? 6
          ) *
            curr.quote_price,
        0
      ) ?? 0;
    if (!relatedProtocol || !passMarket || !failMarket) return undefined;
    return {
      account: {
        baseVault: new PublicKey(proposal.base_vault ?? 5),
        quoteVault: new PublicKey(proposal.quote_vault ?? 5),
        descriptionUrl: proposal.description_url ?? "",
        //TODO pass in actual instruction...
        instruction: rpcProposal.instruction,
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
      passThreshold: 300,
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
        fail: {},
        pass: {}
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
      volume: passVolume + failVolume,
      durationInSlots: proposal.duration_in_slots,
      minBaseFutarchicLiquidity: proposal.min_base_futarchic_liquidity,
      minQuoteFutarchicLiquidity: proposal.min_quote_futarchic_liquidity,
      passThresholdBps: proposal.pass_threshold_bps,
      twapInitialObservation: proposal.twap_initial_observation,
      twapMaxObservationChangePerUpdate:
        proposal.twap_max_observation_change_per_update
    };
  }
  async fetchProposalCounts(daoSlug: string): Promise<ProposalCounts> {
    const { proposals } = await this.getGQLClient({}).query?.({
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
    proposalInputs: ProposalInputs,
    authId: string
  ): Promise<
    [Observable<TransactionProcessingUpdate>, ProposalOnChainFields] | undefined
  > {
    if (!this.rpcProposalsClient.transactionSender?.owner) return;

    try {
      const createProposalRes = await this.rpcProposalsClient.createProposal(
        daoAggregate,
        version,
        instructionParams,
        marketParams,
        proposalInputs
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

            this.saveProposalDetails(propDetails, currentDao, version, authId);
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
    const result = await this.getGQLClient({}).query({
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
    version: ProgramVersionLabel,
    authId: string
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
      const conditionalVaultsResult = await this.getGQLClient({
        headers: {
          Authorization: `Bearer ${authId}`
        }
      }).mutation({
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
      const proposalsResult = await this.getGQLClient({
        headers: {
          Authorization: `Bearer ${authId}`
        }
      }).mutation({
        insert_proposals_one: {
          __args: {
            object: {
              autocrat_version: parseFloat(version.split("V")[1]),
              description_url: proposalOnChain.account.descriptionUrl,
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
                .toNumber(),
              pass_threshold_bps: dao.daoAccount.passThresholdBps,
              duration_in_slots: dao.daoAccount.slotsPerProposal?.toNumber(),
              min_base_futarchic_liquidity:
                dao.daoAccount.minBaseFutarchicLiquidity?.toNumber(),
              min_quote_futarchic_liquidity:
                dao.daoAccount.minQuoteFutarchicLiquidity?.toNumber(),
              twap_initial_observation:
                dao.daoAccount.twapInitialObservation?.toNumber(),
              twap_max_observation_change_per_update:
                dao.daoAccount.twapMaxObservationChangePerUpdate?.toNumber()
            }
          },
          proposal_acct: true // Fields you want to return after insertion
        }
      });

      if (!proposalsResult.insert_proposals_one?.proposal_acct) return;

      await this.getGQLClient({
        headers: {
          Authorization: `Bearer ${authId}`
        }
      }).mutation({
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
    } catch (error) {
      console.error("Error saving proposal details:", error);
    }
  }
  async updateProposalAccounts(accounts: ProposalAccounts) {
    this.rpcProposalsClient.updateProposalAccounts(accounts);
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
}
