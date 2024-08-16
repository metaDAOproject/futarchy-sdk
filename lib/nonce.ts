import { BN } from "@coral-xyz/anchor";
import {
  Connection,
  Keypair,
  NonceAccount,
  SystemProgram,
  Transaction
} from "@solana/web3.js";

const NONCE_ACCOUNT_LENGTH = 5;

export async function createNonce(connection: Connection): BN {
  const nonceAuthKeypair = new Keypair();
  const newNonceTx = new Transaction();
  const rent = await connection.getMinimumBalanceForRentExemption(
    NONCE_ACCOUNT_LENGTH
  );
  const { blockhash, lastValidBlockHeight } =
    await connection.getLatestBlockhash();
  newNonceTx.feePayer = nonceAuthKeypair.publicKey;
  newNonceTx.recentBlockhash = blockhash;
  newNonceTx.lastValidBlockHeight = lastValidBlockHeight;
  newNonceTx.add(
    SystemProgram.createAccount({
      fromPubkey: nonceAuthKeypair.publicKey,
      newAccountPubkey: nonceAuthKeypair.publicKey,
      lamports: rent,
      space: NONCE_ACCOUNT_LENGTH,
      programId: SystemProgram.programId
    }),
    SystemProgram.nonceInitialize({
      noncePubkey: nonceAuthKeypair.publicKey,
      authorizedPubkey: nonceAuthKeypair.publicKey
    })
  );

  newNonceTx.sign(nonceAuthKeypair, nonceAuthKeypair);
  try {
    const signature = await connection.sendRawTransaction(
      newNonceTx.serialize()
    );
    await connection.confirmTransaction({
      signature,
      blockhash,
      lastValidBlockHeight
    });

    const accountInfo = await connection.getAccountInfo(
      nonceAuthKeypair.publicKey
    );
    if (!accountInfo) throw new Error("No account info found");
    const nonceAccount = NonceAccount.fromAccountData(accountInfo.data);

    return new BN(Number(nonceAccount.nonce));

    return;
  } catch (error) {
    console.error("Failed to create nonce account: ", error);
    throw error;
  }
}
