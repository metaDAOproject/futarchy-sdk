import {
  ComputeBudgetProgram,
  Connection,
  PublicKey,
  Transaction,
  VersionedTransaction,
} from "@solana/web3.js";

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
    connection: Connection
  ) {
    if (!connection || !this.owner || !this.signAllTransactions) {
      throw new Error("Bad wallet connection");
    }

    if (txs.length === 0 || (txs[0] instanceof Array && txs[0].length === 0)) {
      throw new Error("No transactions passed");
    }

    const sequence =
      txs[0] instanceof Array ? (txs as T[][]) : ([txs] as T[][]);

    const blockhask = await connection.getLatestBlockhash();
    const timedTxs = sequence.map((set) =>
      set.map((e: T) => {
        const tx = e;
        if (!(tx instanceof VersionedTransaction)) {
          tx.recentBlockhash = blockhask.blockhash;
          tx.feePayer = this.owner!;
          // Compute limit ix & priority fee ix
          tx.instructions = [
            ComputeBudgetProgram.setComputeUnitLimit({ units: 150_000 }),
            ComputeBudgetProgram.setComputeUnitPrice({
              microLamports: this.priorityFee,
            }),
            ...tx.instructions,
          ];
        }
        return tx;
      })
    );

    try {
      const signedTxs = await this.signAllTransactions(timedTxs.flat());

      // Reconstruct signed sequence
      let i = 0;
      const signedSequence: T[][] = sequence.map((set) =>
        Array.from({ length: set.length }).map(() => signedTxs[i++])
      );

      const signaturesPromises = signedSequence.map((set) =>
        Promise.all(
          set.map((tx) =>
            connection
              .sendRawTransaction(tx.serialize(), { skipPreflight: true })
              .then((txSignature) =>
                connection
                  .confirmTransaction(txSignature)
                  .then(() => txSignature)
              )
          )
        )
      );
      return (await Promise.all(signaturesPromises)).flat();
    } catch (err) {
      console.error("error occured sending txn:", err);
      return [];
    }
  }

  public setPriorityFee(priorityFee: number) {
    this.priorityFee = priorityFee;
  }
}
