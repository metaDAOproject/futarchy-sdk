import { DaoAccount } from "../../types";
import { ProposalWithVaults } from "../../types/proposals";
import { FutarchyProposalsClient } from "../client";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  async fetchProposals(dao: DaoAccount): Promise<ProposalWithVaults[]> {
    return [];
  }
}
