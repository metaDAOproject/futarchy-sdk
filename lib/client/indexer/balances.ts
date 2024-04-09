import {
  DaoWithTokens,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
} from "../../types";
import { FutarchyBalancesClient } from "../client";
import { PublicKey } from "@solana/web3.js";
import { ProposalWithVaults } from "../../types/proposals";
import { Provider } from "@coral-xyz/anchor";

export class FutarchyIndexerBalancesClient implements FutarchyBalancesClient {
  private rpcProvider: Provider;

  constructor(rpcProvider: Provider) {
    this.rpcProvider = rpcProvider;
  }

  async fetchMainTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    return [];
  }
  async fetchAllConditionalTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey,
    proposalsWithVaults: ProposalWithVaults[]
  ): Promise<TokenWithBalanceWithProposal[]> {
    return [];
  }
}
