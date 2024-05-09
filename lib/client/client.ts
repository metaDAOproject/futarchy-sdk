import { PublicKey } from "@solana/web3.js";
import {
  DaoAggregate,
  TokenWithBalance,
  TokenWithBalancePDAAndProposal,
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
  LiquidityAddError,
  TokenWithPDA,
  DaoAccount,
} from "@/types";
import { SwapType } from "@metadaoproject/futarchy-ts";
import { Observable } from "rxjs";
import { SpotObservation, TwapObservation } from "@/types/prices";
import { SendTransactionResponse } from "@/types/transactions";
import { BN } from "@coral-xyz/anchor";

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
  getMinLpToProvide(daoAggregate: DaoAggregate): Promise<{ base: BN, quote: BN } | undefined>;
  getTreasuryBalance(daoAccount: DaoAccount): Promise<{ total: number, tokens: { mint: string, amount: number }[]}>
}

export interface FutarchyProposalsClient {
  fetchProposals(daoAggregate: DaoAggregate): Promise<Proposal[]>;
  deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ): SendTransactionResponse;
  withdraw(proposal: Proposal): SendTransactionResponse;
  createProposal(daoAggregate: DaoAggregate): SendTransactionResponse;
  createProposalV02(daoAggregate: DaoAggregate): SendTransactionResponse;
}

export interface FutarchyBalancesClient {
  getDaoAggregateMainTokensByMint(
    daoAggregate: DaoAggregate,
    owner: PublicKey | null
  ): Map<string, Pick<TokenWithPDA, "token"> & { pda: PublicKey | null }>;
  fetchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]>;
  watchMainTokenWalletBalances(
    dao: DaoAggregate,
    ownerWallet: PublicKey
  ): Observable<TokenWithBalance>[];
  getConditionalTokensFromProposals(
    proposals: Proposal[],
    owner: PublicKey,
    quoteToken: TokenProps,
    baseToken: TokenProps
  ): Array<TokenWithPDA & { proposal: PublicKey }>;
  fetchAllConditionalTokenWalletBalances(
    ownerWallet: PublicKey,
    quoteToken: TokenProps,
    baseToken: TokenProps,
    proposals: Proposal[]
  ): Promise<TokenWithBalancePDAAndProposal[]>;
  watchTokenBalance(tokenWithPDA: TokenWithPDA): Observable<TokenWithBalance>;
}

export interface FutarchyMarketsClient {
  openbook: FutarchyOrderbookMarketsClient;
  amm: FutarchyAmmMarketsClient;
  fetchMarket(
    request: MarketFetchRequest
  ): Promise<OpenbookMarket | AmmMarket | undefined>;
  watchTwapPrices(marketKey: PublicKey): Observable<TwapObservation[]>;
  watchSpotPrices(marketKey: PublicKey): Observable<SpotObservation[]>;
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
  ): SendTransactionResponse;
  cancelOrder(market: M, order: O): SendTransactionResponse;
}

export interface FutarchyAmmMarketsClient {
  fetchMarket(request: MarketFetchRequest): Promise<Market | undefined>;
  swap(
    ammAddr: AmmMarket,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number,
    slippage: number
  ): SendTransactionResponse;
  removeLiquidity(
    ammMarket: AmmMarket,
    lpTokensToBurn: number,
    slippage: number
  ): SendTransactionResponse;
  validateAddLiquidity(
    ammMarket: AmmMarket,
    quoteAmount: number,
    maxBaseAmount: number,
    slippage: number,
    userBaseBalance?: number,
    userQuoteBalance?: number
  ): LiquidityAddError | null;
  addLiquidity(
    ammAddr: AmmMarket,
    quoteAmount: number,
    maxBaseAmount: number,
    slippage: number
  ): SendTransactionResponse;
}
