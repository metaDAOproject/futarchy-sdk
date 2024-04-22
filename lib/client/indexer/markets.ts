import {
  Market,
  MarketFetchRequest,
  OpenbookMarket,
  Order,
  Orderbook,
  PlaceOrderType,
} from "@/types";
import { FutarchyMarketsClient } from "@/client";
import { PublicKey } from "@solana/web3.js";

export class FutarchyIndexerMarketsClient implements FutarchyMarketsClient {
  async cancelOrder(market: OpenbookMarket, order: Order): Promise<string[]> {
    return [];
  }

  async fetchMarket(request: MarketFetchRequest): Promise<Market | undefined> {
    return;
  }

  async fetchOrderBook(market: Market): Promise<Orderbook<Order> | undefined> {
    return;
  }

  async fetchUserOrdersFromOrderbooks(
    owner: PublicKey,
    orderbooks: Orderbook<Order>[]
  ): Promise<Order[]> {
    return [];
  }

  async placeOrder(
    market: Market,
    order: Omit<Order, "status">,
    placeOrderType: PlaceOrderType
  ): Promise<string[]> {
    return [];
  }
}
