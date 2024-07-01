import {
  PublicKey,
  SystemProgram,
  Transaction,
  VersionedTransaction
} from "@solana/web3.js";
import { Bundler } from "./bundles";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";

export class JitoBundler implements Bundler {
  private blockEngineAddress: string;
  constructor(blockEngineAddress: string) {
    this.blockEngineAddress = blockEngineAddress;
  }

  /**
   * Handle signing the txs within this method
   * @param txs
   * @param tipAmount
   * @returns tuple (bundleID, array of signatures)
   */
  public async sendBundle<T extends Transaction | VersionedTransaction>(
    txs: T[],
    signAllTransactions: (txs: T[]) => Promise<T[]>,
    tipSender: PublicKey,
    tipAmount?: number
  ): Promise<[string, string[]]> {
    const tipAccounts = await this.getTipAccounts();
    const tipAccount =
      tipAccounts[Math.floor(Math.random() * tipAccounts.length)];

    // Include logic to add a tip instruction to the transactions
    const transactionsWithTip = txs.map((tx, i) => {
      // Create a transfer instruction to the tip account for the final instruction
      if (tx instanceof Transaction) {
        const transferInstruction = SystemProgram.transfer({
          fromPubkey: tipSender,
          toPubkey: tipAccount,
          lamports: tipAmount ?? 30000
        });
        tx.add(transferInstruction);
      }
      return tx;
    });

    const signedTxsWithTip = await signAllTransactions(transactionsWithTip);

    const serializedTransactions = signedTxsWithTip.map((tx) =>
      bs58.encode(tx.serialize())
    );

    console.log("serializedTransactions", serializedTransactions);

    const response = await fetch(`${this.blockEngineAddress}/api/v1/bundles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "sendBundle",
        params: [serializedTransactions]
      })
    });

    const result = await response.json();
    console.log("jito bundle res", result);
    return [result.result, serializedTransactions];
  }

  async getTipAccounts(): Promise<PublicKey[]> {
    const response = await fetch(`${this.blockEngineAddress}/api/v1/bundles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "getTipAccounts",
        params: []
      })
    });

    const result = await response.json();
    return result.result.map((account: string) => new PublicKey(account));
  }
}
