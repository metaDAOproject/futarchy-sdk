import { PublicKey } from "@solana/web3.js";

export type TokenProps = {
  url?: string;
  publicKey?: string;
  symbol: string;
  decimals?: number;
  name?: string;
};

export type TokenWithBalance = { token: TokenProps; balance: number };

export type TokenWithBalanceWithProposal = TokenWithBalance & {
  proposal: PublicKey;
};
