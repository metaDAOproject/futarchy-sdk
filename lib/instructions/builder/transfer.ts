import { ProposalInstruction } from "@/types";
import { AnchorProvider } from "@coral-xyz/anchor";
import {
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountIdempotentInstruction,
  createTransferInstruction,
  getAccount,
  getAssociatedTokenAddress
} from "@solana/spl-token";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";

export async function buildTransferInstruction(
  daoTreasury: PublicKey,
  destination: PublicKey,
  tokenMint: PublicKey,
  amount: number,
  rpcProvider: AnchorProvider
): Promise<{
  preInstructions: TransactionInstruction[] | undefined;
  instruction: ProposalInstruction;
}> {
  const tokenMintAddress = await getAssociatedTokenAddress(
    tokenMint,
    daoTreasury,
    true
  );
  const originAcc = await getAccount(
    rpcProvider.connection,
    tokenMintAddress,
    "confirmed",
    TOKEN_PROGRAM_ID
  );

  const accountBalance = (
    await rpcProvider.connection.getTokenAccountBalance(originAcc.address)
  ).value;
  const transferAmount = amount * 10 ** accountBalance.decimals;

  const destinationAcc = await getAccount(
    rpcProvider.connection,
    tokenMintAddress,
    "confirmed",
    TOKEN_PROGRAM_ID
  );
  const destinationAddress = await getAssociatedTokenAddress(
    tokenMint,
    destination,
    true
  );

  const preInstructions = createAssociatedTokenAccountIdempotentInstruction(
    daoTreasury,
    destinationAddress,
    destination,
    tokenMintAddress
  );

  const transferIx = createTransferInstruction(
    originAcc.address,
    destinationAcc.address,
    daoTreasury,
    transferAmount
  );

  return {
    preInstructions: [preInstructions],
    instruction: { ...transferIx, accounts: transferIx.keys }
  };
}

//memo
export function buildMemoInstruction(message: string) {
  return {
    preInstructions: undefined,
    instruction: {
      programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
      accounts: [],
      data: Buffer.from(message, "utf8")
    }
  };
}
