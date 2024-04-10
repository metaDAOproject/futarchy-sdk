import { PublicKey } from "@solana/web3.js";
import {
  DaoAccount,
  DaoWithTokens,
  TokenProps,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
} from "../types";
import { Proposal, ProposalWithVaults } from "../types/proposals";
import { Market, Order } from "../types/markets";

export interface FutarchyClient {
  daos: FutarchyDaoClient;
  proposals: FutarchyProposalsClient;
  balances: FutarchyBalancesClient;
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

export interface FutarchyMarketsClient {
  fetchConditionalMarketsFromProposal(
    proposal: Proposal,
    baseToken: TokenProps,
    quoteToken: TokenProps
  ): Promise<[Market, Market] | undefined>;
  filterUserOpenOrdersFromProposalMarkets(
    passMarket: Market,
    failMarket: Market,
    owner: PublicKey
  ): Promise<Order[]>;
}
