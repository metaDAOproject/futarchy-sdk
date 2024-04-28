import { PublicKey } from "@solana/web3.js";
import {
  Dao,
  DaoAggregate,
  TokenProps,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
} from "@/types";
import { FutarchyBalancesClient } from "@/client";
import { Proposal } from "@/types/proposals";
import { FutarchyRPCBalancesClient } from "../rpc";

export class FutarchyIndexerBalancesClient implements FutarchyBalancesClient {
  private rpcBalancesClient: FutarchyRPCBalancesClient;
  constructor(rpcBalancesClient: FutarchyRPCBalancesClient) {
    this.rpcBalancesClient = rpcBalancesClient;
  }
  async fetchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    return this.rpcBalancesClient.fetchMainTokenWalletBalances(
      dao,
      ownerWallet
    );
  }
  async fetchAllConditionalTokenWalletBalances(
    ownerWallet: PublicKey,
    baseToken: TokenProps,
    quoteToken: TokenProps,
    proposalsWithVaults: Proposal[]
  ): Promise<TokenWithBalanceWithProposal[]> {
    return this.rpcBalancesClient.fetchAllConditionalTokenWalletBalances(
      ownerWallet,
      baseToken,
      quoteToken,
      proposalsWithVaults
    );
  }
}
