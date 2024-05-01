import { FutarchyRPCClient } from "@/client";
import { autocratVersionToTwapMap } from "@/constants";
import { TransactionSender } from "@/transactions";
import { AmmMarketFetchRequest, OpenbookMarketFetchRequest } from "@/types";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
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

  test.skip("fetchMarket should return market data for amm market", async () => {
    const request = new AmmMarketFetchRequest(
      new PublicKey("HbSYiZ8JRKqNHTx2EJUr6c5wQMvMjNx1rmHkTUtVi9qC")
    );
    const marketData = await rpcClient.markets.fetchMarket(request);
    console.log(marketData); // Log to verify data or perform assertions
    expect(marketData).toBeDefined(); // Simple check, adjust according to expected data structure
  }, 60000);
  test("fetchMarket should return market data for amm market", async () => {
    const { programId, idl } = autocratVersionToTwapMap["V0.3"];
    const openbookTwap = new Program(idl, programId, provider);
    const request = new OpenbookMarketFetchRequest(
      new PublicKey("8F9udYNXAsUoRJXJZcA6Y3HTF24CZJXEEFBRXXbTo9v7"),
      openbookTwap
    );
    const marketData = await rpcClient.markets.fetchMarket(request);
    console.log(marketData); // Log to verify data or perform assertions
    expect(marketData).toBeDefined(); // Simple check, adjust according to expected data structure
  }, 60000);

  // Add more tests for other methods like cancelOrder, fetchOrderBook, etc.
});
