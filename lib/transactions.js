"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSender = void 0;
const web3_js_1 = require("@solana/web3.js");
class TransactionSender {
    constructor(owner, signAllTransactions, priorityFee) {
        this.owner = owner;
        this.signAllTransactions = signAllTransactions;
        this.priorityFee = priorityFee;
    }
    static make(owner, signAllTransactions, priorityFee) {
        return new TransactionSender(owner, signAllTransactions, priorityFee);
    }
    /**
     * Sends transactions.
     * @param txs A sequence of sets of transactions. Sets are executed simultaneously.
     * @returns A sequence of set of tx signatures.
     */
    async send(txs, connection) {
        if (!connection || !this.owner || !this.signAllTransactions) {
            throw new Error("Bad wallet connection");
        }
        if (txs.length === 0 || (txs[0] instanceof Array && txs[0].length === 0)) {
            throw new Error("No transactions passed");
        }
        const sequence = txs[0] instanceof Array ? txs : [txs];
        const blockhask = await connection.getLatestBlockhash();
        const timedTxs = sequence.map((set) => set.map((e) => {
            const tx = e;
            if (!(tx instanceof web3_js_1.VersionedTransaction)) {
                tx.recentBlockhash = blockhask.blockhash;
                tx.feePayer = this.owner;
                // Compute limit ix & priority fee ix
                tx.instructions = [
                    web3_js_1.ComputeBudgetProgram.setComputeUnitLimit({ units: 150000 }),
                    web3_js_1.ComputeBudgetProgram.setComputeUnitPrice({
                        microLamports: this.priorityFee,
                    }),
                    ...tx.instructions,
                ];
            }
            return tx;
        }));
        try {
            const signedTxs = await this.signAllTransactions(timedTxs.flat());
            // Reconstruct signed sequence
            let i = 0;
            const signedSequence = sequence.map((set) => Array.from({ length: set.length }).map(() => signedTxs[i++]));
            const signaturesPromises = signedSequence.map((set) => Promise.all(set.map((tx) => connection
                .sendRawTransaction(tx.serialize(), { skipPreflight: true })
                .then((txSignature) => connection
                .confirmTransaction(txSignature)
                .then(() => txSignature)))));
            return (await Promise.all(signaturesPromises)).flat();
        }
        catch (err) {
            console.error("error occured sending txn:", err);
            return [];
        }
    }
    setPriorityFee(priorityFee) {
        this.priorityFee = priorityFee;
    }
}
exports.TransactionSender = TransactionSender;
