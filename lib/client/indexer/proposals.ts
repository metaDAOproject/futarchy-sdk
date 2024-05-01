import { PublicKey } from "@solana/web3.js";
import {
  Proposal,
  DaoAggregate,
  VaultAccountWithProtocol,
  FutarchyProtocol,
  ProposalState,
  MarketType,
} from "@/types";
import { FutarchyProposalsClient } from "@/client";
import { FutarchyRPCProposalsClient } from "@/client/rpc";
import { Client as IndexerGraphQLClient } from "./__generated__";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  private protocolMap: Map<string, FutarchyProtocol>;
  private rpcProposalsClient: FutarchyRPCProposalsClient;
  private graphqlClient: IndexerGraphQLClient;
  constructor(
    rpcProposalsClient: FutarchyRPCProposalsClient,
    graphqlClient: IndexerGraphQLClient,
    protocolMap: Map<string, FutarchyProtocol>
  ) {
    this.rpcProposalsClient = rpcProposalsClient;
    this.graphqlClient = graphqlClient;
    this.protocolMap = protocolMap;
  }
  async fetchProposals(dao: DaoAggregate): Promise<Proposal[]> {
    const { dao_details } = await this.graphqlClient.query?.({
      dao_details: {
        __args: {
          where: {
            slug: { _eq: dao.slug },
          },
          limit: 1,
        },
        daos: {
          dao_acct: true,
          treasury_acct: true,
          tokenByBaseAcct: {
            mint_acct: true,
          },
          tokenByQuoteAcct: {
            mint_acct: true,
          },
          program: {
            program_acct: true,
            version: true,
            program_name: true,
          },
          proposals: {
            proposal_num: true,
            proposal_acct: true,
            proposer_acct: true,
            reactions: {
              reaction: true,
            },
            conditional_vault: {
              underlying_mint_acct: true,
              underlying_token_acct: true,
              cond_finalize_token_mint_acct: true,
              cond_revert_token_mint_acct: true,
            },
            conditionalVaultByQuoteVault: {
              underlying_mint_acct: true,
              underlying_token_acct: true,
              cond_finalize_token_mint_acct: true,
              cond_revert_token_mint_acct: true,
            },
            status: true,
            initial_slot: true,
            description_url: true,
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
                token_amount: true,
              },
            },
            proposal_details: {
              title: true,
              slug: true,
              description: true,
              categories: true,
              content: true,
            },
          },
        },
      },
    });
    if (!dao_details[0]) return [];
    const proposals = await Promise.all(
      dao_details.map(
        async (dd) =>
          await Promise.all(
            dd.daos.map(async (d) => {
              const relatedProtocol = this.protocolMap.get(
                d.program.program_acct
              );
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
                  if (!proposalDetails || !passMarket || !failMarket) return;
                  return {
                    account: {
                      baseVault: new PublicKey(p.base_vault ?? 5),
                      quoteVault: new PublicKey(p.quote_vault ?? 5),
                      descriptionUrl: p.description_url ?? "",
                      //TODO pass in actual instruction...
                      instruction: {} as any,
                      number: p.proposal_num,
                      openbookFailMarket: new PublicKey(
                        p.fail_market_acct ?? 5
                      ),
                      openbookPassMarket: new PublicKey(
                        p.pass_market_acct ?? 5
                      ),
                      openbookTwapFailMarket: new PublicKey(
                        p.pricing_model_fail_acct ?? 5
                      ),
                      openbookTwapPassMarket: new PublicKey(
                        p.pricing_model_pass_acct ?? 5
                      ),
                      proposer: new PublicKey(p.proposer_acct),
                      slotEnqueued: p.initial_slot,
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
                      ),
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
                      ),
                    },
                    passMarket: new PublicKey(passMarket.market_acct),
                    failMarket: new PublicKey(failMarket.market_acct),
                    content: proposalDetails.content ?? "",
                    description: proposalDetails.description ?? "",
                    // both markets should have the same type... but maybe this could be cleaned up
                    marketType: p.markets[0].market_type as MarketType,
                    // TODO figure this out by slot enqueued maybe
                    creationDate: p.initial_slot,
                    dao: {
                      publicKey: new PublicKey(d.dao_acct),
                      daoAccount: {
                        proposalCount: d.proposals.length,
                        // TODO these null conditionals will create public keys that don't make sense
                        treasury: new PublicKey(d.treasury_acct ?? 5),
                        // TODO these fields from the DB should not be nullable imo
                        usdcMint: new PublicKey(
                          d.tokenByQuoteAcct?.mint_acct ?? 5
                        ),
                        tokenMint: d.tokenByBaseAcct
                          ? new PublicKey(d.tokenByBaseAcct.mint_acct)
                          : undefined,
                      },
                    },
                    // TODO figure this out by slot enqueued maybe
                    finalizationDate: new Date(new Date().getDate() + 20),
                    participants: [],
                    // TOKEN amount on twap is probably volume
                    prices: {
                      fail: {
                        // TODO: need to pull this data for twaps
                        spot: 0,
                      },
                      pass: {
                        // TODO: need to pull this data for twaps as well
                        spot: 0,
                      },
                    },
                    proposer: {
                      publicKey: p.proposer_acct,
                    },
                    publicKey: new PublicKey(p.proposal_acct),
                    state: p.status as ProposalState,
                    reactions: p.reactions.map((r) => r.reaction),
                    protocol: relatedProtocol,
                    // TODO we need our beatufiul tags
                    tags: [],
                    title: proposalDetails.title ?? "",
                    // TODO we need to pump up the volume
                    volume: 0,
                  };
                });
              }
            })
          )
      )
    );
    return proposals
      .flat()
      .flat()
      .filter((p): p is Proposal => !!p);
  }
  async deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ): Promise<string[] | undefined> {
    return this.rpcProposalsClient.deposit(
      amount,
      vaultAccountAddress,
      vaultAccount
    );
  }

  async withdraw(proposal: Proposal): Promise<string[] | undefined> {
    return this.rpcProposalsClient.withdraw(proposal);
  }
}
