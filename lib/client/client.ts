import { PublicKey } from "@solana/web3.js";
import {
  DaoAccount,
  Dao,
  DaoAggregate,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
  VaultAccount,
  Market,
  Order,
  Proposal,
  Orderbook,
  PlaceOrderType,
  FutarchyProtocol,
  MarketFetchRequest,
  TokenProps,
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
  ): Promise<Dao | undefined>;
}

export interface FutarchyProposalsClient {
  fetchProposals(daoAggregate: DaoAggregate): Promise<Proposal[]>;
  deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccount
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

// heyyy refactor thus
export interface FutarchyMarketsClient<
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
