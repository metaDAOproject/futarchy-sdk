import { Program, Provider } from "@coral-xyz/anchor";
import { OpenbookV2, OpenBookV2Client } from "@openbook-dex/openbook-v2";
import {
  AmmMarket,
  AmmMarketFetchRequest,
  MarketFetchRequest,
  OpenbookMarket,
  OpenbookMarketFetchRequest,
  Order,
  ProposalVolume
} from "@/types";
import { FutarchyMarketsClient } from "@/client";
import { TransactionSender } from "@/transactions";
import { AmmClient, PriceMath } from "@metadaoproject/futarchy";
import { FutarchyOpenbookMarketsRPCClient } from "./market-clients/openbookMarkets";
import { FutarchyAmmMarketsRPCClient } from "./market-clients/ammMarkets";
import { Amm as AmmIDLType } from "@/idl/amm_v0.3";
import {
  ProposalMarketPricesAggregate,
  SpotObservation,
  TwapObservation
} from "@/types/prices";
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

  watchAllUserOrders(owner: PublicKey): Observable<Order[]> {
    console.warn("watchAllUserOrders is not implemented in the RPC client.");
    return new Observable((subscriber) => {
      subscriber.next([]);
    });
  }

  watchOrdersForMarket(marketAcct: PublicKey): Observable<Order[]> {
    console.warn(
      "watchUserOrdersForMarket is not implemented in the RPC client."
    );
    return new Observable((subscriber) => {
      subscriber.next([]);
    });
  }

  watchUserOrdersForMarket(
    owner: PublicKey,
    marketAcct: PublicKey
  ): Observable<Order[]> {
    console.warn(
      "watchUserOrdersForMarket is not implemented in the RPC client."
    );
    return new Observable((subscriber) => {
      subscriber.next([]);
    });
  }

  watchTwapPrices(marketKey: PublicKey): Observable<TwapObservation[]> {
    // TODO: this only works for AMM today, should be extended for
    // order books

    return new Observable((subscriber) => {
      this.amm
        .fetchMarket(new AmmMarketFetchRequest(marketKey))
        .then((market) => {
          const twapPrice = market?.twapAggregator.div(
            market.twapLastUpdatedSlot.sub(market.createdAtSlot)
          );
          subscriber.next([
            {
              priceUi: PriceMath.getHumanPrice(
                twapPrice,
                market?.baseToken.decimals!!,
                market?.quoteToken.decimals!!
              ),
              priceRaw: twapPrice.toNumber(),
              createdAt: new Date(),
              slot: 0
            }
          ]);
        });
    });
  }

  watchSpotPrices(marketKey: PublicKey): Observable<SpotObservation[]> {
    // TODO: this only works for AMM today, should be extended for
    // order books

    return new Observable((subscriber) => {
      this.amm
        .fetchMarket(new AmmMarketFetchRequest(marketKey))
        .then((market) => {
          const ammPrice = PriceMath.getAmmPriceFromReserves(
            market?.baseAmount,
            market?.quoteAmount
          );
          subscriber.next([
            {
              priceUi: PriceMath.getHumanPrice(
                ammPrice,
                market?.baseToken.decimals!!,
                market?.quoteToken.decimals!!
              ),
              priceRaw: ammPrice.toNumber(),
              createdAt: new Date()
            }
          ]);
        });
    });
  }
  watchProposalMarketPricesAggregate(
    proposalKey: PublicKey
  ): Observable<ProposalMarketPricesAggregate[]> {
    // TODO: this only works for AMM today, should be extended for
    // order books

    console.warn(
      "watchProposalMarketPricesAggregate is not implemented for the RPC client"
    );

    return new Observable((subscriber) => {
      subscriber.next([]);
    });
  }

  watchProposalVolume(proposalAcct: PublicKey): Observable<ProposalVolume> {
    console.warn("watchProposalVolume is not implemented for the RPC client");

    return new Observable((subscriber) => {
      subscriber.next({ fail: 0, pass: 0 });
    });
  }
}
