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
  private signTransaction: <T extends Transaction | VersionedTransaction>(transaction: T) => Promise<T>

  public priorityFee: number;
  constructor(
    owner: PublicKey,
    signAllTransactions: <T extends Transaction | VersionedTransaction>(
      transactions: T[]
    ) => Promise<T[]>,
    signTransaction: <T extends Transaction | VersionedTransaction>(transaction: T) => Promise<T>,

    priorityFee: number
  ) {
    this.owner = owner;
    this.signAllTransactions = signAllTransactions;
    this.signTransaction = signTransaction;
    this.priorityFee = priorityFee;
  }

  static make(
    owner: PublicKey,
    signAllTransactions: <T extends Transaction | VersionedTransaction>(
      transactions: T[]
    ) => Promise<T[]>,
    signTransaction: <T extends Transaction | VersionedTransaction>(transaction: T) => Promise<T>,
    priorityFee: number
  ): TransactionSender {
    return new TransactionSender(owner, signAllTransactions, signTransaction, priorityFee);
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
          // console.log(tx.feePayer)
          tx.feePayer = this.owner!;
          // console.log(tx.feePayer)
          // Compute limit ix & priority fee ix
          tx.instructions = [
            //MAX 1M
            ComputeBudgetProgram.setComputeUnitLimit({ units: 1_000_000 }),
            ComputeBudgetProgram.setComputeUnitPrice({
              microLamports: this.priorityFee,
            }),
            ...tx.instructions,
          ];
          // console.log(tx.verifySignatures())
          // this.signTransaction(tx)


        }
        return tx;
      })
    );

    try {
      // const signedTxs = timedTxs.flat()
      const flatTx = await this.signAllTransactions(timedTxs.flat())
      const signedTxs = alreadySignedTxs ? [...flatTx, ...alreadySignedTxs]: flatTx 
      // Reconstruct signed sequence
      let i = 0;
      const signedSequence: T[][] = sequence.map((set) =>
        Array.from({ length: set.length }).map(() => signedTxs[i++])
      );
      console.log(signedSequence)
      const signaturesPromises = signedSequence.map((set) =>
        Promise.all(
          set.map((tx) =>{
            console.log(tx)
            return connection
              .sendRawTransaction(tx.serialize(), { skipPreflight: true })
              .then((txSignature) => 
                connection
                  .confirmTransaction(txSignature)
                  .then(() => txSignature)
            
              )
          }
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
