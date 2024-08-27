import { PublicKey } from "@solana/web3.js";

import {
  JsonMetadata,
  MetadataAccountData
} from "@metaplex-foundation/mpl-token-metadata";

export type TokenProps = {
  url: string | null;
  publicKey: string | null;
  symbol: string;
  decimals: number;
  name: string | null;
};

export type TokenWithBalance = { token: TokenProps; balance: number };

export type TokenWithBalancePDAAndProposal = TokenWithBalance & {
  proposal: PublicKey;
  pda: PublicKey;
};

export type TokenWithNullableBalancePDAAndProposal = Omit<
  TokenWithBalancePDAAndProposal,
  "pda"
> & { pda: PublicKey | null };

export type TokenWithPDA = {
  token: TokenProps;
  pda: PublicKey;
};

export type TokenMetadataSource =
  | "jup-list"
  | "metaplex"
  | "token2022"
  | "fallback";

export type TokenMetadataResponse = TokenProps & {
  isFallback?: boolean;
  source: TokenMetadataSource;
};

export type TokenAccountMetadata = MetadataAccountData & { json: JsonMetadata };
export { Metadata as MetaplexMetadata } from "@metaplex-foundation/mpl-token-metadata";
