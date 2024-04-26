import { FutarchyClient, FutarchyRPCClient } from "@/client";
import { FutarchyIndexerDaoClient } from "./dao";
import { FutarchyIndexerProposalsClient } from "./proposals";
import { FutarchyIndexerBalancesClient } from "./balances";
import { FutarchyIndexerMarketsClient } from "./markets";
import { createClient } from "./graphql";
import { getFutarchyProtocols } from "@/utils";
import { FutarchyProtocol } from "@/types";

/**
 * This class is not yet implemented. Use the RPC client for now instead
 */
export class FutarchyIndexerClient implements FutarchyClient {
  public daos: FutarchyIndexerDaoClient;
  public proposals: FutarchyIndexerProposalsClient;
  public balances: FutarchyIndexerBalancesClient;
  public markets: FutarchyIndexerMarketsClient;
  private protocolMap: Map<string, FutarchyProtocol>;

  constructor(
    rpcClient: FutarchyRPCClient,
    indexerURL: string,
    indexerApiKey: string
  ) {
    if (indexerURL === "" || indexerApiKey === "")
      throw "missing url or api key for indexer client";

    const options = {
      url: indexerURL,
      headers: {
        // TODO this admin secret in the request... should not be deployed to staging probably
        "x-hasura-admin-secret": indexerApiKey,
        // TODO should we add user wallet address here for adding querying user-specific data?
      },
    };
    const graphqlClient = createClient(options);

    this.protocolMap = rpcClient.futarchyProtocols.reduce((prev, curr) => {
      prev.set(curr.autocrat.programId.toString(), curr);
      return prev;
    }, new Map<string, FutarchyProtocol>());

    this.daos = new FutarchyIndexerDaoClient(
      rpcClient.daos,
      graphqlClient,
      this.protocolMap
    );
    this.proposals = new FutarchyIndexerProposalsClient(rpcClient.proposals);
    this.balances = new FutarchyIndexerBalancesClient(rpcClient.balances);
    this.markets = new FutarchyIndexerMarketsClient(rpcClient.markets);
  }

  static make(
    rpcClient: FutarchyRPCClient,
    indexerURL: string,
    indexerApiKey: string
  ) {
    return new FutarchyIndexerClient(rpcClient, indexerURL, indexerApiKey);
  }
}
