import { PublicKey } from "@solana/web3.js";

export type TokenProps = {
  url: string | null;
  publicKey: string | null;
  symbol: string;
  decimals: number;
  name: string | null;
};

export type TokenWithBalance = { token: TokenProps; balance: number };

export type TokenWithBalanceWithProposal = TokenWithBalance & {
  proposal: PublicKey;
};
