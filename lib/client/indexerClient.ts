import { PublicKey } from "@solana/web3.js";
import { Dao, TokenWithBalance } from "../types";
import { FutarchyClient } from "./client";
import { ProposalWithVaults } from "../types/proposals";

export class FutarchyIndexerClient implements FutarchyClient {
  //TODO: implement all this
  async fetchAllDaos(): Promise<Dao[]> {
    return [];
  }
  async fetchDao(daoAddress: string): Promise<Dao | undefined> {
    return;
  }
  async fetchMainTokenWalletBalances(
    dao: Dao,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    return [];
  }

  async fetchProposals(dao: Dao): Promise<ProposalWithVaults[]> {
    return [];
  }
  async fetchAllConditionalTokenWalletBalances(
    dao: Dao,
    ownerWallet: PublicKey,
    proposals: ProposalWithVaults[]
  ): Promise<TokenWithBalance[]> {
    return [];
  }
}
