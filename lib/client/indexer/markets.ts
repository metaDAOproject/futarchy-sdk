import {
  AmmMarket,
  AmmMarketFetchRequest,
  MarketFetchRequest,
  OpenbookMarket,
  OpenbookMarketFetchRequest,
  Order,
  ProposalVolume,
  TokenProps
} from "@/types";
import { FutarchyMarketsClient } from "@/client";
import { FutarchyIndexerOpenbookMarketsClient } from "./market-clients/openbookMarkets";
import { FutarchyOpenbookMarketsRPCClient } from "../rpc/market-clients/openbookMarkets";
import { FutarchyIndexerAmmMarketsClient } from "./market-clients/ammMarkets";
import { FutarchyAmmMarketsRPCClient } from "../rpc";
import { PublicKey } from "@solana/web3.js";
import { Observable } from "rxjs";
import {
  ProposalMarketPricesAggregate,
  SpotObservation,
  TwapObservation
} from "@/types/prices";
import {
  generateSubscriptionOp,
  Client as IndexerGraphQLClient,
  orders_bool_exp,
  orders_order_by,
  orders_select_column,
  prices_chart_data_bool_exp
} from "./__generated__";
import { Client as GQLWebSocketClient } from "graphql-ws";
import { FutarchyMarketsRPCClient } from "../rpc/markets";
import { PriceMath } from "@metadaoproject/futarchy";
import { BN } from "@coral-xyz/anchor";

export class FutarchyIndexerMarketsClient implements FutarchyMarketsClient {
  public openbook: FutarchyIndexerOpenbookMarketsClient;
  public amm: FutarchyIndexerAmmMarketsClient;
  public rpcClient: FutarchyMarketsRPCClient;
  private graphqlWSClient: GQLWebSocketClient;
  private graphqlClient: IndexerGraphQLClient;

  constructor(
    rpcOpenbookMarketsClient: FutarchyOpenbookMarketsRPCClient,
    rpcAmmMarketsClient: FutarchyAmmMarketsRPCClient,
    marketsClient: FutarchyMarketsRPCClient,
    graphqlWSClient: GQLWebSocketClient,
    graphqlClient: IndexerGraphQLClient
  ) {
    this.openbook = new FutarchyIndexerOpenbookMarketsClient(
      rpcOpenbookMarketsClient
    );
    this.amm = new FutarchyIndexerAmmMarketsClient(rpcAmmMarketsClient);
    this.rpcClient = marketsClient;
    this.graphqlWSClient = graphqlWSClient;
    this.graphqlClient = graphqlClient;
  }

  async fetchMarket(
    request: MarketFetchRequest
  ): Promise<OpenbookMarket | AmmMarket | undefined> {
    // Fetch the market based on the request type
    let market: OpenbookMarket | AmmMarket | undefined;
    if (request instanceof OpenbookMarketFetchRequest) {
      market = await this.openbook.fetchMarket(request);
    } else if (request instanceof AmmMarketFetchRequest) {
      market = await this.amm.fetchMarket(request);
    }

    // If no market is fetched, return undefined
    if (!market) {
      return;
    }

    // Query the backend to get the token details
    const response = await this.graphqlClient.query({
      markets: {
        __args: {
          where: {
            market_acct: { _eq: request.marketKey.toBase58() }
          }
        },
        tokenAcctByBidsTokenAcct: {
          token: {
            decimals: true,
            image_url: true,
            symbol: true,
            name: true,
            mint_acct: true
          }
        },
        token: {
          decimals: true,
          image_url: true,
          symbol: true,
          name: true,
          mint_acct: true
        },
        tokenByQuoteMintAcct: {
          decimals: true,
          image_url: true,
          symbol: true,
          name: true,
          mint_acct: true
        }
      }
    });

    if (!response.markets[0]) {
      return;
    }

    // Populate baseToken and quoteToken
    const baseToken: TokenProps = {
      decimals: response.markets[0].token.decimals,
      url: response.markets[0].token.image_url,
      symbol: response.markets[0].token.symbol,
      name: response.markets[0].token.name,
      publicKey: response.markets[0].token.mint_acct
    };

    const quoteToken: TokenProps = {
      decimals: response.markets[0].tokenByQuoteMintAcct.decimals,
      url: response.markets[0].tokenByQuoteMintAcct.image_url,
      symbol: response.markets[0].tokenByQuoteMintAcct.symbol,
      name: response.markets[0].tokenByQuoteMintAcct.name,
      publicKey: response.markets[0].tokenByQuoteMintAcct.mint_acct
    };

    // Update the market with the token details
    market.baseToken = baseToken;
    market.quoteToken = quoteToken;

    return market;
  }

  watchCurrentTwapPrice(marketKey: PublicKey): Observable<TwapObservation[]> {
    const { query, variables } = generateSubscriptionOp({
      twap_chart_data: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() }
          },
          order_by: [
            {
              interv: "desc"
            }
          ],
          limit: 1
        },
        token_amount: true,
        market: {
          tokenByQuoteMintAcct: {
            decimals: true
          },
          tokenByBaseMintAcct: {
            decimals: true
          }
        },
        interv: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup = this.graphqlWSClient.subscribe<{
        twap_chart_data: {
          token_amount: number;
          updated_slot: number;
          interv: string;
          // TODO this query might be a bit slow... hasura warned about caching directive, we need to watch for this
          market: {
            tokenByQuoteMintAcct: {
              decimals: number;
            };
            tokenByBaseMintAcct: {
              decimals: number;
            };
          };
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const twapObservations =
              data.data?.twap_chart_data?.map<TwapObservation>((d) => ({
                priceUi: PriceMath.getHumanPrice(
                  new BN(d.token_amount),
                  d.market?.tokenByBaseMintAcct.decimals!!,
                  d.market?.tokenByQuoteMintAcct.decimals!!
                ),
                priceRaw: d.token_amount,
                createdAt: new Date(d.interv)
              }));
            subscriber.next(twapObservations);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete()
        }
      );

      return () => subscriptionCleanup();
    });
  }

  async fetchCurrentTwapPrice(marketKey: PublicKey): Promise<TwapObservation[]> {
    const { twap_chart_data } = await this.graphqlClient.query({
      twap_chart_data: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() }
          },
          order_by: [
            {
              interv: "desc"
            }
          ],
          limit: 1
        },
        token_amount: true,
        market: {
          tokenByQuoteMintAcct: {
            decimals: true
          },
          tokenByBaseMintAcct: {
            decimals: true
          }
        },
        interv: true
      }
    });

    const twapObservations = twap_chart_data?.map<TwapObservation>((d) => ({
      priceUi: PriceMath.getHumanPrice(
        new BN(d.token_amount),
        d.market?.tokenByBaseMintAcct?.decimals!!,
        d.market?.tokenByQuoteMintAcct.decimals!!
      ),
      priceRaw: d.token_amount,
      createdAt: new Date(d.interv)
    }));
    return twapObservations;
  }

  watchTwapPrices(marketKey: PublicKey): Observable<TwapObservation[]> {
    const { query, variables } = generateSubscriptionOp({
      twap_chart_data: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() }
          },
          order_by: [
            {
              interv: "asc"
            }
          ]
        },
        token_amount: true,
        market: {
          tokenByQuoteMintAcct: {
            decimals: true
          },
          tokenByBaseMintAcct: {
            decimals: true
          }
        },
        interv: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup = this.graphqlWSClient.subscribe<{
        twap_chart_data: {
          token_amount: number;
          updated_slot: number;
          interv: string;
          // TODO this query might be a bit slow... hasura warned about caching directive, we need to watch for this
          market: {
            tokenByQuoteMintAcct: {
              decimals: number;
            };
            tokenByBaseMintAcct: {
              decimals: number;
            };
          };
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const twapObservations =
              data.data?.twap_chart_data?.map<TwapObservation>((d) => ({
                priceUi: PriceMath.getHumanPrice(
                  new BN(d.token_amount),
                  d.market?.tokenByBaseMintAcct.decimals!!,
                  d.market?.tokenByQuoteMintAcct.decimals!!
                ),
                priceRaw: d.token_amount,
                createdAt: new Date(d.interv)
              }));
            subscriber.next(twapObservations);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete()
        }
      );

      return () => subscriptionCleanup();
    });
  }

  async fetchTwapPrices(marketKey: PublicKey): Promise<TwapObservation[]> {
    const { twap_chart_data } = await this.graphqlClient.query({
      twap_chart_data: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() }
          },
          order_by: [
            {
              interv: "asc"
            }
          ]
        },
        token_amount: true,
        market: {
          tokenByQuoteMintAcct: {
            decimals: true
          },
          tokenByBaseMintAcct: {
            decimals: true
          }
        },
        interv: true
      }
    });

    const twapObservations = twap_chart_data?.map<TwapObservation>((d) => ({
      priceUi: PriceMath.getHumanPrice(
        new BN(d.token_amount),
        d.market?.tokenByBaseMintAcct?.decimals!!,
        d.market?.tokenByQuoteMintAcct.decimals!!
      ),
      priceRaw: d.token_amount,
      createdAt: new Date(d.interv)
    }));
    return twapObservations;
  }

  private watchOrdersForArgs(args: {
    distinct_on?: orders_select_column[] | null | undefined;
    limit?: number | null | undefined;
    offset?: number | null | undefined;
    order_by?: orders_order_by[] | null | undefined;
    where?: orders_bool_exp | null | undefined;
  }): Observable<{ orders: Order[]; totalOrders: number }> {
    const { query, variables } = generateSubscriptionOp({
      orders: {
        __args: {
          ...args,
          where: {
            ...args.where,
            transaction: {
              failed: { _eq: false }
            }
          }
        },
        order_time: true,
        is_active: true,
        filled_base_amount: true,
        quote_price: true,
        side: true,
        market_acct: true,
        order_tx_sig: true,
        transaction: {
          failed: true
        },
        market: {
          tokenAcctByBidsTokenAcct: {
            token: {
              decimals: true,
              image_url: true,
              symbol: true,
              name: true,
              mint_acct: true
            }
          },
          token: {
            decimals: true,
            image_url: true,
            symbol: true,
            name: true,
            mint_acct: true
          },
          tokenByQuoteMintAcct: {
            decimals: true,
            image_url: true,
            symbol: true,
            name: true,
            mint_acct: true
          }
        },
        actor_acct: true
      }
    });

    return new Observable((subscriber) => {
      this.graphqlClient
        .query({
          orders_aggregate: {
            __args: {
              where: {
                ...args.where,
                transaction: {
                  failed: { _eq: false }
                }
              }
            },
            aggregate: {
              count: true
            }
          }
        })
        .then((res) => {
          const subscriptionCleanup = this.graphqlWSClient.subscribe<{
            orders_aggregate: {
              aggregate: {
                count: number;
              };
            };
            orders: {
              order_time: string;
              is_active: boolean;
              filled_base_amount: number;
              quote_price: number;
              side: string;
              market_acct: string;
              order_tx_sig: string;
              transaction: {
                failed: boolean;
              };
              market: {
                token: {
                  decimals: string | null;
                  image_url: string | null;
                  symbol: string | null;
                  name: string | null;
                  mint_acct: string | null;
                };
              };
              actor_acct: string | null;
            }[];
          }>(
            { query, variables },
            {
              next: (data) => {
                const orders = data.data?.orders
                  ?.map<Order | undefined>((order) => {
                    const token = order.market.token;
                    if (
                      !token.mint_acct ||
                      !token.decimals ||
                      !order.actor_acct ||
                      !order.market_acct
                    )
                      return;
                    return {
                      time: new Date(order.order_time),
                      transactionStatus: order.transaction.failed
                        ? "failed"
                        : "succeeded",
                      status: order.is_active ? "open" : "closed",
                      size: order.filled_base_amount,
                      filled: order.filled_base_amount,
                      market: new PublicKey(order.market_acct),
                      price: order.quote_price,
                      side: order.side === "BID" ? "bid" : "ask",
                      token: {
                        decimals: Number(token.decimals),
                        name: token.name ?? "",
                        publicKey: token.mint_acct ?? "",
                        symbol: token.symbol ?? "",
                        url: token.image_url ?? ""
                      },
                      owner: new PublicKey(order.actor_acct),
                      signature: order.order_tx_sig
                    };
                  })
                  .filter((o): o is Order => Boolean(o));
                subscriber.next({
                  orders: orders ?? [],
                  totalOrders: res?.orders_aggregate.aggregate?.count ?? 0
                });
              },
              error: (error) => subscriber.error(error),
              complete: () => subscriber.complete()
            }
          );
          return () => subscriptionCleanup();
        });
    });
  }

  private async fetchOrdersForArgs(args: {
    distinct_on?: orders_select_column[] | null | undefined;
    limit?: number | null | undefined;
    offset?: number | null | undefined;
    order_by?: orders_order_by[] | null | undefined;
    where?: orders_bool_exp | null | undefined;
  }): Promise<{ orders: Order[]; totalOrders: number }> {
    const query = {
      orders_aggregate: {
        __args: {
          where: {
            ...args.where,
            transaction: {
              failed: { _eq: false }
            }
          }
        },
        aggregate: {
          count: true
        }
      },
      orders: {
        __args: {
          ...args,
          where: {
            ...args.where,
            transaction: {
              failed: { _eq: false }
            }
          }
        },
        order_time: true,
        is_active: true,
        filled_base_amount: true,
        quote_price: true,
        side: true,
        market_acct: true,
        order_tx_sig: true,
        transaction: {
          failed: true
        },
        market: {
          tokenAcctByBidsTokenAcct: {
            token: {
              decimals: true,
              image_url: true,
              symbol: true,
              name: true,
              mint_acct: true
            }
          },
          token: {
            decimals: true,
            image_url: true,
            symbol: true,
            name: true,
            mint_acct: true
          },
          tokenByQuoteMintAcct: {
            decimals: true,
            image_url: true,
            symbol: true,
            name: true,
            mint_acct: true
          }
        },
        actor_acct: true
      }
    };

    try {
      const res = await this.graphqlClient.query(query);

      const orders =
        res?.orders
          ?.map<Order | undefined>((order) => {
            const token = order.market.token;
            if (
              !token.mint_acct ||
              !token.decimals ||
              !order.actor_acct ||
              !order.market_acct
            )
              return;
            return {
              time: new Date(order.order_time),
              transactionStatus: order.transaction?.failed
                ? "failed"
                : "succeeded",
              status: order.is_active ? "open" : "closed",
              size: order.filled_base_amount,
              filled: order.filled_base_amount,
              market: new PublicKey(order.market_acct),
              price: order.quote_price,
              side: order.side === "BID" ? "bid" : "ask",
              token: {
                decimals: Number(token.decimals),
                name: token.name ?? "",
                publicKey: token.mint_acct ?? "",
                symbol: token.symbol ?? "",
                url: token.image_url ?? ""
              },
              owner: new PublicKey(order.actor_acct),
              signature: order.order_tx_sig
            };
          })
          .filter((o): o is Order => Boolean(o)) ?? [];

      return {
        orders,
        totalOrders: res?.orders_aggregate?.aggregate?.count ?? 0
      };
    } catch (error: any) {
      throw new Error(`Error fetching orders: ${error.message}`);
    }
  }

  watchAllUserOrders(
    owner: PublicKey,
    filters?: orders_bool_exp
  ): Observable<{ orders: Order[]; totalOrders: number }> {
    return this.watchOrdersForArgs({
      where: {
        actor_acct: { _eq: owner.toBase58() },
        ...filters
      },
      order_by: [
        {
          order_time: "desc"
        }
      ]
    });
  }

  watchUserOrdersForMarkets(
    owner: PublicKey,
    passMarketAcct: PublicKey,
    failMarketAcct: PublicKey,
    page?: number,
    pageSize?: number
  ): Observable<{ orders: Order[]; totalOrders: number }> {
    const pageSizeValue = pageSize ?? 25;
    const offset = ((page ?? 1) - 1) * pageSizeValue;
    return this.watchOrdersForArgs({
      where: {
        actor_acct: { _eq: owner.toBase58() },
        market_acct: {
          _in: [passMarketAcct.toBase58(), failMarketAcct.toBase58()]
        }
      },
      order_by: [
        {
          order_time: "desc"
        }
      ],
      offset,
      limit: 1
    });
  }
  fetchUserOrdersForMarkets(
    owner: PublicKey,
    passMarketAcct: PublicKey,
    failMarketAcct: PublicKey,
    page?: number,
    pageSize?: number
  ): Promise<{ orders: Order[]; totalOrders: number }> {
    const pageSizeValue = pageSize ?? 25;
    const offset = ((page ?? 1) - 1) * pageSizeValue;
    return this.fetchOrdersForArgs({
      where: {
        actor_acct: { _eq: owner.toBase58() },
        market_acct: {
          _in: [passMarketAcct.toBase58(), failMarketAcct.toBase58()]
        }
      },
      order_by: [
        {
          order_time: "desc"
        }
      ],
      offset,
      limit: pageSizeValue
    });
  }

  watchUserOrdersForMarket(
    owner: PublicKey,
    marketAcct: PublicKey
  ): Observable<{ orders: Order[]; totalOrders: number }> {
    return this.watchOrdersForArgs({
      where: {
        actor_acct: { _eq: owner.toBase58() },
        market_acct: { _eq: marketAcct.toBase58() }
      },
      order_by: [
        {
          order_time: "desc"
        }
      ]
    });
  }

  fetchUserOrdersForMarket(
    owner: PublicKey,
    marketAcct: PublicKey
  ): Promise<{ orders: Order[]; totalOrders: number }> {
    return this.fetchOrdersForArgs({
      where: {
        actor_acct: { _eq: owner.toBase58() },
        market_acct: { _eq: marketAcct.toBase58() }
      },
      order_by: [
        {
          order_time: "desc"
        }
      ]
    });
  }

  watchOrdersForMarkets(
    passMarketAcct: PublicKey,
    failMarketAcct: PublicKey,
    page?: number,
    pageSize?: number
  ): Observable<{ orders: Order[]; totalOrders: number }> {
    const pageSizeValue = pageSize ?? 25;
    const offset = ((page ?? 1) - 1) * pageSizeValue;
    return this.watchOrdersForArgs({
      where: {
        market_acct: {
          _in: [passMarketAcct.toBase58(), failMarketAcct.toBase58()]
        }
      },
      order_by: [
        {
          order_time: "desc"
        }
      ],
      offset,
      limit: 1
    });
  }
  fetchOrdersForMarkets(
    passMarketAcct: PublicKey,
    failMarketAcct: PublicKey,
    page?: number,
    pageSize?: number
  ): Promise<{ orders: Order[]; totalOrders: number }> {
    const pageSizeValue = pageSize ?? 25;
    const offset = ((page ?? 1) - 1) * pageSizeValue;
    return this.fetchOrdersForArgs({
      where: {
        market_acct: {
          _in: [passMarketAcct.toBase58(), failMarketAcct.toBase58()]
        }
      },
      order_by: [
        {
          order_time: "desc"
        }
      ],
      offset,
      limit: pageSizeValue
    });
  }

  watchOrdersForMarket(
    marketAcct: PublicKey,
    page?: number,
    pageSize?: number
  ): Observable<{ orders: Order[]; totalOrders: number }> {
    const pageSizeValue = pageSize ?? 25;
    const offset = ((page ?? 1) - 1) * pageSizeValue;
    return this.watchOrdersForArgs({
      where: {
        market_acct: { _eq: marketAcct.toBase58() }
      },
      order_by: [
        {
          order_time: "desc"
        }
      ],
      offset,
      limit: pageSizeValue
    });
  }

  watchCurrentSpotPrice(
    marketKey: PublicKey,
    filters?: prices_chart_data_bool_exp
  ): Observable<SpotObservation> {
    const { query, variables } = generateSubscriptionOp({
      prices_chart_data: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() },
            prices_type: {
              _eq: "spot"
            },
            ...filters
          },
          order_by: [
            {
              interv: "desc"
            }
          ],
          limit: 1
        },
        interv: true,
        price: true,
        quote_amount: true,
        base_amount: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup = this.graphqlWSClient.subscribe<{
        prices_chart_data: {
          interv: string;
          price: number;
          quote_amount: number;
          base_amount: number;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            let d = data.data?.prices_chart_data[0];
            if (d) {
              const spotObservation = {
                priceUi: d.price,
                createdAt: new Date(d.interv),
                quoteAmount: d.quote_amount,
                baseAmount: d.base_amount
              };
              subscriber.next(spotObservation);
            }
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete()
        }
      );
      return () => subscriptionCleanup();
    });
  }

  async fetchCurrentSpotPrice(marketKey: PublicKey): Promise<SpotObservation> {
    const { prices_chart_data } = await this.graphqlClient.query({
      prices_chart_data: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() },
            prices_type: {
              _eq: "spot"
            }
          },
          order_by: [
            {
              interv: "desc"
            }
          ],
          limit: 1
        },
        interv: true,
        price: true,
        quote_amount: true,
        base_amount: true
      }
    });

    const observation: SpotObservation = {
      priceUi: prices_chart_data[0]?.price,
      createdAt: new Date(prices_chart_data[0]?.interv),
      quoteAmount: prices_chart_data[0]?.quote_amount,
      baseAmount: prices_chart_data[0]?.base_amount
    };
    return observation;
  }

  async fetchSpotPrices(
    marketKey: PublicKey,
    filters?: any
  ): Promise<SpotObservation[]> {
    const { prices_chart_data } = await this.graphqlClient.query({
      prices_chart_data: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() },
            prices_type: {
              _in: ["spot", "conditional"]
            },
            ...filters
          },
          order_by: [
            {
              interv: "asc"
            }
          ]
        },
        interv: true,
        price: true,
        quote_amount: true,
        base_amount: true
      }
    });
    return prices_chart_data.map((d) => ({
      priceUi: d.price,
      createdAt: new Date(d.interv),
      quoteAmount: d.quote_amount,
      baseAmount: d.base_amount
    }));
  }

  watchSpotPrices(
    marketKey: PublicKey,
    filters?: prices_chart_data_bool_exp
  ): Observable<SpotObservation[]> {
    const { query, variables } = generateSubscriptionOp({
      prices_chart_data: {
        __args: {
          where: {
            market_acct: { _eq: marketKey.toString() },
            prices_type: {
              _in: ["spot", "conditional"]
            },
            ...filters
          },
          order_by: [
            {
              interv: "asc"
            }
          ]
        },
        interv: true,
        price: true,
        quote_amount: true,
        base_amount: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup = this.graphqlWSClient.subscribe<{
        prices_chart_data: {
          interv: string;
          price: number;
          quote_amount: number;
          base_amount: number;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const spotObservations =
              data.data?.prices_chart_data?.map<SpotObservation>((d) => ({
                priceUi: d.price,
                createdAt: new Date(d.interv),
                quoteAmount: d.quote_amount,
                baseAmount: d.base_amount
              }));
            subscriber.next(spotObservations);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete()
        }
      );
      return () => subscriptionCleanup();
    });
  }

  watchProposalVolume(proposalAcct: PublicKey): Observable<ProposalVolume> {
    const { query, variables } = generateSubscriptionOp({
      proposal_total_trade_volume: {
        __args: {
          where: {
            proposal_acct: { _eq: proposalAcct.toBase58() }
          }
        },
        pass_volume: true,
        fail_volume: true
      }
    });
    return new Observable((subscriber) => {
      const subscriptionCleanup = this.graphqlWSClient.subscribe<{
        proposal_total_trade_volume: {
          pass_volume: number;
          fail_volume: number;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const volume: ProposalVolume = {
              pass: data.data?.proposal_total_trade_volume[0].pass_volume ?? 0,
              fail: data.data?.proposal_total_trade_volume[0].fail_volume ?? 0
            };
            subscriber.next(volume);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete()
        }
      );
      return () => subscriptionCleanup();
    });
  }

  watchProposalBars(
    proposalAcct: PublicKey
  ): Observable<ProposalMarketPricesAggregate[]> {

    var date = new Date();
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
      date.getUTCDate(), date.getUTCHours(),
      date.getUTCMinutes(), date.getUTCSeconds());
    let nowUTC = new Date(now_utc).toISOString();
    const { query, variables } = generateSubscriptionOp({

      proposal_bars_stream: {
        __args: {
          batch_size: 1,
          cursor: [{
            initial_value: {
              bar_start_time: nowUTC,
            }
          }],
          where: {
            proposal_acct: { _eq: proposalAcct.toBase58() }
          },
        },
        bar_start_time: true,
        fail_base_amount: true,
        fail_market_acct: true,
        fail_price: true,
        fail_quote_amount: true,
        pass_base_amount: true,
        pass_market_acct: true,
        pass_price: true,
        pass_quote_amount: true,
        proposal_acct: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup = this.graphqlWSClient.subscribe<{
        proposal_bars_stream: {
          bar_start_time: string;
          fail_base_amount: number;
          fail_market_acct: string;
          fail_price: number;
          fail_quote_amount: number;
          pass_base_amount: number;
          pass_market_acct: string;
          pass_price: number;
          pass_quote_amount: number;
          proposal_acct: string;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const proposalBarsPrices =
              data.data?.proposal_bars_stream?.map<ProposalMarketPricesAggregate>(
                (d) => ({
                  failMarket: {
                    acct: d.fail_market_acct,
                    baseAmount: d.fail_base_amount,
                    price: d.fail_price,
                    quoteAmount: d.fail_quote_amount
                  },
                  passMarket: {
                    acct: d.pass_market_acct,
                    baseAmount: d.pass_base_amount,
                    price: d.pass_price,
                    quoteAmount: d.pass_quote_amount
                  },
                  createdAt: new Date(d.bar_start_time)
                })
              ) ?? [];
            subscriber.next(proposalBarsPrices);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete()
        }
      );
      return () => subscriptionCleanup();
    });
  }

  async fetchProposalBars(
    proposalAcct: PublicKey
  ): Promise<ProposalMarketPricesAggregate[]> {
    const { proposal_bars } = await this.graphqlClient.query({
      proposal_bars: {
        __args: {
          where: {
            proposal_acct: { _eq: proposalAcct.toBase58() }
          },
          order_by: [
            {
              bar_start_time: "asc"
            }
          ]
        },
        bar_start_time: true,
        fail_base_amount: true,
        fail_market_acct: true,
        fail_price: true,
        fail_quote_amount: true,
        pass_base_amount: true,
        pass_market_acct: true,
        pass_price: true,
        pass_quote_amount: true,
        proposal_acct: true
      }
    });

    const proposalBarsPrices =
      proposal_bars?.map<ProposalMarketPricesAggregate>((d) => ({
        failMarket: {
          acct: d.fail_market_acct!,
          baseAmount: d.fail_base_amount,
          price: d.fail_price,
          quoteAmount: d.fail_quote_amount
        },
        passMarket: {
          acct: d.pass_market_acct!,
          baseAmount: d.pass_base_amount,
          price: d.pass_price,
          quoteAmount: d.pass_quote_amount
        },
        createdAt: new Date(d.bar_start_time)
      })) ?? [];
    return proposalBarsPrices;
  }
}
