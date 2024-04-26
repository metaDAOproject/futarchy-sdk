import {
  Market,
  MarketFetchRequest,
  OpenbookMarket,
  OpenbookMarketFetchRequest,
  OpenbookOrder,
  Order,
  Orderbook,
  PlaceOrderType,
} from "@/types";
import { FutarchyMarketsClient } from "@/client";
import { PublicKey } from "@solana/web3.js";
import { FutarchyOpenbookMarketsRPCClient } from "../rpc";

// TODO decoupling openbook stuff
export class FutarchyIndexerMarketsClient implements FutarchyMarketsClient {
  private rpcMarketsClient: FutarchyOpenbookMarketsRPCClient;
  constructor(rpcMarketsClient: FutarchyOpenbookMarketsRPCClient) {
    this.rpcMarketsClient = rpcMarketsClient;
  }
  async cancelOrder(market: OpenbookMarket, order: Order): Promise<string[]> {
    return [];
  }

  async fetchMarket(
    request: OpenbookMarketFetchRequest
  ): Promise<OpenbookMarket | undefined> {
    return;
  }

  async fetchOrderBook(
    market: OpenbookMarket
  ): Promise<Orderbook<Order> | undefined> {
    return;
  }

  async fetchUserOrdersFromOrderbooks(
    owner: PublicKey,
    orderbooks: Orderbook<Order>[]
  ): Promise<OpenbookOrder[]> {
    return [];
  }

  async placeOrder(
    market: Market,
    order: Omit<Order, "status" | "filled">,
    placeOrderType: PlaceOrderType
  ): Promise<string[]> {
    return [];
  }
}
