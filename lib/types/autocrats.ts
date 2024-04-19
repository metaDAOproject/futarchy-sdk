import { Idl, IdlAccounts } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { AutocratV0 } from "@/idl/autocrat_v0";
import { AutocratV0 as AutocratV0_1 } from "@/idl/autocrat_v0.1";
import { AutocratV0 as AutocratV0_2 } from "@/idl/autocrat_v0.2";
import { AutocratV0 as AutocratV0_3 } from "@/idl/autocrat_v0.3";
import { MergeWithOptionalFields, TokenProps } from "@/types";

/**
 * Programs
 */
export type ProgramVersionLabel = "V0.3" | "V0.2" | "V0.1" | "V0";
export type ProgramVersion = {
  label: ProgramVersionLabel;
  programId: PublicKey;
  idl: Idl;
};
export type AutocratProgram =
  | AutocratV0
  | AutocratV0_1
  | AutocratV0_2
  | AutocratV0_3;

/**
 * DAOs
 */
export type DaoAccountV0_1 = MergeWithOptionalFields<
  IdlAccounts<AutocratV0>["dao"],
  IdlAccounts<AutocratV0_1>["dao"]
>;
export type DaoAccountV0_2 = MergeWithOptionalFields<
  DaoAccountV0_1,
  IdlAccounts<AutocratV0_2>["dao"]
>;
export type DaoAccount = MergeWithOptionalFields<
  DaoAccountV0_2,
  IdlAccounts<AutocratV0_3>["dao"]
>;
export type DaoWithTokens = {
  daoAccount: DaoAccount;
  baseToken: TokenProps;
  quoteToken: TokenProps;
};
