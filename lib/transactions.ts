import {
  Commitment,
  ComputeBudgetProgram,
  Connection,
  PublicKey,
  Transaction,
  VersionedTransaction,
} from "@solana/web3.js";
import { SendTransactionResponse, TransactionError } from "./types/transactions";

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
    alreadySignedTxs?: T[],
    opts?: { sequential: boolean, commitment: Commitment }
  ): SendTransactionResponse {
    if (!connection || !this.owner || !this.signAllTransactions) {
      throw new Error("Bad wallet connection");
    }

    if (txs.length === 0 || (txs[0] instanceof Array && txs[0].length === 0)) {
      throw new Error("No transactions passed");
    }

    const sequence =
      txs[0] instanceof Array ? (txs as T[][]) : ([txs] as T[][]);

    const latestBlockhash = await connection.getLatestBlockhash();
    const timedTxs = sequence.map((set) =>
      set.map((e: T) => {
        const tx = e;
        if (!(tx instanceof VersionedTransaction)) {
          tx.recentBlockhash = latestBlockhash.blockhash;
          tx.feePayer = this.owner!;
          // Compute limit ix & priority fee ix
          tx.instructions = [
            //MAX 1M
            ComputeBudgetProgram.setComputeUnitLimit({ units: 1_000_000 }),
            ComputeBudgetProgram.setComputeUnitPrice({
              microLamports: this.priorityFee,
            }),
            ...tx.instructions,
          ];
        }
        return tx;
      })
    );

    const errors: TransactionError[] = []
    const signatures: string[] = [];
    const flatTx = await this.signAllTransactions(timedTxs.flat()).catch(e => { errors.push({ name: e.name, message: e.message }); return })
    if (!flatTx) return { signatures: signatures, errors: errors }

    const signedTxs = alreadySignedTxs ? [...flatTx, ...alreadySignedTxs] : flatTx
    // Reconstruct signed sequence
    let i = 0;
    const signedSequence: T[][] = sequence.map((set) =>
      Array.from({ length: set.length }).map(() => signedTxs[i++])
    );

    if (!opts?.sequential) {
      signedSequence.map((set) =>
        Promise.all(
          set.map((tx) => {
            console.log(tx)
            return connection
              .sendRawTransaction(tx.serialize(), { skipPreflight: true })
              .then((txSignature) =>
                connection
                  .confirmTransaction(txSignature, opts?.commitment ?? "confirmed")
                  .then(() => signatures.push(txSignature))
              )
          }
          )
        )
      );
    }
    else {
      for (const set of signedSequence) {
        for (const tx of set) {
          try {
            const txSignature = await connection.sendRawTransaction(tx.serialize(), { skipPreflight: true })
            if (txSignature) {
              try {
                const confirmation = await connection.confirmTransaction(txSignature, opts.commitment ?? "confirmed");
                console.log(confirmation)
                signatures.push(txSignature); // Push only on successful confirmation
              } catch (confirmationError) {
                //TO DO Better error handling
                console.error(`Transaction failed to confirm: ${confirmationError}`);
                errors.push(confirmationError as any)
              }
            }

          } catch (err) {
            if (err instanceof Error) {
              errors.push(err)
            }
          }
        }
      }
    }

    return {
      signatures: signatures,
      errors: errors
    }
  }

  public setPriorityFee(priorityFee: number) {
    this.priorityFee = priorityFee;
  }
}
