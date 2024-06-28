import {
  PublicKey,
  SystemProgram,
  Transaction,
  VersionedTransaction
} from "@solana/web3.js";
import { Bundler } from "./bundles";

export class JitoBundler implements Bundler {
  private blockEngineAddress: string;
  constructor(blockEngineAddress: string) {
    this.blockEngineAddress = blockEngineAddress;
  }

  public async sendBundle<T extends Transaction | VersionedTransaction>(
    txs: T[],
    tipAmount?: number
  ): Promise<string> {
    const tipAccounts = await this.getTipAccounts();
    const tipAccount =
      tipAccounts[Math.floor(Math.random() * tipAccounts.length)];

    // Include logic to add a tip instruction to the transactions
    const transactionsWithTip = txs.map((tx) => {
      // Create a transfer instruction to the tip account
      if (tx instanceof Transaction) {
        const transferInstruction = SystemProgram.transfer({
          fromPubkey: tx.feePayer!,
          toPubkey: tipAccount,
          lamports: tipAmount ?? 1000
        });
        tx.add(transferInstruction);
      }
      return tx;
    });

    const serializedTransactions = transactionsWithTip.map((tx) =>
      Buffer.from(tx.serialize()).toString("base64")
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
    return result.result;
  }

  public async getTipAccounts(): Promise<PublicKey[]> {
    const response = await fetch(
      `${this.blockEngineAddress}/api/v1/tip-accounts`,
      {
        method: "GET"
      }
    );

    const result = await response.json();
    return result.map((account: string) => new PublicKey(account));
  }
}
