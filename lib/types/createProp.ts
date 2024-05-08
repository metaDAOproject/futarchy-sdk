import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { ProposalInstruction } from ".";

export type CreateProposalInstruction =
    | { type: "memo"; message: string }
    | { type: "transfer"; amount: number, destination: PublicKey, mint: PublicKey };


export type ProposalInstructionWithPreinstructions = { preInstructions: (TransactionInstruction[] | undefined), instruction: ProposalInstruction }

export type AmmMarketParams = { baseLiquidity: number, quoteLiquidity: number }
export type OpenbookMarketParams = { slot: number }

export type ProposalDetails = {
    title: string,
    content: string,
    description?: string,
    categories?: string[],
}
export type MarketParams = AmmMarketParams | OpenbookMarketParams