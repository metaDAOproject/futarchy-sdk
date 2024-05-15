import {
  Market,
  OpenbookMarket,
  OpenbookMarketFetchRequest,
  OpenbookOrder,
  Order,
  Orderbook,
  PlaceOrderType
} from "@/types";
import { FutarchyOrderbookMarketsClient } from "@/client";
import { PublicKey } from "@solana/web3.js";
import { FutarchyOpenbookMarketsRPCClient } from "../../rpc";
import { SendTransactionResponse } from "@/types/transactions";

export class FutarchyIndexerOpenbookMarketsClient
  implements FutarchyOrderbookMarketsClient
{
  private rpcMarketsClient: FutarchyOpenbookMarketsRPCClient;
  constructor(rpcMarketsClient: FutarchyOpenbookMarketsRPCClient) {
    this.rpcMarketsClient = rpcMarketsClient;
  }
  async cancelOrder(
    market: OpenbookMarket,
    order: OpenbookOrder
  ): SendTransactionResponse {
    return this.rpcMarketsClient.cancelOrder(market, order);
  }

  async fetchMarket(
    request: OpenbookMarketFetchRequest
  ): Promise<OpenbookMarket | undefined> {
    return this.rpcMarketsClient.fetchMarket(request);
  }

  async fetchOrderBook(
    market: OpenbookMarket
  ): Promise<Orderbook<Order> | undefined> {
    return this.rpcMarketsClient.fetchOrderBook(market);
  }

  async fetchUserOrdersFromOrderbooks(
    owner: PublicKey,
    orderbooks: Orderbook<Order>[]
  ): Promise<OpenbookOrder[]> {
    return this.rpcMarketsClient.fetchUserOrdersFromOrderbooks(
      owner,
      orderbooks
    );
  }

  async placeOrder(
    market: OpenbookMarket,
    order: Omit<OpenbookOrder, "status" | "transactionStatus" | "filled">,
    placeOrderType: PlaceOrderType
  ): SendTransactionResponse {
    return this.rpcMarketsClient.placeOrder(market, order, placeOrderType);
  }
}
