import { AutocratProgram, Dao, ProgramVersion } from "../types";
import { MetaDAOClient } from "./client";

export class MetaDAOIndexerClient implements MetaDAOClient {
  async fetchDao(daoAddress: string): Promise<Dao | undefined> {
    //TODO: use the indexer
    return;
  }
}
