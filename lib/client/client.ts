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
  DaoAccount,
  TokenWithPDA,
  LiquidityAddError,
  ProposalAccounts,
  ProgramVersionLabel,
  ProposalWithFullData,
  Dao,
  ProposalRanking
} from "@/types";
import { SwapType } from "@metadaoproject/futarchy";
import { Observable } from "rxjs";
import {
  ProposalMarketPricesAggregate,
  SpotObservation,
  TwapObservation
} from "@/types/prices";
import { TransactionProcessingUpdate } from "@/types/transactions";
import BN from "bn.js";
import {
  CreateProposalInstruction,
  ProposalOnChainFields,
  MarketParams,
  ProposalDetails,
  ProposalInputs
} from "@/types/createProp";
import { ReactionResponse } from "@/types/reactions";
import { UserPerformance, UserPerformanceFetchRequest } from "@/types/user";
import { prices_chart_data_bool_exp } from "./indexer/__generated__";

export interface FutarchyClient {
  daos: FutarchyDaoClient;
  proposals: FutarchyProposalsClient;
  balances: FutarchyBalancesClient;
  markets: FutarchyMarketsClient;
  socials: FutarchySocialsClient;
}

export interface FutarchyDaoClient {
  fetchAllDaos(): Promise<DaoAggregate[]>;
  fetchDao(
    daoAddress: string,
    protocol: FutarchyProtocol
  ): Promise<DaoAggregate | null>;
  getMinLpToProvide(
    daoAggregate: DaoAggregate
  ): Promise<{ base: BN; quote: BN } | undefined>;
  getTreasuryBalance(
    daoAccount: DaoAccount
  ): Promise<{ total: number; tokens: TokenWithBalance[] }>;
}

export interface FutarchyProposalsClient {
  // autocratClient: AutocratClient,
  fetchProposals(daoAggregate: DaoAggregate): Promise<Proposal[]>;
  deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
  withdraw(
    proposal: ProposalWithFullData
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
  createProposal(
    daoAggregate: DaoAggregate,
    version: ProgramVersionLabel,
    instructionParams: CreateProposalInstruction,
    marketParams: MarketParams,
    proposalDetails: ProposalInputs,
    authId: string
  ): Promise<
    [Observable<TransactionProcessingUpdate>, ProposalOnChainFields] | undefined
  >;
  finalizeProposal(
    proposal: ProposalWithFullData
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
  saveProposalDetails(
    proposalDetails: ProposalDetails,
    dao: Dao,
    version: ProgramVersionLabel,
    authId: string
  ): void;
  updateProposalAccounts(accounts: ProposalAccounts): void;
  mergeConditionalTokensForUnderlyingTokens(
    amount: BN,
    proposal: Proposal,
    underlyingToken: "base" | "quote"
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
  watchReactions?: (
    proposal: string,
    user?: string
  ) => Observable<ReactionResponse>;
  fetchTopProposals(daoSlug: string): Promise<ProposalRanking[]>;
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
    ownerWallet: PublicKey | null,
    baseToken: TokenProps,
    quoteToken: TokenProps,
    proposals: Proposal[],
    passTokenUrl?: string,
    failTokenUrl?: string
  ): Promise<TokenWithBalancePDAAndProposal[]>;
  watchTokenBalance(
    tokenWithPDA: TokenWithPDA,
    authToken?: string
  ): Observable<TokenWithBalance>;
}

export interface FutarchyMarketsClient {
  openbook: FutarchyOrderbookMarketsClient;
  amm: FutarchyAmmMarketsClient;
  fetchMarket(
    request: MarketFetchRequest
  ): Promise<OpenbookMarket | AmmMarket | undefined>;
  watchAllUserOrders(
    owner: PublicKey
  ): Observable<{ orders: Order[]; totalOrders: number }>;
  watchUserOrdersForMarket(
    owner: PublicKey,
    marketAcct: PublicKey
  ): Observable<{ orders: Order[]; totalOrders: number }>;
  watchOrdersForMarket(
    marketAcct: PublicKey
  ): Observable<{ orders: Order[]; totalOrders: number }>;
  fetchTwapPrices(
    marketKey: PublicKey,
    startDate?: Date,
    endDate?: Date
  ): Promise<TwapObservation[]>;
  watchTwapPrices(marketKey: PublicKey): Observable<TwapObservation[]>;
  watchSpotPrices(marketKey: PublicKey): Observable<SpotObservation[]>;
  watchProposalBars(
    proposalAcct: PublicKey
  ): Observable<ProposalMarketPricesAggregate[]>;
  fetchProposalBars(
    proposalAcct: PublicKey
  ): Promise<ProposalMarketPricesAggregate[]>;
  fetchCurrentSpotPrice(marketKey: PublicKey): Promise<SpotObservation>;
  fetchCurrentTwapPrice(marketKey: PublicKey): Promise<TwapObservation[]>;
  watchCurrentTwapPrice(marketKey: PublicKey): Observable<TwapObservation[]>;
  watchCurrentSpotPrice(
    marketKey: PublicKey,
    filters?: prices_chart_data_bool_exp
  ): Observable<SpotObservation>;
  fetchUserOrdersForMarkets(
    owner: PublicKey,
    passMarketAcct: PublicKey,
    failMarketAcct: PublicKey,
    page?: number,
    pageSize?: number
  ): Promise<{ orders: Order[]; totalOrders: number }>;
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
    order: Omit<O, "owner" | "transactionStatus" | "status" | "filled">,
    placeOrderType: PlaceOrderType
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
  cancelOrder(
    market: M,
    order: O
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
}

export interface FutarchyAmmMarketsClient {
  fetchMarket(request: MarketFetchRequest): Promise<Market | undefined>;
  swap(
    ammAddr: AmmMarket,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number,
    slippage: number
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
  mintAndSwap(
    mintAmount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol,
    ammMarket: AmmMarket,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number,
    slippage: number
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
  removeLiquidity(
    ammMarket: AmmMarket,
    lpTokensToBurn: number,
    slippage: number
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
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
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
}

export interface FutarchyUserClient {
  fetchUserPerformance(
    request: UserPerformanceFetchRequest
  ): Promise<UserPerformance[] | undefined>;
}
export interface FutarchySocialsClient {
  addReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string,
    commentId: number | null
  ): Promise<any>;

  removeReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string
  ): Promise<any>;
}

export interface FinalizeProposal {
  finalizeProposal(
    proposal: Proposal
  ): Promise<Observable<TransactionProcessingUpdate> | undefined>;
}

export interface CreateProposal {
  createProposal(
    daoAggregate: DaoAggregate,
    version: ProgramVersionLabel,
    instructionParams: CreateProposalInstruction,
    marketParams: MarketParams,
    url: string,
    authId: string
  ): void;
}
