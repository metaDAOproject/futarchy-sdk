import { Dao } from "../types";

export interface MetaDAOClient {
  fetchDao(daoAddress: string): Promise<Dao | undefined>;
}
