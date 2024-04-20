import { DaoAccount, DaoWithTokens } from "@/types";
import { FutarchyDaoClient } from "@/client";

export class FutarchyIndexerDaoClient implements FutarchyDaoClient {
  constructor() {}
  async fetchAllDaos(): Promise<DaoWithTokens[]> {
    return [];
  }
  async fetchDao(daoAddress: string): Promise<DaoWithTokens | undefined> {
    return undefined;
  }
  private async fetchDaoAccount(
    daoAddress: string
  ): Promise<DaoAccount | undefined> {
    return;
  }

  private async fetchDaoWithTokensFromState(
    daoAccount: DaoAccount
  ): Promise<DaoWithTokens | undefined> {
    return;
  }
}
