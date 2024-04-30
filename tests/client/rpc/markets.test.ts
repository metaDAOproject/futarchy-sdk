import { FutarchyRPCClient } from "@/client";
import { TransactionSender } from "@/transactions";
import { AmmMarketFetchRequest } from "@/types";
import { AnchorProvider } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { describe, test, expect, beforeAll } from "bun:test";
import { createMockWallet } from "tests/test-utils";

describe("FutarchyRPCClient Integration Test", () => {
  let rpcClient: FutarchyRPCClient;
  let provider: AnchorProvider;

  beforeAll(() => {
    const connection = new Connection("");

    const wallet = createMockWallet();
    if (wallet.publicKey === null) return;

    provider = new AnchorProvider(connection, wallet, {
      commitment: "processed",
    });

    // Setup TransactionSender - assumed to be available or mock as needed
    const transactionSender = new TransactionSender(
      new PublicKey(wallet.publicKey), // Adjust as per your constructor requirements
      wallet.signAllTransactions, // Assuming Wallet has this method
      10 // Sample priority fee, adjust as necessary
    );

    // Initialize FutarchyRPCClient
    rpcClient = FutarchyRPCClient.make(provider, transactionSender);
  });

  test("fetchMarket should return market data for amm market", async () => {
    const request = new AmmMarketFetchRequest(
      new PublicKey("HbSYiZ8JRKqNHTx2EJUr6c5wQMvMjNx1rmHkTUtVi9qC")
    );
    const marketData = await rpcClient.markets.fetchMarket(request);
    console.log(marketData); // Log to verify data or perform assertions
    expect(marketData).toBeDefined(); // Simple check, adjust according to expected data structure
  });

  // Add more tests for other methods like cancelOrder, fetchOrderBook, etc.
});
