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
import { FutarchyAmmMarketsClient, FutarchyMarketsClient } from "@/client";
import { PublicKey } from "@solana/web3.js";
import { FutarchyIndexerOpenbookMarketsClient } from "./market-clients/openbookMarkets";
import { FutarchyOpenbookMarketsRPCClient } from "../rpc/market-clients/openbookMarkets";
import { FutarchyIndexerAmmMarketsClient } from "./market-clients/ammMarkets";
import { FutarchyMarketsRPCClient } from "../rpc/markets";
import { FutarchyAmmMarketsRPCClient } from "../rpc";

export class FutarchyIndexerMarketsClient implements FutarchyMarketsClient {
  public openbook: FutarchyIndexerOpenbookMarketsClient;
  public amm: FutarchyAmmMarketsClient;

  constructor(
    rpcOpenbookMarketsClient: FutarchyOpenbookMarketsRPCClient,
    rpcAmmMarketsClient: FutarchyAmmMarketsRPCClient
  ) {
    this.openbook = new FutarchyIndexerOpenbookMarketsClient(
      rpcOpenbookMarketsClient
    );
    this.amm = new FutarchyIndexerAmmMarketsClient(rpcAmmMarketsClient);
  }

  async fetchMarket(request: MarketFetchRequest) {
    if (request instanceof OpenbookMarketFetchRequest) {
      return this.openbook.fetchMarket(request);
    }
    return;
  }
}
