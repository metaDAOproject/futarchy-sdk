import { PublicKey } from "@solana/web3.js";
import { DaoAccount, DaoWithTokens, TokenWithBalance } from "../../types";
import { FutarchyClient } from "../client";
import { ProposalWithVaults } from "../../types/proposals";
import { FutarchyRPCClient } from "../rpc/rpcClient";
import { FutarchyIndexerDaoClient } from "./dao";
import { FutarchyIndexerProposalsClient } from "./proposals";
import { FutarchyIndexerBalancesClient } from "./balances";

/**
 * This class is not yet implemented. Use the RPC client for now instead
 */
export class FutarchyIndexerClient implements FutarchyClient {
  public daos: FutarchyIndexerDaoClient;
  public proposals: FutarchyIndexerProposalsClient;
  public balances: FutarchyIndexerBalancesClient;
  private rpcClientFallback: FutarchyRPCClient;
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
