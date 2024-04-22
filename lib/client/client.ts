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
  ProposalWithVaults,
  Orderbook,
  PlaceOrderType,
  FutarchyProtocol,
  MarketFetchRequest,
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
  fetchProposals(dadaoAggregateo: DaoAggregate): Promise<ProposalWithVaults[]>;
  deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccount
  ): Promise<string[] | undefined>;
  withdraw(
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccount
  ): Promise<string[] | undefined>;
}

export interface FutarchyBalancesClient {
  fetchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]>;
  fetchAllConditionalTokenWalletBalances(
    ownerWallet: PublicKey,
    doasWithProposals: [Dao, ProposalWithVaults][]
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
    order: Omit<O, "status">,
    placeOrderType: PlaceOrderType
  ): Promise<string[]>;
  cancelOrder(market: M, order: O): Promise<string[]>;
}
