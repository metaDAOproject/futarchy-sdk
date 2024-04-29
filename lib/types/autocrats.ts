import { Idl, IdlAccounts, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { AutocratV0 } from "@/idl/autocrat_v0";
import { AutocratV0 as AutocratV0_1 } from "@/idl/autocrat_v0.1";
import { AutocratV0 as AutocratV0_2 } from "@/idl/autocrat_v0.2";
import { AutocratV0 as AutocratV0_3 } from "@/idl/autocrat_v0.3";
import { MergeWithOptionalFields, TokenProps } from "@/types";
import { ConditionalVault } from "@/idl/conditional_vault";
import { OpenbookTwap } from "@/idl/openbook_twap";
import { OpenbookTwapV0_2 } from "@/idl/openbook_twap_v0.2";
import { OpenbookTwapV0_1 } from "@/idl/openbook_twap_v0.1";
import { Autocrat as AutocratV1} from "@metadaoproject/futarchy-ts/dist/types/autocrat";

/**
 * Programs
 */
export type ProgramVersionLabel = "V1" | "V0.3" | "V0.2" | "V0.1" | "V0";
export type ProgramVersion = {
  label: ProgramVersionLabel;
  programId: PublicKey;
  idl: Idl;
  dao: string;
};
export type AutocratProgram =
  | AutocratV0
  | AutocratV0_1
  | AutocratV0_2
  | AutocratV0_3
  | AutocratV1;

export type FutarchyProtocol = {
  key: string;
  deploymentVersion: ProgramVersionLabel;
  autocrat: Program<AutocratProgram>;
  vault: Program<ConditionalVault>;
  pricingModel: Program<OpenbookTwapV0_2 | OpenbookTwapV0_1>;
};

/**
 * DAOs
 */
export type DaoAccount = MergeWithOptionalFields<
  IdlAccounts<AutocratV0_3>["dao"],
  MergeWithOptionalFields<
    IdlAccounts<AutocratV0_2>["dao"],
    MergeWithOptionalFields<
      IdlAccounts<AutocratV0_1>["dao"],
      IdlAccounts<AutocratV0>["dao"]
    >
  >
>;

export type Dao = {
  protocol: FutarchyProtocol;
  publicKey: PublicKey;
  daoAccount: DaoAccount;
  baseToken: TokenProps;
  quoteToken: TokenProps;
};

// we might want to consider changing this to be DaoDetails as the main component and
export type DaoAggregate = {
  daoName: string;
  daoSlug: string;
  daos: Dao[];
};
