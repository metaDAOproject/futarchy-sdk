import { PublicKey } from "@solana/web3.js";
import { ProposalWithFullData } from ".";

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
  tokensBought: string;
  tokensSold: string;
  volumeBought: string;
  volumeSold: string;
  totalVolume: number;
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
