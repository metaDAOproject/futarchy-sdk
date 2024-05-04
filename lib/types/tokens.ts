import { PublicKey } from "@solana/web3.js";

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

export type TokenWithPDA = {
  token: TokenProps;
  pda: PublicKey;
};

export type TokenMetadataSource =
  | "jup-list"
  | "metaplex"
  | "token2022"
  | "fallback";
