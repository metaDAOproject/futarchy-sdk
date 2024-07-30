import { PublicKey } from "@solana/web3.js";
import { ProposalWithFullData } from ".";


export type UserPerformanceFetchRequest = {
    userAcct: PublicKey;
}

export type User = {
    userAcct: PublicKey;
}

export type UserPerformance = {
    proposalAcct: PublicKey;
    tokensBought: string
    tokensSold: string;
    volumeBought: string;
    volumeSold: string;
    proposal: ProposalWithFullData;
    createdAt: Date;
    pnl: number;
} & User