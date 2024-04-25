import { PublicKey } from "@solana/web3.js";
import {
  Dao,
  DaoAggregate,
  TokenProps,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
} from "@/types";
import { FutarchyBalancesClient } from "@/client";
import { ProposalWithVaults } from "@/types/proposals";

export class FutarchyIndexerBalancesClient implements FutarchyBalancesClient {
  async fetchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    return [];
  }
  async fetchAllConditionalTokenWalletBalances(
    ownerWallet: PublicKey,
    baseToken: TokenProps,
    quoteToken: TokenProps,
    proposalsWithVaults: ProposalWithVaults[]
  ): Promise<TokenWithBalanceWithProposal[]> {
    return [];
  }
}
