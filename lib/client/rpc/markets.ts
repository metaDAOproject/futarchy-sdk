import { Program, Provider } from "@coral-xyz/anchor";
import { OpenbookV2, OpenBookV2Client } from "@openbook-dex/openbook-v2";
import {
  AmmMarket,
  AmmMarketFetchRequest,
  MarketFetchRequest,
  OpenbookMarket,
  OpenbookMarketFetchRequest,
} from "@/types";
import { FutarchyMarketsClient } from "@/client";
import { TransactionSender } from "@/transactions";
import { AmmClient, PriceMath } from "@metadaoproject/futarchy-ts";
import { FutarchyOpenbookMarketsRPCClient } from "./market-clients/openbookMarkets";
import { FutarchyAmmMarketsRPCClient } from "./market-clients/ammMarkets";
import { Amm as AmmIDLType } from "@metadaoproject/futarchy-ts/dist/types/amm";
import { SpotObservation, TwapObservation } from "@/types/prices";
import { PublicKey } from "@solana/web3.js";
import { Observable } from "rxjs";

export class FutarchyMarketsRPCClient implements FutarchyMarketsClient {
  // we have generic interface for orderbooks. when adding phoenix, this could be rethunk
  public openbook: FutarchyOpenbookMarketsRPCClient;
  public amm: FutarchyAmmMarketsRPCClient;

  constructor(
    rpcProvider: Provider,
    openbook: Program<OpenbookV2>,
    openbookClient: OpenBookV2Client,
    amm: Program<AmmIDLType>,
    ammClient: AmmClient,
    transactionSender: TransactionSender | undefined
  ) {
    this.openbook = new FutarchyOpenbookMarketsRPCClient(
      rpcProvider,
      openbook,
      openbookClient,
      transactionSender
    );
    this.amm = new FutarchyAmmMarketsRPCClient(
      rpcProvider,
      amm,
      ammClient,
      transactionSender
    );
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
    return new Observable((subscriber) => {
      this.amm
        .fetchMarket(new AmmMarketFetchRequest(marketKey))
        .then((market) => {
          subscriber.next([
            {
              price: PriceMath.getHumanPrice(
                market?.twapAggregator.div(
                  market.twapLastUpdatedSlot.sub(market.createdAtSlot)
                ),
                market?.baseToken.decimals!!,
                market?.quoteToken.decimals!!
              ),
              slot: 0,
            },
          ]);
        });
    });
  }

  watchSpotPrices(marketKey: PublicKey): Observable<SpotObservation[]> {
    return new Observable((subscriber) => {
      this.amm
        .fetchMarket(new AmmMarketFetchRequest(marketKey))
        .then((market) => {
          subscriber.next([
            {
              price: PriceMath.getHumanPrice(
                PriceMath.getAmmPriceFromReserves(
                  market?.baseAmount,
                  market?.quoteAmount
                ),
                market?.baseToken.decimals!!,
                market?.quoteToken.decimals!!
              ),
              slot: 0,
            },
          ]);
        });
    });
  }
}
