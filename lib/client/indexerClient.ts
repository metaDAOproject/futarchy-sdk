import { AutocratProgram, Dao, ProgramVersion } from "../types";
import { FutarchyClient } from "./client";

export class FutarchyIndexerClient implements FutarchyClient {
  async fetchDao(daoAddress: string): Promise<Dao | undefined> {
    //TODO: use the indexer
    return;
  }
}
