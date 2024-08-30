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
import { TransactionSender } from "@/transactions/sender";
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
import { prices_chart_data_bool_exp } from "../indexer/__generated__";
import { BN_0 } from "@/constants";

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

  watchAllUserOrders(
    owner: PublicKey
  ): Observable<{ orders: Order[]; totalOrders: number }> {
    console.warn("watchAllUserOrders is not implemented in the RPC client.");
    return new Observable((subscriber) => {
      subscriber.next({ orders: [], totalOrders: 0 });
    });
  }

  watchOrdersForMarket(
    marketAcct: PublicKey
  ): Observable<{ orders: Order[]; totalOrders: number }> {
    console.warn(
      "watchUserOrdersForMarket is not implemented in the RPC client."
    );
    return new Observable((subscriber) => {
      subscriber.next({ orders: [], totalOrders: 0 });
    });
  }

  watchUserOrdersForMarket(
    owner: PublicKey,
    marketAcct: PublicKey
  ): Observable<{ orders: Order[]; totalOrders: number }> {
    console.warn(
      "watchUserOrdersForMarket is not implemented in the RPC client."
    );
    return new Observable((subscriber) => {
      subscriber.next({ orders: [], totalOrders: 0 });
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
                twapPrice ?? BN_0,
                market?.baseToken.decimals!!,
                market?.quoteToken.decimals!!
              ),
              priceRaw: twapPrice?.toNumber(),
              createdAt: new Date()
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
            market?.baseAmount ?? BN_0,
            market?.quoteAmount ?? BN_0
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

  /**
   * @deprecated This function is not implemented yet and likely never will be for RPC client.
   */
  async fetchProposalBars(
    proposalAcct: PublicKey
  ): Promise<ProposalMarketPricesAggregate[]> {
    return [];
  }

  /**
   * @deprecated This function is not implemented yet and likely never will be for RPC client.
   */
  watchProposalBars(
    proposalAcct: PublicKey
  ): Observable<ProposalMarketPricesAggregate[]> {
    return new Observable();
  }

  /**
   * @deprecated This function is not implemented yet and likely never will be for RPC client.
   */
  async fetchTwapPrices(
    marketKey: PublicKey,
    startDate?: Date,
    endDate?: Date
  ): Promise<TwapObservation[]> {
    return [];
  }

  async fetchCurrentSpotPrice(marketKey: PublicKey): Promise<SpotObservation> {
    throw new Error("not implemented");
  }
  async fetchCurrentTwapPrice(
    marketKey: PublicKey
  ): Promise<TwapObservation[]> {
    throw new Error("not implemented");
  }

  watchCurrentSpotPrice(
    marketKey: PublicKey,
    filters?: prices_chart_data_bool_exp
  ): Observable<SpotObservation> {
    throw new Error("not implemented");
  }

  watchCurrentTwapPrice(marketKey: PublicKey): Observable<TwapObservation[]> {
    throw new Error("not implemented");
  }
  async fetchUserOrdersForMarkets(
    owner: PublicKey,
    passMarketAcct: PublicKey,
    failMarketAcct: PublicKey,
    page?: number,
    pageSize?: number
  ): Promise<{ orders: Order[]; totalOrders: number }> {
    throw new Error("not implemented");
  }
}
