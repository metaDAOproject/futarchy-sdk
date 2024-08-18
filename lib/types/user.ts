import { PublicKey } from "@solana/web3.js";
import { ProposalWithFullData, TokenProps } from ".";

export type UserPerformanceFetchRequest = {
  userAcct: PublicKey | null;
  proposalAcct: PublicKey | null;
  daoSlug: string | null;
};

export type User = {
  userAcct: PublicKey;
};

export type UserPerformance = {
  proposalAcct: PublicKey;
  daoAcct: PublicKey;
  tokensBought: string;
  tokensSold: string;
  volumeBought: string;
  volumeSold: string;
  totalVolume: number;
  tokensBoughtResolvingMarket: string;
  tokensSoldResolvingMarket: string;
  volumeBoughtResolvingMarket: string;
  volumeSoldResolvingMarket: string;
  buyOrderCount: number;
  sellOrderCount: number;
  proposal: Pick<
    ProposalWithFullData,
    | "publicKey"
    | "title"
    | "state"
    | "tags"
    | "finalizationDate"
    | "endDate"
    | "volume"
  > & { account: { number: number } } & { dao: { slug: string } };
  createdAt: Date;
  pnl: number;
} & User;

export type UserRanking = {
  totalVolume: number;
  userAcct: PublicKey;
};

export type UserDeposit = {
  userAcct: PublicKey;
  tokenAmount: number;
  mintAcct: PublicKey;
  txSig: string;
  createdAt: Date;
  token: Pick<TokenProps, "decimals" | "name">;
}

export type ProposalUserAndTradeCount = {
  proposalAcct: PublicKey;
  userCount: number;
  tradeCount: number;
}