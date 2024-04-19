import { PublicKey } from "@solana/web3.js";
import { DaoAccount } from "../../types";
import { ProposalWithVaults } from "../../types/proposals";
import { FutarchyProposalsClient } from "../client";
import { VaultAccount } from "../../types/";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  async fetchProposals(dao: DaoAccount): Promise<ProposalWithVaults[]> {
    return [];
  }
  async deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccount
  ): Promise<string[] | undefined> {
    return;
  }

  async withdraw(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccount
  ): Promise<string[] | undefined> {
    return [];
  }
}
