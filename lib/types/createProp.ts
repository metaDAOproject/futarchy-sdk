import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { ProposalInstruction } from ".";

export type CreateProposalInstruction =
  | { type: "memo"; message: string }
  | {
      type: "transfer";
      amount: number;
      destination: PublicKey;
      mint: PublicKey;
    };

export type ProposalInstructionWithPreinstructions = {
  preInstructions: TransactionInstruction[] | undefined;
  instruction: ProposalInstruction;
};

export type AmmMarketParams = { baseLiquidity: number; quoteLiquidity: number };
export type OpenbookMarketParams = { slot: number };

export type ProposalInputs = {
  title: string;
  content: string;
  description?: string;
  categories?: { category: string }[];
};

export type ProposalOnChainFields = {
  proposalAcct: PublicKey;
  baseCondVaultAcct: PublicKey;
  quoteCondVaultAcct: PublicKey;
  passMarketAcct: PublicKey;
  failMarketAcct: PublicKey;
};

export type ProposalDetails = ProposalInputs & {
  slug: string;
  proposerAcct: PublicKey;
} & ProposalOnChainFields;
export type MarketParams = AmmMarketParams | OpenbookMarketParams;
