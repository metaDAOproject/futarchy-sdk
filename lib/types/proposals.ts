import { IdlAccounts, IdlTypes } from "@coral-xyz/anchor";
import { AutocratV0 } from "@/idl/autocrat_v0";
import { AutocratV0 as AutocratV0_1 } from "@/idl/autocrat_v0.1";
import { AutocratV0 as AutocratV0_2 } from "@/idl/autocrat_v0.2";
import {
  AccountWithKey,
  MergeWithOptionalFields,
  FutarchyProtocol,
  VaultAccountWithProtocol,
  DaoAccount,
  Dao,
} from "@/types";

export type ProposalInstruction = MergeWithOptionalFields<
  IdlTypes<AutocratV0_2>["ProposalInstruction"],
  MergeWithOptionalFields<
    IdlTypes<AutocratV0_1>["ProposalInstruction"],
    IdlTypes<AutocratV0>["ProposalInstruction"]
  >
>;
export type ProposalAccountWithKey = AccountWithKey<ProposalAccount>;

export type Proposal = ProposalAccountWithKey & {
  title: string;
  description: string;
};
export type ProposalAccount = MergeWithOptionalFields<
  IdlAccounts<AutocratV0_2>["proposal"],
  MergeWithOptionalFields<
    IdlAccounts<AutocratV0_1>["proposal"],
    IdlAccounts<AutocratV0>["proposal"]
  >
>;

export type ProposalWithVaults = Proposal & {
  dao: Pick<Dao, "daoAccount" | "publicKey">;
  protocol: FutarchyProtocol;
  baseVaultAccount: VaultAccountWithProtocol;
  quoteVaultAccount: VaultAccountWithProtocol;
};
