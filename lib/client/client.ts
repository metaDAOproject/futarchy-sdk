import { PublicKey } from "@solana/web3.js";
import { DaoAccount, DaoWithTokens, TokenWithBalance } from "../types";
import { ProposalWithVaults } from "../types/proposals";

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
}
