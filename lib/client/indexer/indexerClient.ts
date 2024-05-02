import { FutarchyClient, FutarchyRPCClient } from "@/client";
import { FutarchyIndexerDaoClient } from "./dao";
import { FutarchyIndexerProposalsClient } from "./proposals";
import { FutarchyIndexerBalancesClient } from "./balances";
import { FutarchyIndexerMarketsClient } from "./markets";
import { createClient } from "./__generated__";
import { ClientOptions, createClient as createWsClient } from "graphql-ws";
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
    indexerWSURL: string
  ) {
    // TODO how can we batch these queries??
    const options = {
      url: indexerURL,
    };
    const graphqlClient = createClient(options);

    const wsOptions: ClientOptions<any> = {
      url: indexerWSURL,
    };

    const wsClient = createWsClient(wsOptions);

    this.protocolMap = rpcClient.futarchyProtocols.reduce((prev, curr) => {
      prev.set(curr.autocrat.programId.toString(), curr);
      return prev;
    }, new Map<string, FutarchyProtocol>());

    this.daos = new FutarchyIndexerDaoClient(
      rpcClient.daos,
      graphqlClient,
      this.protocolMap
    );
    this.proposals = new FutarchyIndexerProposalsClient(
      rpcClient.proposals,
      graphqlClient,
      this.protocolMap
    );
    this.balances = new FutarchyIndexerBalancesClient(rpcClient.balances);
    this.markets = new FutarchyIndexerMarketsClient(
      rpcClient.markets.openbook,
      rpcClient.markets.amm,
      wsClient
    );
  }

  static make(
    rpcClient: FutarchyRPCClient,
    indexerURL: string,
    indexerWSURL: string
  ) {
    return new FutarchyIndexerClient(rpcClient, indexerURL, indexerWSURL);
  }
}
