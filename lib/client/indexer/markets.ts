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
import { FutarchyMarketsRPCClient } from "../rpc/markets";

export class FutarchyIndexerMarketsClient implements FutarchyMarketsClient {
  public openbook: FutarchyIndexerOpenbookMarketsClient;
  public amm: FutarchyIndexerAmmMarketsClient;
  public marketClient: FutarchyMarketsRPCClient;
  private graphqlWSClient: GQLWebSocketClient;

  constructor(
    rpcOpenbookMarketsClient: FutarchyOpenbookMarketsRPCClient,
    rpcAmmMarketsClient: FutarchyAmmMarketsRPCClient,
    marketsClient: FutarchyMarketsRPCClient,
    graphqlWSClient: GQLWebSocketClient
  ) {
    this.openbook = new FutarchyIndexerOpenbookMarketsClient(
      rpcOpenbookMarketsClient
    );
    this.amm = new FutarchyIndexerAmmMarketsClient(rpcAmmMarketsClient);
    this.marketClient = marketsClient;
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
    return this.marketClient.watchTwapPrices(marketKey);

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
      const subscriptionCleanup = this.graphqlWSClient.subscribe<{
        twaps: {
          token_amount: number;
          updated_slot: number;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const twapObservations = data.data?.twaps?.map<TwapObservation>(
              (d) => ({
                price: d.token_amount,
                slot: d.updated_slot,
              })
            );
            subscriber.next(twapObservations ?? []);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete(),
        }
      );

      return () => subscriptionCleanup();
    });
  }
  watchSpotPrices(marketKey: PublicKey): Observable<SpotObservation[]> {
    // console.log("WATCHING SPOT PRICES");
    return this.marketClient.watchSpotPrices(marketKey);

    const { query, variables } = generateSubscriptionOp({
      takes: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() },
          },
        },
        order_time: true,
        quote_price: true,
      },
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup = this.graphqlWSClient.subscribe<{
        takes: {
          order_time: number;
          quote_price: number;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const spotObservations = data.data?.takes?.map<SpotObservation>(
              (d) => ({
                price: d.quote_price,
                slot: d.order_time,
              })
            );
            subscriber.next(spotObservations ?? []);
          },
          error: (error) => {
            console.log("Djksdkaldsjklasj")
            subscriber.error(error)
          },
          complete: () => subscriber.complete(),
        }
      );
      return () => subscriptionCleanup();
    });
  }
}
