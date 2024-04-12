import { FutarchyClient } from "../client";
import { FutarchyIndexerDaoClient } from "./dao";
import { FutarchyIndexerProposalsClient } from "./proposals";
import { FutarchyIndexerBalancesClient } from "./balances";
import { FutarchyIndexerMarketsClient } from "./markets";

/**
 * This class is not yet implemented. Use the RPC client for now instead
 */
export class FutarchyIndexerClient implements FutarchyClient {
  public daos: FutarchyIndexerDaoClient;
  public proposals: FutarchyIndexerProposalsClient;
  public balances: FutarchyIndexerBalancesClient;
  public markets: FutarchyIndexerMarketsClient;

  constructor() {
    //TODO: implement all this
    this.daos = new FutarchyIndexerDaoClient();
    this.proposals = new FutarchyIndexerProposalsClient();
    this.balances = new FutarchyIndexerBalancesClient();
    this.markets = new FutarchyIndexerMarketsClient();
  }
}
