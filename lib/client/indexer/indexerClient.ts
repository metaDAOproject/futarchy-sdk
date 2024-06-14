import { FutarchyClient, FutarchyRPCClient } from "@/client";
import { FutarchyIndexerDaoClient } from "./dao";
import { FutarchyIndexerProposalsClient } from "./proposals";
import { FutarchyIndexerBalancesClient } from "./balances";
import { FutarchyIndexerMarketsClient } from "./markets";
import { createClient, generateSubscriptionOp } from "./__generated__";
import { ClientOptions, createClient as createWsClient } from "graphql-ws";
import { FutarchyProtocol } from "@/types";
import { Observable } from "rxjs";

export class FutarchyIndexerClient implements FutarchyClient {
  public daos: FutarchyIndexerDaoClient;
  public proposals: FutarchyIndexerProposalsClient;
  public balances: FutarchyIndexerBalancesClient;
  public markets: FutarchyIndexerMarketsClient;
  private protocolMap: Map<string, FutarchyProtocol>;
  private wsClient;

  constructor(
    rpcClient: FutarchyRPCClient,
    indexerURL: string,
    indexerWSURL: string
  ) {
    // TODO how can we batch these queries??
    const options = {
      url: indexerURL
    };
    const graphqlClient = createClient(options);

    // add the secrets
    const wsOptions: ClientOptions<any> = {
      url: indexerWSURL,
      connectionParams: {
        headers: {
          "X-Hasura-Role": "anonymous"
        }
      }
    };

    this.wsClient = createWsClient(wsOptions);

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
      this.wsClient,
      this.protocolMap
    );
    this.balances = new FutarchyIndexerBalancesClient(
      rpcClient.balances,
      this.wsClient,
      graphqlClient
    );
    this.markets = new FutarchyIndexerMarketsClient(
      rpcClient.markets.openbook,
      rpcClient.markets.amm,
      rpcClient.markets,
      this.wsClient
    );
  }

  watchSlot() {
    const { query, variables } = generateSubscriptionOp({
      prices: {
        __args: {
          where: {
            updated_slot: { _is_null: false }
          },
          limit: 1,

          order_by: {
            //@ts-ignore
            updated_slot: "desc"
          }
        },
        updated_slot: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup: () => void = this.wsClient.subscribe<{
        prices: {
          updated_slot: number;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            console.log(data);

            subscriber.next(data.data?.prices[0].updated_slot);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriptionCleanup()
        }
      );
      return () => subscriptionCleanup();
    });
  }

  static make(
    rpcClient: FutarchyRPCClient,
    indexerURL: string,
    indexerWSURL: string
  ) {
    return new FutarchyIndexerClient(rpcClient, indexerURL, indexerWSURL);
  }
}
