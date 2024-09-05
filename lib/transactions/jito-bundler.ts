import {
  PublicKey,
  SystemProgram,
  Transaction,
  VersionedTransaction
} from "@solana/web3.js";
import { Bundler } from "./bundles";
import bs58 from 'bs58';
import { TransactionMessage } from "@solana/web3.js";
import { Message } from "@solana/web3.js";
import {
  convertCompiledInstruction,
  convertTransactionInstruction
} from "./helpers";

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
    const transactionsWithTip = await Promise.all(
      txs.map(async (tx, i) => {
        // Create a transfer instruction to the tip account for the final instruction
        if (tx instanceof VersionedTransaction) {
          const msg = Message.from(tx.message.serialize());
          if (i === txs.length - 1) {
            const transferInstruction = SystemProgram.transfer({
              fromPubkey: tipSender,
              toPubkey: tipAccount,
              lamports: tipAmount ?? 9000
            });
            msg.instructions.push(
              convertTransactionInstruction(
                transferInstruction,
                msg.getAccountKeys().staticAccountKeys
              )
            );
          }
          const newMsg = new TransactionMessage({
            instructions: msg.instructions.map((i) =>
              convertCompiledInstruction(
                i,
                msg.programIds()[i.programIdIndex],
                msg.accountKeys
              )
            ),
            recentBlockhash: msg.recentBlockhash,
            payerKey: tipSender
          }).compileToV0Message();
          tx.message = newMsg;
        } else {
          if (i === txs.length - 1) {
            const transferInstruction = SystemProgram.transfer({
              fromPubkey: tipSender,
              toPubkey: tipAccount,
              lamports: tipAmount ?? 7500
            });
            tx.add(transferInstruction);
          }
          tx.feePayer = tipSender;
        }

        return tx;
      })
    );

    const signedTxsWithTip = await signAllTransactions(transactionsWithTip);

    const serializedTransactions = signedTxsWithTip.map((tx) =>
      bs58.encode(tx.serialize())
    );

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

    const res = (await response.json()) as { result: string };
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const { result } = await this.getBundleStatuses(res.result);
        if (!result?.value?.[0]) {
          reject("bundle status response empty");
        } else {
          resolve([res.result, result.value[0].transactions]);
        }
      }, 12_000); // waiting a bit for the bundle to register to query it
    });
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
  async getBundleStatuses(bundleId: string): Promise<JitoBundleStatusResponse> {
    const response = await fetch(`${this.blockEngineAddress}/api/v1/bundles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "getBundleStatuses",
        params: [[bundleId]]
      })
    });

    return await response.json();
  }
}
