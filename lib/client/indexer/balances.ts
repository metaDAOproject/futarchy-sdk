import { PublicKey } from "@solana/web3.js";
import {
  Dao,
  DaoAggregate,
  TokenProps,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
  TokenWithPDA,
} from "@/types";
import { FutarchyBalancesClient } from "@/client";
import { Proposal } from "@/types/proposals";
import { FutarchyRPCBalancesClient } from "../rpc";
import { Observable } from "rxjs";

export class FutarchyIndexerBalancesClient implements FutarchyBalancesClient {
  private rpcBalancesClient: FutarchyRPCBalancesClient;
  constructor(rpcBalancesClient: FutarchyRPCBalancesClient) {
    this.rpcBalancesClient = rpcBalancesClient;
  }

  getDaoAggregateMainTokensByMint(
    daoAggregate: DaoAggregate,
    owner: PublicKey
  ): Map<string, TokenWithPDA> {
    return this.rpcBalancesClient.getDaoAggregateMainTokensByMint(
      daoAggregate,
      owner
    );
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

  watchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Observable<TokenWithBalance>[] {
    return this.rpcBalancesClient.watchMainTokenWalletBalances(
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
  watchTokenBalance(tokenWithPDA: TokenWithPDA): Observable<TokenWithBalance> {
    return this.rpcBalancesClient.watchTokenBalance(tokenWithPDA);
  }
}
