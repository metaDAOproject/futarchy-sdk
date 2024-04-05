import { Dao } from "../types";

export interface FutarchyClient {
  fetchDao(daoAddress: string): Promise<Dao | undefined>;
}
