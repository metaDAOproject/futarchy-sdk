import { AccountWithKey, MergeWithOptionalFields } from "../types";
import { IdlAccounts, IdlTypes } from "@coral-xyz/anchor";
import { AutocratV0 } from "@/idl/autocrat_v0";
import { AutocratV0 as AutocratV0_1 } from "@/idl/autocrat_v0.1";
import { VaultAccount } from "@/types";

export type ProposalInstruction = MergeWithOptionalFields<
  IdlTypes<AutocratV0>["ProposalInstruction"],
  IdlTypes<AutocratV0_1>["ProposalInstruction"]
>;
export type ProposalAccountWithKey = AccountWithKey<ProposalAccount>;

export type Proposal = ProposalAccountWithKey & {
  title: string;
  description: string;
};
export type ProposalAccount = MergeWithOptionalFields<
  IdlAccounts<AutocratV0>["proposal"],
  IdlAccounts<AutocratV0_1>["proposal"]
>;

export type ProposalWithVaults = Proposal & {
  baseVaultAccount: VaultAccount;
  quoteVaultAccount: VaultAccount;
};
