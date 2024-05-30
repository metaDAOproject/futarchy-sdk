import { PublicKey } from "@solana/web3.js";
import {
  Dao,
  DaoAggregate,
  TokenProps,
  TokenWithBalance,
  TokenWithBalancePDAAndProposal,
  TokenWithPDA
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

  /**
   * The owner can be null even though we are trying to return PDAs. This is because we use this function to populate parts of the UI that
   * we want to still work when a wallet is disconnected.
   * @param daoAggregate DaoAggregate
   * @param owner PublicKey | null
   * @returns
   */
  getDaoAggregateMainTokensByMint(
    daoAggregate: DaoAggregate,
    owner: PublicKey | null
  ): Map<string, Pick<TokenWithPDA, "token"> & { pda: PublicKey | null }> {
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
  getConditionalTokensFromProposals(
    proposals: Proposal[],
    owner: PublicKey,
    quoteToken: TokenProps,
    baseToken: TokenProps
  ): (TokenWithPDA & { proposal: PublicKey })[] {
    return this.rpcBalancesClient.getConditionalTokensFromProposals(
      proposals,
      owner,
      quoteToken,
      baseToken
    );
  }
  async fetchAllConditionalTokenWalletBalances(
    ownerWallet: PublicKey | null,
    baseToken: TokenProps,
    quoteToken: TokenProps,
    proposalsWithVaults: Proposal[],
    passTokenUrl?: string,
    failtokenUrl?: string
  ): Promise<TokenWithBalancePDAAndProposal[]> {
    return this.rpcBalancesClient.fetchAllConditionalTokenWalletBalances(
      ownerWallet,
      baseToken,
      quoteToken,
      proposalsWithVaults,
      passTokenUrl,
      failtokenUrl
    );
  }

  async fetchTokenBalance(pda: PublicKey | null, token: TokenProps) {
    return this.rpcBalancesClient.fetchTokenBalance(pda, token);
  }

  watchTokenBalance(tokenWithPDA: TokenWithPDA): Observable<TokenWithBalance> {
    return this.rpcBalancesClient.watchTokenBalance(tokenWithPDA);
  }
}
