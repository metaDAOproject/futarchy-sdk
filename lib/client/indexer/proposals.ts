import { PublicKey } from "@solana/web3.js";
import { DaoAccount, VaultAccount, ProposalWithVaults } from "@/types";
import { FutarchyProposalsClient } from "@/client";

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
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccount
  ): Promise<string[] | undefined> {
    return [];
  }
}
