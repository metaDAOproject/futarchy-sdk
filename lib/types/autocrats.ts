import { Idl, IdlAccounts, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { AutocratV0 } from "@/idl/autocrat_v0";
import { AutocratV0 as AutocratV0_1 } from "@/idl/autocrat_v0.1";
import { AutocratV0 as AutocratV0_2 } from "@/idl/autocrat_v0.2";
import { AutocratV0 as AutocratV0_3 } from "@/idl/autocrat_v0.3";
import { MergeWithOptionalFields, TokenProps } from "@/types";
import { OpenbookTwapV0_2 } from "@/idl/openbook_twap_v0.2";
import { OpenbookTwapV0_1 } from "@/idl/openbook_twap_v0.1";
import { ConditionalVault as ConditionalVaultV1 } from "@/idl/conditional_vault_v1";
import { ConditionalVault as ConditionalVaultV0_2 } from "@/idl/conditional_vault_v0.2";
import { ConditionalVault as ConditionalVaultV0_1 } from "@/idl/conditional_vault_v0.1";
import { ConditionalVault as ConditionalVaultV0 } from "@/idl/conditional_vault_v0.1";
import { Autocrat as AutocratV1 } from "@metadaoproject/futarchy-ts/dist/types/autocrat";

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

export type ConditionalVaultProgram =
  | ConditionalVaultV1
  | ConditionalVaultV0_2
  | ConditionalVaultV0_1
  | ConditionalVaultV0;

export type FutarchyProtocol = {
  key: string;
  deploymentVersion: ProgramVersionLabel;
  autocrat: Program<AutocratProgram>;
  vault: Program<ConditionalVaultProgram>;
  pricingModel: Program<OpenbookTwapV0_2 | OpenbookTwapV0_1>;
};

/**
 * DAOs
 */
export type DaoAccount = MergeWithOptionalFields<
  IdlAccounts<AutocratV0_3>["dao"],
  MergeWithOptionalFields<
    IdlAccounts<AutocratV0_2>["DAO"],
    MergeWithOptionalFields<
      IdlAccounts<AutocratV0_1>["dao"],
      IdlAccounts<AutocratV0>["dao"]
    >
  >
>;

export type Dao = {
  protocol: FutarchyProtocol;
  publicKey: PublicKey;
  daoAccount: Pick<
    DaoAccount,
    "treasury" | "tokenMint" | "usdcMint" | "proposalCount" | "metaMint"
  >;
  baseToken: Omit<TokenProps, "name" | "publicKey" | "url"> & {
    name: string | null;
    publicKey: string | null;
    url: string | null;
  };
  quoteToken: Omit<TokenProps, "name" | "publicKey" | "url"> & {
    name: string | null;
    publicKey: string | null;
    url: string | null;
  };
};

// we might want to consider changing this to be DaoDetails as the main component and
export type DaoAggregate = {
  name: string;
  slug: string;
  daos: Dao[];
  logo?: string | null;
};

/** INDEXER GRAPHQL TYPES */
export type DaoDetails__GQL = {
  name: string | null;
  slug: string | null;
  image_url: string | null;
  daos: Array<{
    program_acct: string;
    dao_acct: string;
    treasury_acct: string | null;
    tokenByBaseAcct: {
      symbol: string;
      decimals: number;
      name: string | null;
      mint_acct: string;
      image_url: string | null;
    } | null;
    tokenByQuoteAcct: {
      symbol: string;
      decimals: number | null;
      name: string | null;
      mint_acct: string | null;
      image_url: string | null;
    } | null;
    proposals_aggregate: {
      aggregate: {
        count: number | null;
      } | null;
    };
  }>;
};
