import { Transaction, VersionedTransaction } from "@solana/web3.js";

export interface Bundler {
  sendBundle<T extends Transaction | VersionedTransaction>(
    txs: T[]
  ): Promise<string>;
}
