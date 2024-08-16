import {
  Commitment,
  ComputeBudgetProgram,
  Connection,
  Context,
  PublicKey,
  SignatureResult,
  Transaction,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction
} from "@solana/web3.js";
import {
  SendTransactionResponse,
  TransactionError,
  TransactionDisplayMetadata,
  TransactionProcessingUpdate,
  SendTransactionOptions
} from "../types/transactions";
import { AnchorProvider } from "@coral-xyz/anchor";
import { Observable, Subscriber, shareReplay } from "rxjs";
import { Bundler } from "./bundles";

type SingleOrArray<T> = T | T[];

const COMMITMENTS_TO_WATCH: Commitment[] = ["confirmed", "finalized"];

export class TransactionSender {
  public owner: PublicKey;
  private signAllTransactions: <T extends Transaction | VersionedTransaction>(
    transactions: T[]
  ) => Promise<T[]>;

  public priorityFee: number;
  public onTransactionUpdate?: (update: TransactionProcessingUpdate) => void;
  private bundler?: Bundler;
  constructor(
    owner: PublicKey,
    signAllTransactions: <T extends Transaction | VersionedTransaction>(
      transactions: T[]
    ) => Promise<T[]>,

    priorityFee: number,
    onTransactionUpdate?: (update: TransactionProcessingUpdate) => void,
    bundler?: Bundler
  ) {
    this.owner = owner;
    this.signAllTransactions = signAllTransactions;
    this.priorityFee = priorityFee;
    this.onTransactionUpdate = onTransactionUpdate;
    this.bundler = bundler;
  }

  static make(
    owner: PublicKey,
    signAllTransactions: <T extends Transaction | VersionedTransaction>(
      transactions: T[]
    ) => Promise<T[]>,
    priorityFee: number,
    onTransactionUpdate?: (update: TransactionProcessingUpdate) => void,
    bundler?: Bundler
  ): TransactionSender {
    return new TransactionSender(
      owner,
      signAllTransactions,
      priorityFee,
      onTransactionUpdate,
      bundler
    );
  }

  private async handleTransactionUpdate(
    update: TransactionProcessingUpdate,
    connection: Connection,
    signatureSubscriptionIds: number[],
    subscriber: Subscriber<TransactionProcessingUpdate>
  ) {
    if (update.status === "failed") {
      //TODO stop subscribing
      await Promise.all(
        signatureSubscriptionIds.map(async (s) =>
          connection.removeSignatureListener(s)
        )
      );
    }
    this.onTransactionUpdate?.(update);
    subscriber.next(update);
  }

  send<T extends Transaction | VersionedTransaction>(
    tx: T[],
    connection: Connection,
    opts?: SendTransactionOptions,
    displayMetadata?: TransactionDisplayMetadata
  ): Observable<TransactionProcessingUpdate> {
    const obs = new Observable<TransactionProcessingUpdate>((subscriber) => {
      let signatureSubscriptionIds: number[] = [];
      let txnFinalizationTimeout: Timer | null;

      const innerSendPromise =
        opts?.useBundler && this.bundler
          ? this.sendInnerAsBundle(tx, connection, opts)
          : this.sendInner(tx, connection, opts);
      innerSendPromise
        .then((sendRes) => {
          if ((sendRes?.errors?.length ?? 0) > 0) {
            if (
              sendRes?.errors?.some(
                (e) => e.name === "WalletSignTransactionError"
              )
            ) {
              const txUpdate: TransactionProcessingUpdate = {
                signature: sendRes?.signatures[0] ?? "",
                errors: sendRes?.errors ?? [],
                status: "unsigned",
                displayMetadata
              };
              this.handleTransactionUpdate(
                txUpdate,
                connection,
                signatureSubscriptionIds,
                subscriber
              );
              return;
            }
            const txUpdate: TransactionProcessingUpdate = {
              signature: sendRes?.signatures[0] ?? "",
              errors: sendRes?.errors ?? [],
              status: "failed",
              displayMetadata
            };
            this.handleTransactionUpdate(
              txUpdate,
              connection,
              signatureSubscriptionIds,
              subscriber
            );
            return;
          }
          if (!sendRes?.signatures[0]) {
            const txUpdate: TransactionProcessingUpdate = {
              signature: "",
              errors: [
                {
                  message: "no signature returned",
                  name: "Signature Missing"
                }
              ],
              status: "failed",
              displayMetadata
            };
            this.handleTransactionUpdate(
              txUpdate,
              connection,
              signatureSubscriptionIds,
              subscriber
            );
            return;
          }

          const txSignature = sendRes.signatures[0];
          this.handleTransactionUpdate(
            {
              status: "sent",
              errors: [],
              signature: txSignature,
              displayMetadata
            },
            connection,
            signatureSubscriptionIds,
            subscriber
          );

          signatureSubscriptionIds = COMMITMENTS_TO_WATCH.map((s) => {
            return connection.onSignature(
              txSignature,
              (signatureResult: SignatureResult, _context: Context) => {
                // check for confirmed status
                if (s === "confirmed") {
                  // setting a timeout to emit "finalized" if subscription fails
                  txnFinalizationTimeout = setTimeout(() => {
                    this.handleSuccessfulSignature(
                      connection,
                      txSignature,
                      displayMetadata,
                      signatureSubscriptionIds,
                      subscriber
                    );
                  }, 18_000);
                }

                this.handleSignatureResult(
                  txSignature,
                  signatureResult,
                  connection,
                  signatureSubscriptionIds,
                  subscriber,
                  displayMetadata
                ).then((txUpdate) => {
                  if (
                    txUpdate &&
                    txUpdate.status === "finalized" &&
                    txnFinalizationTimeout
                  ) {
                    // if we got a finalized txn from subscription, we can clear out the timeout
                    clearTimeout(txnFinalizationTimeout);
                  }
                });
              },
              s
            );
          });

          return sendRes;
        })
        .catch((e) => {
          const error = {
            message: JSON.stringify(e),
            name: "general error"
          };
          this.handleTransactionUpdate(
            {
              signature: "",
              errors: [error],
              status: "failed",
              displayMetadata
            },
            connection,
            signatureSubscriptionIds,
            subscriber
          );
          if (txnFinalizationTimeout) {
            clearTimeout(txnFinalizationTimeout);
          }
          return {
            signatures: [],
            errors: [error]
          };
        });
    });
    return obs.pipe(shareReplay());
  }

  private async handleSignatureResult(
    txSignature: string,
    signatureResult: SignatureResult,
    connection: Connection,
    signatureSubscriptionIds: number[],
    txObserverSubscriber: Subscriber<TransactionProcessingUpdate>,
    displayMetadata?: TransactionDisplayMetadata
  ) {
    if (signatureResult.err) {
      const errors =
        typeof signatureResult.err === "string"
          ? [{ message: signatureResult.err, name: signatureResult.err }]
          : [
              {
                message: JSON.stringify(signatureResult.err),
                name: JSON.stringify(signatureResult.err)
              }
            ];
      const txUpdate: TransactionProcessingUpdate = {
        signature: txSignature,
        errors: errors,
        status: "failed",
        displayMetadata
      };
      this.handleTransactionUpdate(
        txUpdate,
        connection,
        signatureSubscriptionIds,
        txObserverSubscriber
      );
      return;
    }

    return await this.handleSuccessfulSignature(
      connection,
      txSignature,
      displayMetadata,
      signatureSubscriptionIds,
      txObserverSubscriber
    );
  }

  private async handleSuccessfulSignature(
    connection: Connection,
    txSignature: string,
    displayMetadata: TransactionDisplayMetadata | undefined,
    signatureSubscriptionIds: number[],
    txObserverSubscriber: Subscriber<TransactionProcessingUpdate>
  ) {
    const statusRes = await connection.getSignatureStatus(txSignature);
    const status = statusRes.value;
    if (status?.confirmationStatus) {
      const txUpdate: TransactionProcessingUpdate = {
        signature: txSignature,
        errors: [],
        status: status.confirmationStatus,
        displayMetadata
      };
      this.handleTransactionUpdate(
        txUpdate,
        connection,
        signatureSubscriptionIds,
        txObserverSubscriber
      );
      return txUpdate;
    } else {
      // error
      console.warn("tx signature update is missing status");
    }
  }

  async signTransactions<T extends Transaction | VersionedTransaction>(
    txSequence: T[][],
    connection: Connection,
    opts?: SendTransactionOptions
  ): Promise<T[]> {
    const latestBlockhash = await connection.getLatestBlockhash();
    const timedTxs = txSequence.map((set) =>
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

    if (opts?.signSeparately) {
      return (
        await Promise.all(
          timedTxs.flat().map(async (t) => this.signAllTransactions([t]))
        )
      ).flat();
    }

    return await this.signAllTransactions(timedTxs.flat());
  }

  /**
   * Sends transactions.
   * @param txs A sequence of sets of transactions. Sets are executed simultaneously.
   * @returns A sequence of set of tx signatures.
   */
  async sendInner<T extends Transaction | VersionedTransaction>(
    txs: SingleOrArray<T>[],
    connection: Connection,
    opts?: SendTransactionOptions
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
      const signedTxs = await this.signTransactions(sequence, connection, opts);

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

  async sendInnerAsBundle<T extends Transaction | VersionedTransaction>(
    txs: T[],
    connection: Connection,
    opts?: SendTransactionOptions
  ): SendTransactionResponse {
    if (!connection || !this.owner || !this.signAllTransactions) {
      throw new Error("Bad wallet connection");
    }

    if (txs.length === 0 || (txs[0] instanceof Array && txs[0].length === 0)) {
      throw new Error("No transactions passed");
    }

    if (!this.bundler) {
      throw new Error("trying to send bundler but no bundler impl included");
    }

    const errors: TransactionError[] = [];
    const signatures: string[] = [];
    try {
      // send with bundler
      const [_, txSignatures] = await this.bundler?.sendBundle(
        txs,
        (txs) => this.signTransactions([txs], connection, opts) as Promise<T[]>,
        this.owner,
        undefined
      );

      // might just need to return signatures properly
      signatures.push(...txSignatures.toReversed());
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
