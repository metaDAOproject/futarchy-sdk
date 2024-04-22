import { PublicKey } from "@solana/web3.js";
import {
  DaoAccount,
  VaultAccount,
  ProposalWithVaults,
  DaoAggregate,
} from "@/types";
import { FutarchyProposalsClient } from "@/client";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  async fetchProposals(dao: DaoAggregate): Promise<ProposalWithVaults[]> {
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
