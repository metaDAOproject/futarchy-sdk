import { Connection, PublicKey } from "@solana/web3.js";

/**
 * Helper function to find the FinalizeProposal for a finalized proposal so that we can display the finalize proposal transaction link.
 * To reduce the runtime of this function and chance that it continues running, we only execute the logic once instead of in a loop.
 */
export const findFinalizeProposalTransaction = async ({
    connection,
    proposal
}: {
    connection: Connection;
    proposal: PublicKey;
}): Promise<string | undefined> => {
    const confirmedSignatureInfo = await connection.getSignaturesForAddress(proposal, {
        limit: 3,
        before: undefined,
    });

    const signatures = confirmedSignatureInfo.map((i) => i.signature);
    if (signatures.length === 0) return undefined;

    const transactions = await connection.getTransactions(signatures, {
        maxSupportedTransactionVersion: 0,
    });
    const finalizeProposalTransaction = transactions.find((tx) => {
        const possibleError = tx?.meta?.err;
        if (possibleError !== null) return false;
        const logLine = tx?.meta?.logMessages?.filter((log) =>
            log.includes('Instruction: FinalizeProposal'),
        );

        return logLine && logLine.length === 1;
    });

    if (finalizeProposalTransaction) {
        return finalizeProposalTransaction.transaction.signatures[0];
    }
}

export const test = ()=> {
    console.log("test")
}