import { FutarchyIndexerClient, FutarchyRPCClient } from "@/client";
import { autocratVersionToTwapMap } from "@/constants";
import { TransactionSender } from "@/transactions";
import {
  AmmMarketFetchRequest,
  OpenbookMarketFetchRequest,
  OpenbookMarket,
} from "@/types";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { describe, test, expect, beforeAll } from "bun:test";
import { createMockWallet } from "tests/test-utils";

describe("FutarchyIndexerClient Integration Test", () => {
  let indexerClient: FutarchyIndexerClient;
  let rpcClient: FutarchyRPCClient;
  let provider: AnchorProvider;

  beforeAll(() => {
    const connection = new Connection("https://test.xyz");

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

    const indexerUrl = "https://test-graphql.hello.xyz";
    const indexerWSUrl = "wss://test-graphql.hello.xyz";

    indexerClient = FutarchyIndexerClient.make(
      rpcClient,
      indexerUrl,
      indexerWSUrl
    );
  });

  //integration tests
  test.skip("fetchMarket should return market data for openbook makret", async () => {
    const { programId, idl } = autocratVersionToTwapMap["V0.2"];
    const openbookTwap = new Program(idl, programId, provider);
    const request: OpenbookMarketFetchRequest = new OpenbookMarketFetchRequest(
      new PublicKey("9kZ8zYrrRFEP1WzQTf5kXexAnmDqcJbVV46RgbK9ubxm"),
      openbookTwap
    );
    const marketData = await indexerClient.markets.fetchMarket(request);
    console.log(marketData); // Log to verify data or perform assertions
    expect(marketData).toBeDefined(); // Simple check, adjust according to expected data structure
    if (marketData && marketData.type === "openbookv2") {
      const orderbook = await indexerClient.markets.openbook.fetchOrderBook(
        marketData
      );
      console.log(orderbook); // Log to verify data or perform assertions
      expect(orderbook).toBeDefined();
    } else {
      expect().fail();
    }
  });

  // Add more tests for other methods like cancelOrder, fetchOrderBook, etc.
});
