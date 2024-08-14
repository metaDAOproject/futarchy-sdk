import { Idl, IdlAccounts, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { AutocratV0 } from "@/idl/autocrat_v0";
import { AutocratV0 as AutocratV0_1 } from "@/idl/autocrat_v0.1";
import { AutocratV0 as AutocratV0_2 } from "@/idl/autocrat_v0.2";
import { Autocrat as AutocratV0_3 } from "@/idl/autocrat_v0.3";
import { MergeWithOptionalFields, TokenProps } from "@/types";
import { OpenbookTwapV0_2 } from "@/idl/openbook_twap_v0.2";
import { OpenbookTwapV0_1 } from "@/idl/openbook_twap_v0.1";
import { ConditionalVault as ConditionalVaultV0_3 } from "@/idl/conditional_vault_v0.3";
import { ConditionalVault as ConditionalVaultV0_2 } from "@/idl/conditional_vault_v0.2";
import { ConditionalVault as ConditionalVaultV0_1 } from "@/idl/conditional_vault_v0.1";
import { ConditionalVault as ConditionalVaultV0 } from "@/idl/conditional_vault_v0.1";

/**
 * Programs
 */
export type ProgramVersionLabel = "V0.3" | "V0.2" | "V0.1" | "V0";
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
  | AutocratV0_3;

export type ConditionalVaultProgram =
  | ConditionalVaultV0_3
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
    | "treasury"
    | "tokenMint"
    | "usdcMint"
    | "metaMint"
    | "slotsPerProposal"
    | "passThresholdBps"
    | "minBaseFutarchicLiquidity"
    | "minQuoteFutarchicLiquidity"
    | "twapInitialObservation"
    | "twapMaxObservationChangePerUpdate"
  >;
  baseToken: Omit<TokenProps, "name" | "publicKey" | "url"> & {
    name: string | null;
    publicKey: string | null;
    url: string | null;
    supply: number | null;
  };
  quoteToken: Omit<TokenProps, "name" | "publicKey" | "url"> & {
    name: string | null;
    publicKey: string | null;
    url: string | null;
    supply: number | null;
  };
};

// we might want to consider changing this to be DaoDetails as the main component and
export type DaoAggregate = {
  name: string;
  slug: string;
  daos: Dao[];
  socials: DaoSocialLink[];
  logo?: string | null;
  xAccount?: string | null;
  github?: string | null;
  discord?: string | null;
  description?: string | null;
  url?: string | null;
  failTokenImageUrl?: string | null;
  passTokenImageUrl?: string | null;
  lpTokenImageUrl?: string | null;
  joinedAt: Date | null;
  proposalCount?: number;
};

export type DaoSocialLink = {
  id: string;
  value: string;
};

/** INDEXER GRAPHQL TYPES */
export type DaoDetails__GQL = {
  name: string | null;
  slug: string | null;
  image_url: string | null;
  description: string | null;
  socials?: any | null;
  url: string | null;
  x_account: string | null;
  github: string | null;
  fail_token_image_url: string | null;
  pass_token_image_url: string | null;
  lp_token_image_url: string | null;
  daos: Array<{
    program_acct: string;
    dao_acct: string;
    pass_threshold_bps: number | null;
    slots_per_proposal: number | null;
    treasury_acct: string | null;
    created_at: string | null;
    tokenByBaseAcct: {
      symbol: string;
      decimals: number;
      name: string | null;
      mint_acct: string;
      image_url: string | null;
      supply: number | null;
    } | null;
    tokenByQuoteAcct: {
      symbol: string;
      decimals: number | null;
      name: string | null;
      mint_acct: string | null;
      image_url: string | null;
      supply: number | null;
    } | null;
    proposals_aggregate: {
      aggregate: {
        count: number | null;
      } | null;
    };
  }>;
};
