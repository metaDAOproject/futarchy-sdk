import { PublicKey } from "@solana/web3.js";
import {
  DaoAccount,
  DaoWithTokens,
  TokenProps,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
} from "../types";
import { Proposal, ProposalWithVaults } from "../types/proposals";
import { ConditionalMarkets, Market, Order } from "../types/markets";

export interface FutarchyClient {
  daos: FutarchyDaoClient;
  proposals: FutarchyProposalsClient;
  balances: FutarchyBalancesClient;
  markets: FutarchyMarketsClient;
}

export interface FutarchyDaoClient {
  fetchAllDaos(): Promise<DaoWithTokens[]>;
  fetchDao(daoAddress: string): Promise<DaoWithTokens | undefined>;
}

export interface FutarchyProposalsClient {
  fetchProposals(dao: DaoAccount): Promise<ProposalWithVaults[]>;
}

export interface FutarchyBalancesClient {
  fetchMainTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]>;
  fetchAllConditionalTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey,
    proposalsWithVaults: ProposalWithVaults[]
  ): Promise<TokenWithBalanceWithProposal[]>;
}

export class TestClass {
  constructor() {
    console.log("hey you initialized me");
  }
}

export interface FutarchyMarketsClient<
  M extends Market = Market,
  O extends Order = Order
> {
  fetchConditionalMarketsFromProposal(
    proposal: Proposal,
    baseToken: TokenProps,
    quoteToken: TokenProps
  ): Promise<ConditionalMarkets<M> | undefined>;
  filterUserOpenOrdersFromProposalMarkets(
    passMarket: M,
    failMarket: M,
    owner: PublicKey
  ): Promise<O[]>;
  cancelUserOrder(
    market: M,
    order: O,
    proposal: ProposalWithVaults,
    baseMint: PublicKey,
    quoteMint: PublicKey
  ): Promise<string[]>;
}
