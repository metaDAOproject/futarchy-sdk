import { PublicKey } from "@solana/web3.js";
import { DaoAccount, DaoWithTokens, TokenWithBalance } from "../types";
import { Proposal, ProposalWithVaults } from "../types/proposals";

export interface FutarchyClient {
  fetchAllDaos(): Promise<DaoWithTokens[]>;
  fetchDao(daoAddress: string): Promise<DaoWithTokens | undefined>;
  fetchMainTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]>;
  fetchProposals(dao: DaoAccount): Promise<ProposalWithVaults[]>;
  fetchAllConditionalTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey,
    proposals: ProposalWithVaults[]
  ): Promise<TokenWithBalance[]>;
}
