import { PublicKey } from "@solana/web3.js";
import { Dao, TokenWithBalance } from "../types";
import { Proposal, ProposalWithVaults } from "../types/proposals";

export interface FutarchyClient {
  fetchAllDaos(): Promise<Dao[]>;
  fetchDao(daoAddress: string): Promise<Dao | undefined>;
  fetchMainTokenWalletBalances(
    dao: Dao,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]>;
  fetchProposals(dao: Dao): Promise<ProposalWithVaults[]>;
  fetchAllConditionalTokenWalletBalances(
    dao: Dao,
    ownerWallet: PublicKey,
    proposals: ProposalWithVaults[]
  ): Promise<TokenWithBalance[]>;
}
