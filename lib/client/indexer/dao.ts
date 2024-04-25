import { Dao, DaoAggregate } from "@/types";
import { FutarchyDaoClient } from "@/client";

export class FutarchyIndexerDaoClient implements FutarchyDaoClient {
  constructor() {}
  async fetchAllDaos(): Promise<DaoAggregate[]> {
    return [];
  }
  async fetchDao(daoAddress: string): Promise<Dao | undefined> {
    return undefined;
  }
}
