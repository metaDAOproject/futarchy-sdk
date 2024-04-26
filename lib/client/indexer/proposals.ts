import { PublicKey } from "@solana/web3.js";
import { VaultAccount, Proposal, DaoAggregate } from "@/types";
import { FutarchyProposalsClient } from "@/client";
import { FutarchyRPCProposalsClient } from "@/client/rpc";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  private rpcProposalsClient: FutarchyRPCProposalsClient;
  constructor(rpcProposalsClient: FutarchyRPCProposalsClient) {
    this.rpcProposalsClient = rpcProposalsClient;
  }
  async fetchProposals(dao: DaoAggregate): Promise<Proposal[]> {
    return [];
  }
  async deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccount
  ): Promise<string[] | undefined> {
    return;
  }

  async withdraw(proposal: Proposal): Promise<string[] | undefined> {
    return [];
  }
}
