import { FutarchyAmmMarketsClient } from "@/client";
import { FutarchyAmmMarketsRPCClient } from "../../rpc";
import { AmmMarketFetchRequest, Market } from "@/types";

export class FutarchyIndexerAmmMarketsClient
  implements FutarchyAmmMarketsClient
{
  private rpcMarketsClient: FutarchyAmmMarketsRPCClient;
  constructor(rpcMarketsClient: FutarchyAmmMarketsRPCClient) {
    this.rpcMarketsClient = rpcMarketsClient;
  }

  async fetchMarket(
    request: AmmMarketFetchRequest
  ): Promise<Market | undefined> {
    return this.rpcMarketsClient.fetchMarket(request);
  }
}
