import {
  AmmMarket,
  AmmMarketFetchRequest,
  MarketFetchRequest,
  OpenbookMarket,
  OpenbookMarketFetchRequest,
} from "@/types";
import { FutarchyMarketsClient } from "@/client";
import { FutarchyIndexerOpenbookMarketsClient } from "./market-clients/openbookMarkets";
import { FutarchyOpenbookMarketsRPCClient } from "../rpc/market-clients/openbookMarkets";
import { FutarchyIndexerAmmMarketsClient } from "./market-clients/ammMarkets";
import { FutarchyAmmMarketsRPCClient } from "../rpc";
import { PublicKey } from "@solana/web3.js";
import { Observable } from "rxjs";
import { SpotObservation, TwapObservation } from "@/types/prices";
import { generateSubscriptionOp } from "./__generated__";
import { Client as GQLWebSocketClient } from "graphql-ws";

export class FutarchyIndexerMarketsClient implements FutarchyMarketsClient {
  public openbook: FutarchyIndexerOpenbookMarketsClient;
  public amm: FutarchyIndexerAmmMarketsClient;
  private graphqlWSClient: GQLWebSocketClient;

  constructor(
    rpcOpenbookMarketsClient: FutarchyOpenbookMarketsRPCClient,
    rpcAmmMarketsClient: FutarchyAmmMarketsRPCClient,
    graphqlWSClient: GQLWebSocketClient
  ) {
    this.openbook = new FutarchyIndexerOpenbookMarketsClient(
      rpcOpenbookMarketsClient
    );
    this.amm = new FutarchyIndexerAmmMarketsClient(rpcAmmMarketsClient);
    this.graphqlWSClient = graphqlWSClient;
  }

  async fetchMarket(
    request: MarketFetchRequest
  ): Promise<OpenbookMarket | AmmMarket | undefined> {
    if (request instanceof OpenbookMarketFetchRequest) {
      return this.openbook.fetchMarket(request);
    }
    if (request instanceof AmmMarketFetchRequest) {
      return this.amm.fetchMarket(request);
    }
    return;
  }

  watchTwapPrices(marketKey: PublicKey): Observable<TwapObservation[]> {
    const { query, variables } = generateSubscriptionOp({
      twaps: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() },
          },
        },
        token_amount: true,
        updated_slot: true,
      },
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup = this.graphqlWSClient.subscribe(
        { query, variables },
        {
          next: (data) => {
            console.log(data);
            subscriber.next([]);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete(),
        }
      );

      return () => subscriptionCleanup();
    });
  }
  watchSpotPrices(marketKey: PublicKey): Observable<SpotObservation[]> {
    console.warn(
      "spot price subscription is unavailable for the futarchy-sdk RPC client"
    );
    return new Observable((subscriber) => {
      subscriber.next([]);
    });
  }
}
