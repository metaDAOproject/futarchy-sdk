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
    tokensBought: BigInt;
    tokensSold: BigInt;
    volumeBought: BigInt;
    volumeSold: BigInt;
    totalVolume: BigInt;
    proposal: ProposalWithFullData;
    createdAt: Date;
    pnl: number;
} & User