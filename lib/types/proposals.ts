import { IdlAccounts, IdlTypes } from "@coral-xyz/anchor";
import { AutocratV0 } from "@/idl/autocrat_v0";
import { AutocratV0 as AutocratV0_1 } from "@/idl/autocrat_v0.1";
import { AutocratV0 as AutocratV0_2 } from "@/idl/autocrat_v0.2";
import { Autocrat as AutocratV0_3 } from "@/idl/autocrat_v0.3";
import {
  AccountWithKey,
  MergeWithOptionalFields,
  FutarchyProtocol,
  VaultAccountWithProtocol,
  Dao,
  MarketType
} from "@/types";
import { PublicKey } from "@metaplex-foundation/js";
import { TransactionInstruction } from "@solana/web3.js";

export type ProposalInstruction = MergeWithOptionalFields<
  IdlTypes<AutocratV0_2>["ProposalInstruction"],
  MergeWithOptionalFields<
    IdlTypes<AutocratV0_1>["ProposalInstruction"],
    IdlTypes<AutocratV0>["ProposalInstruction"]
  >
>;

export type ProposalInstructionWithPreinstructions = {
  preInstructions: TransactionInstruction[] | undefined;
  instruction: ProposalInstruction;
};

export type ProposalAccount = MergeWithOptionalFields<
  IdlAccounts<AutocratV0_2>["Proposal"],
  MergeWithOptionalFields<
    IdlAccounts<AutocratV0_1>["proposal"],
    MergeWithOptionalFields<
      IdlAccounts<AutocratV0>["proposal"],
      IdlAccounts<AutocratV0_3>["proposal"]
    >
  >
>;

export type ProposalAccountWithKey = AccountWithKey<ProposalAccount>;

export type ProposalAccountWithKeyNoState = AccountWithKey<
  Omit<ProposalAccount, "state">
>;

// TODO: how to autogenerate type union from rust enum IDL?
export type ProposalState = "pending" | "passed" | "failed";

// TODO we need to add way more here... this is the problem. This needs to sort of match what the UI needs for the most part
export type Proposal = ProposalAccountWithKeyNoState & {
  title: string;
  description: string;
  dao: Pick<Dao, "baseToken" | "quoteToken" | "daoAccount" | "publicKey">;
  protocol: FutarchyProtocol;
  marketType: MarketType;
  baseVaultAccount: VaultAccountWithProtocol;
  quoteVaultAccount: VaultAccountWithProtocol;
  passMarket: PublicKey;
  failMarket: PublicKey;
  proposer: GovernanceParticipant;
  content: string;
  state: ProposalState;
  startSlot: number;
  endSlot: number | null;
  creationDate: Date;
  endDate: Date;
  finalizationDate: Date | null;
  prices: ProposalPrices;
  volume: number;
  tags: string[];
  participants: GovernanceParticipant[];
  reactions: string[];
};

export type GovernanceParticipant = {
  publicKey: string;
  name?: string;
};

export type ProposalPrices = {
  pass: MarketPrices;
  fail: MarketPrices;
};

export type MarketPrices = {
  spot: number;
  twap?: number;
  volume?: number;
};

export type ProposalAccounts = {
  proposer_acct: PublicKey;
  base_cond_vault_acct: PublicKey | null;
  quote_cond_vault_acct: PublicKey | null;
  pass_market_acct: PublicKey | null;
  fail_market_acct: PublicKey | null;
  proposal_acct: PublicKey | null;
};
