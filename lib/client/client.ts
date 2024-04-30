import { PublicKey } from "@solana/web3.js";
import {
  DaoAggregate,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
  Market,
  Order,
  Proposal,
  Orderbook,
  PlaceOrderType,
  FutarchyProtocol,
  MarketFetchRequest,
  TokenProps,
  VaultAccountWithProtocol,
  OpenbookMarket,
  AmmMarket,
} from "@/types";

export interface FutarchyClient {
  daos: FutarchyDaoClient;
  proposals: FutarchyProposalsClient;
  balances: FutarchyBalancesClient;
  markets: FutarchyMarketsClient;
}

export interface FutarchyDaoClient {
  fetchAllDaos(): Promise<DaoAggregate[]>;
  fetchDao(
    daoAddress: string,
    protocol: FutarchyProtocol
  ): Promise<DaoAggregate | null>;
}

export interface FutarchyProposalsClient {
  fetchProposals(daoAggregate: DaoAggregate): Promise<Proposal[]>;
  deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ): Promise<string[] | undefined>;
  withdraw(proposal: Proposal): Promise<string[] | undefined>;
}

export interface FutarchyBalancesClient {
  fetchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]>;
  fetchAllConditionalTokenWalletBalances(
    ownerWallet: PublicKey,
    quoteToken: TokenProps,
    baseToken: TokenProps,
    proposals: Proposal[]
  ): Promise<TokenWithBalanceWithProposal[]>;
}

export interface FutarchyMarketsClient {
  openbook: FutarchyOrderbookMarketsClient;
  amm: FutarchyAmmMarketsClient;
  fetchMarket(
    request: MarketFetchRequest
  ): Promise<OpenbookMarket | AmmMarket | undefined>;
}

export interface FutarchyOrderbookMarketsClient<
  M extends Market = Market,
  O extends Order = Order
> {
  fetchMarket(request: MarketFetchRequest): Promise<M | undefined>;
  fetchOrderBook(market: M): Promise<Orderbook<O> | undefined>;
  fetchUserOrdersFromOrderbooks(
    owner: PublicKey,
    orderbooks: Orderbook<O>[]
  ): Promise<O[]>;
  placeOrder(
    market: M,
    order: Omit<O, "owner" | "status" | "filled">,
    placeOrderType: PlaceOrderType
  ): Promise<string[]>;
  cancelOrder(market: M, order: O): Promise<string[]>;
}

//to do : populate
export interface FutarchyAmmMarketsClient {
  fetchMarket(request: MarketFetchRequest): Promise<Market | undefined>;
}
