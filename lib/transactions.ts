import {
  Commitment,
  ComputeBudgetProgram,
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction
} from "@solana/web3.js";
import {
  SendTransactionResponse,
  TransactionError
} from "./types/transactions";
import { AnchorProvider } from "@coral-xyz/anchor";

type SingleOrArray<T> = T | T[];

export class TransactionSender {
  public owner: PublicKey;
  private signAllTransactions: <T extends Transaction | VersionedTransaction>(
    transactions: T[]
  ) => Promise<T[]>;

  public priorityFee: number;
  constructor(
    owner: PublicKey,
    signAllTransactions: <T extends Transaction | VersionedTransaction>(
      transactions: T[]
    ) => Promise<T[]>,

    priorityFee: number
  ) {
    this.owner = owner;
    this.signAllTransactions = signAllTransactions;
    this.priorityFee = priorityFee;
  }

  static make(
    owner: PublicKey,
    signAllTransactions: <T extends Transaction | VersionedTransaction>(
      transactions: T[]
    ) => Promise<T[]>,
    priorityFee: number
  ): TransactionSender {
    return new TransactionSender(owner, signAllTransactions, priorityFee);
  }
  /**
   * Sends transactions.
   * @param txs A sequence of sets of transactions. Sets are executed simultaneously.
   * @returns A sequence of set of tx signatures.
   */
  async send<T extends Transaction | VersionedTransaction>(
    txs: SingleOrArray<T>[],
    connection: Connection,
    opts?: {
      sequential?: boolean;
      commitment?: Commitment;
      CUs?: SingleOrArray<number>;
      customErrors?: { code: number; name: string; msg: string }[][];
    }
  ): SendTransactionResponse {
    if (!connection || !this.owner || !this.signAllTransactions) {
      throw new Error("Bad wallet connection");
    }

    if (txs.length === 0 || (txs[0] instanceof Array && txs[0].length === 0)) {
      throw new Error("No transactions passed");
    }

    if (opts?.CUs) {
      if (
        (!Array.isArray(opts.CUs) && Array.isArray(txs.length)) ||
        (Array.isArray(opts.CUs) && opts.CUs.length !== txs.length)
      ) {
        throw new Error("CUs length must match transactions length");
      }
    }

    const errors: TransactionError[] = [];
    const signatures: string[] = [];
    try {
      const sequence =
        txs[0] instanceof Array ? (txs as T[][]) : ([txs] as T[][]);

      const latestBlockhash = await connection.getLatestBlockhash();
      const timedTxs = sequence.map((set) =>
        set.map((e: T, i: number) => {
          const tx = e;
          if (!(tx instanceof VersionedTransaction)) {
            tx.recentBlockhash = latestBlockhash.blockhash;
            tx.feePayer = this.owner!;
            // Compute limit ix & priority fee ix
            const units = Array.isArray(opts?.CUs)
              ? (opts.CUs[i] as number)
              : opts?.CUs;
            tx.instructions = [
              //MAX 1M
              ComputeBudgetProgram.setComputeUnitLimit({
                units: units ?? 200_000
              }),
              ComputeBudgetProgram.setComputeUnitPrice({
                microLamports: this.priorityFee
              }),
              ...tx.instructions
            ];
          }
          return tx;
        })
      );

      const signedTxs = await this.signAllTransactions(timedTxs.flat());

      // Reconstruct signed sequence
      let i = 0;
      const signedSequence: T[][] = sequence.map((set) =>
        Array.from({ length: set.length }).map(() => signedTxs[i++])
      );

      if (!opts?.sequential) {
        await Promise.all(
          signedSequence.map(
            async (set) =>
              await Promise.all(
                set.map(async (tx, index) => {
                  const txSignature = await connection.sendRawTransaction(
                    tx.serialize(),
                    { skipPreflight: true }
                  );
                  const confirmation = await connection.confirmTransaction(
                    txSignature,
                    opts?.commitment ?? "confirmed"
                  );
                  if (confirmation.value.err) {
                    //@ts-ignore
                    confirmation.value.err.InstructionError.forEach((error) => {
                      if (error.Custom) {
                        const _error:
                          | { code: number; msg: string; name: string }
                          | undefined = opts?.customErrors?.[index]?.find(
                          (e) => e.code == error.Custom
                        );
                        errors.push({
                          message:
                            _error?.msg ||
                            "Custom program Error, check on explorer.",
                          name: _error?.name || "Anchor Error"
                        });
                      }
                    });
                  }
                  signatures.push(txSignature);
                })
              )
          )
        );
      } else {
        for (const set of signedSequence) {
          set.forEach(async (tx, index) => {
            const txSignature = await connection.sendRawTransaction(
              tx.serialize(),
              { skipPreflight: true }
            );
            if (txSignature) {
              const confirmation = await connection.confirmTransaction(
                txSignature,
                opts?.commitment ?? "confirmed"
              );
              if (confirmation.value.err) {
                //@ts-ignore
                confirmation.value.err.InstructionError.forEach((error) => {
                  if (error.Custom) {
                    const _error:
                      | { code: number; msg: string; name: string }
                      | undefined = opts?.customErrors?.[index]?.find(
                      (e) => e.code == error.Custom
                    );
                    errors.push({
                      message:
                        _error?.msg ||
                        "Custom program Error, check on explorer.",
                      name: _error?.name || "Anchor Error"
                    });
                  }
                });
              }
              signatures.push(txSignature);
            }
          });
        }
      }
    } catch (e: any) {
      errors.push({ message: e.message, name: e.name ?? "Transaction Error" });
    }
    return {
      signatures: signatures,
      errors: errors
    };
  }

  public setPriorityFee(priorityFee: number) {
    this.priorityFee = priorityFee;
  }
}

export async function createVersionedTransaction(
  instructions: TransactionInstruction[],
  rpcProvider: AnchorProvider
) {
  if (!rpcProvider.publicKey)
    throw new Error("Wallet is not connected or public key is not available.");

  const recentBlockhashResponse =
    await rpcProvider.connection.getLatestBlockhash();
  if (!recentBlockhashResponse.blockhash) {
    throw new Error("Failed to get the latest blockhash.");
  }

  const messageV0 = new TransactionMessage({
    payerKey: rpcProvider.publicKey,
    recentBlockhash: recentBlockhashResponse.blockhash,
    instructions
  }).compileToV0Message();

  return new VersionedTransaction(messageV0);
}
