import { PublicKey } from "@solana/web3.js";
import { DaoAccount, DaoWithTokens, TokenWithBalance } from "../types";
import { FutarchyClient } from "./client";
import { ProposalWithVaults } from "../types/proposals";
import { FutarchyRPClient } from "./rpcClient";

/**
 * This class is not yet implemented. Use the RPC client for now instead
 */
export class FutarchyIndexerClient implements FutarchyClient {
  private rpcClientFallback: FutarchyRPClient;
  //TODO: implement all this
  async fetchAllDaos(): Promise<DaoWithTokens[]> {
    return [];
  }
  async fetchDao(daoAddress: string): Promise<DaoWithTokens | undefined> {
    return;
  }
  async fetchMainTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    return [];
  }

  async fetchProposals(dao: DaoAccount): Promise<ProposalWithVaults[]> {
    return [];
  }
  async fetchAllConditionalTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey,
    proposals: ProposalWithVaults[]
  ): Promise<TokenWithBalance[]> {
    return [];
  }
}
