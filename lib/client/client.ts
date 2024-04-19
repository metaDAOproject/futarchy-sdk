import { PublicKey } from "@solana/web3.js";
import {
  DaoAccount,
  DaoWithTokens,
  TokenWithBalance,
  TokenWithBalanceWithProposal,
  VaultAccount,
  Market,
  Order,
  ProposalWithVaults,
  Orderbook,
  PlaceOrderType,
} from "@/types";

export interface FutarchyClient {
  daos: FutarchyDaoClient;
  proposals: FutarchyProposalsClient;
  balances: FutarchyBalancesClient;
  markets: FutarchyMarketsClient;
}

export interface FutarchyDaoClient {
  fetchAllDaos(): Promise<DaoWithTokens[]>;
  fetchDao(daoAddress: string): Promise<DaoWithTokens | undefined>;
}

export interface FutarchyProposalsClient {
  fetchProposals(dao: DaoAccount): Promise<ProposalWithVaults[]>;
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
    dao: DaoWithTokens,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]>;
  fetchAllConditionalTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey,
    proposalsWithVaults: ProposalWithVaults[]
  ): Promise<TokenWithBalanceWithProposal[]>;
}

// heyyy refactor thus
export interface FutarchyMarketsClient<
  M extends Market = Market,
  O extends Order = Order
> {
  fetchMarket(marketKey: PublicKey): Promise<M | undefined>;
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
