import {
  Keypair,
  PublicKey,
  Transaction,
  VersionedTransaction,
} from "@solana/web3.js";
import { SignerWalletAdapterProps } from "@solana/wallet-adapter-base";

// Function to create a mock wallet
export function createMockWallet(): Pick<
  SignerWalletAdapterProps,
  "publicKey" | "signTransaction" | "signAllTransactions"
> & { publicKey: PublicKey } {
  // Create a new random keypair for testing.
  // NOTE: In a real app, never expose your private keys!
  const keypair = Keypair.generate();

  return {
    publicKey: keypair.publicKey,
    // Mock the signTransaction and signAllTransactions methods if necessary
    signTransaction: async <T extends Transaction | VersionedTransaction>(
      transaction: T
    ) => {
      // Mock the functionality of signing a transaction
      return transaction; // Just return the transaction without actually signing it for testing
    },
    signAllTransactions: async <T extends Transaction | VersionedTransaction>(
      transactions: T[]
    ) => {
      // Mock the functionality of signing multiple transactions
      return transactions; // Just return the transactions array without signing
    },
  };
}
