import { PublicKey } from "@solana/web3.js";
import {
  VaultAccount,
  Proposal,
  DaoAggregate,
  VaultAccountWithProtocol,
} from "@/types";
import { FutarchyProposalsClient } from "@/client";
import { FutarchyRPCProposalsClient } from "@/client/rpc";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  private rpcProposalsClient: FutarchyRPCProposalsClient;
  constructor(rpcProposalsClient: FutarchyRPCProposalsClient) {
    this.rpcProposalsClient = rpcProposalsClient;
  }
  async fetchProposals(dao: DaoAggregate): Promise<Proposal[]> {
    return this.rpcProposalsClient.fetchProposals(dao);
  }
  async deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ): Promise<string[] | undefined> {
    return this.rpcProposalsClient.deposit(
      amount,
      vaultAccountAddress,
      vaultAccount
    );
  }

  async withdraw(proposal: Proposal): Promise<string[] | undefined> {
    return this.rpcProposalsClient.withdraw(proposal);
  }
}
