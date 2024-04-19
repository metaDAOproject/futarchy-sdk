import {
  Market,
  OpenbookMarket,
  Order,
  Orderbook,
  PlaceOrderType,
} from "../../types/markets";
import { FutarchyMarketsClient } from "../client";
import { PublicKey } from "@solana/web3.js";

export class FutarchyIndexerMarketsClient implements FutarchyMarketsClient {
  async cancelOrder(market: OpenbookMarket, order: Order): Promise<string[]> {
    return [];
  }

  async fetchMarket(marketKey: PublicKey): Promise<Market | undefined> {
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
