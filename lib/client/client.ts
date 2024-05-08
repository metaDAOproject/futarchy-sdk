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
  DaoAccount,
} from "@/types";
import { SwapType } from "@metadaoproject/futarchy-ts";
import { Observable } from "rxjs";
import { SpotObservation, TwapObservation } from "@/types/prices";
import { SendTransactionResponse } from "@/types/transactions";
import { BN } from "@coral-xyz/anchor";
import { CreateProposalInstruction, MarketParams, ProposalDetails } from "@/types/createProp";

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
  getTreasuryBalance(daoAccount: DaoAccount): Promise<{ total: number, tokens: TokenWithBalance[] }>
}

export interface FutarchyProposalsClient {
  fetchProposals(daoAggregate: DaoAggregate): Promise<Proposal[]>;
  deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ): SendTransactionResponse;
  withdraw(proposal: Proposal): SendTransactionResponse;
  createProposal(
    daoAggregate: DaoAggregate,
    version: "V0.2" | "V1",
    instructionParams: CreateProposalInstruction,
    marketParams: MarketParams,
    proposalDetails: ProposalDetails
  ): SendTransactionResponse;
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
    ammAddr: PublicKey,
    swapType: SwapType,
    inputAmount: number,
    outputAmountMin: number
  ): SendTransactionResponse;
  removeLiquidity(
    ammAddr: PublicKey,
    lpTokensToBurn: number
  ): SendTransactionResponse;
  addLiquidity(
    ammAddr: PublicKey,
    quoteAmount?: number,
    baseAmount?: number
  ): SendTransactionResponse;
}
