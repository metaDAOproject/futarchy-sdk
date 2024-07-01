import { PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";

export interface Bundler {
  sendBundle<T extends Transaction | VersionedTransaction>(
    txs: T[],
    signAllTransactions: (txs: T[]) => Promise<T[]>,
    tipSender: PublicKey,
    tipAmount?: number
  ): Promise<[string, string[]]>;
}
