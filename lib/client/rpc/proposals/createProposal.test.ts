import { JitoBundler, TransactionSender } from "@/transactions";
import { AnchorProvider, BN, setProvider, utils } from "@coral-xyz/anchor";
import {
  ComputeBudgetProgram,
  Connection,
  PublicKey,
  SystemProgram,
  Transaction
} from "@solana/web3.js";
import { describe, test, beforeAll } from "bun:test";
import { FutarchyRPCClient } from "../rpcClient";
import { ProposalInstruction } from "@/types";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import {
  AMM_PROGRAM_ID,
  AUTOCRAT_PROGRAM_ID,
  AutocratClient,
  CONDITIONAL_VAULT_PROGRAM_ID,
  InstructionUtils
} from "@metadaoproject/futarchy";
import { createMockWallet } from "tests/test-utils";

// export const provider = AnchorProvider.env();
// setProvider(provider);

let provider: AnchorProvider;
describe("rpc proposal Integration Test", () => {
  let rpcClient: FutarchyRPCClient;
  const connection = new Connection("https://test.xyz");

  let wallet = createMockWallet();
  if (wallet.publicKey === null) return;

  provider = new AnchorProvider(connection, wallet, {
    commitment: "processed"
  });

  beforeAll(() => {
    // Setup TransactionSender - assumed to be available or mock as needed
    const transactionSender = new TransactionSender(
      new PublicKey(wallet.publicKey), // Adjust as per your constructor requirements
      wallet.signAllTransactions, // Assuming Wallet has this method
      1000, // Sample priority fee, adjust as necessary
      undefined,
      new JitoBundler("https://ny.mainnet.block-engine.jito.wtf")
    );

    // Initialize FutarchyRPCClient
    rpcClient = FutarchyRPCClient.make(provider, transactionSender);
  });

  test("test create proposal", async () => {
    const MEMO_PROGRAM_ID: PublicKey = new PublicKey(
      "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
    );
    const ix = {
      programId: new PublicKey(MEMO_PROGRAM_ID),
      accounts: [],
      data: Buffer.from("test")
    };

    try {
      const dao = new PublicKey("GWywkp2mY2vzAaLydR2MBXRCqk2vBTyvtVRioujxi5Ce");
      const autocratClient = new AutocratClient(
        provider,
        AUTOCRAT_PROGRAM_ID,
        CONDITIONAL_VAULT_PROGRAM_ID,
        AMM_PROGRAM_ID,
        []
      );
      const storedDao = await autocratClient.getDao(dao);

      const nonce = new BN(Math.random() * 2 ** 50);

      let [proposal] = getProposalAddr(
        autocratClient.autocrat.programId,
        autocratClient.provider.publicKey,
        nonce
      );

      const { initializeVaultTx, mintTx, ammTx, proposalTx } = await getTxsV1(
        autocratClient,
        storedDao,
        dao,
        ix
      );

      const txs = [initializeVaultTx, mintTx, ammTx, proposalTx];

      const transactionsWithTip = await Promise.all(
        txs.map(async (tx, i) => {
          // Create a transfer instruction to the tip account for the final instruction
          const latestBlockhash =
            await provider.connection.getLatestBlockhash();
          if (tx instanceof Transaction && i === txs.length - 1) {
            const transferInstruction = SystemProgram.transfer({
              fromPubkey: provider.wallet.publicKey,
              toPubkey: new PublicKey(
                "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh"
              ),
              lamports: 7500
            });
            tx.add(transferInstruction);
          }

          tx.recentBlockhash = latestBlockhash.blockhash;
          tx.feePayer = provider.wallet.publicKey;

          return tx;
        })
      );

      const signedTxsWithTip = await wallet.signAllTransactions(
        transactionsWithTip
      );

      const serializedTransactions = signedTxsWithTip.map((tx) =>
        bs58.encode(tx.serialize())
      );

      const response = await fetch(
        `https://ny.mainnet.block-engine.jito.wtf/api/v1/bundles`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "sendBundle",
            params: [serializedTransactions]
          })
        }
      );

      const result = await response.json();
      console.log("jito bundle res", result);
    } catch (e) {
      console.error(e);
    }
  }, 600_000);
});

async function getTxsV1(
  autocratClient: AutocratClient,
  storedDao: {
    treasuryPdaBump: number;
    treasury: PublicKey;
    tokenMint: PublicKey;
    usdcMint: PublicKey;
    proposalCount: number;
    passThresholdBps: number;
    slotsPerProposal: BN;
    twapInitialObservation: BN;
    twapMaxObservationChangePerUpdate: BN;
    minQuoteFutarchicLiquidity: BN;
    minBaseFutarchicLiquidity: BN;
  },
  dao: PublicKey,
  ix: ProposalInstruction
) {
  const nonce = new BN(Math.random() * 2 ** 50);

  let [proposal] = getProposalAddr(
    autocratClient.autocrat.programId,
    autocratClient.provider.publicKey,
    nonce
  );

  const {
    baseVault,
    quoteVault,
    passAmm,
    failAmm,
    passBaseMint,
    passQuoteMint,
    failBaseMint,
    failQuoteMint
  } = autocratClient.getProposalPdas(
    proposal,
    storedDao.tokenMint,
    storedDao.usdcMint,
    dao
  );

  const initializeVaultTx = await autocratClient.vaultClient
    .initializeVaultIx(proposal, storedDao.tokenMint)
    .postInstructions(
      await InstructionUtils.getInstructions(
        autocratClient.vaultClient.initializeVaultIx(
          proposal,
          storedDao.usdcMint
        ),
        autocratClient.ammClient.createAmmIx(
          passBaseMint,
          passQuoteMint,
          storedDao.twapInitialObservation,
          storedDao.twapMaxObservationChangePerUpdate
        ),
        autocratClient.ammClient.createAmmIx(
          failBaseMint,
          failQuoteMint,
          storedDao.twapInitialObservation,
          storedDao.twapMaxObservationChangePerUpdate
        )
      )
    )
    .transaction();
  const quoteLiqAmount = 100 * 10 ** 6;
  const baseLiqAmount = 1 * 10 ** 6;
  const quoteTokensToLP = new BN(quoteLiqAmount);
  const baseTokensToLP = new BN(baseLiqAmount);
  const mintTx = await autocratClient.vaultClient
    .mintConditionalTokensIx(baseVault, storedDao.tokenMint, baseTokensToLP)
    .postInstructions(
      await InstructionUtils.getInstructions(
        autocratClient.vaultClient.mintConditionalTokensIx(
          quoteVault,
          storedDao.usdcMint,
          quoteTokensToLP
        )
      )
    )
    .transaction();

  const ammTx = await autocratClient.ammClient
    .addLiquidityIx(
      passAmm,
      passBaseMint,
      passQuoteMint,
      quoteTokensToLP,
      baseTokensToLP,
      new BN(0),
      provider.wallet.publicKey
    )
    .postInstructions(
      await InstructionUtils.getInstructions(
        autocratClient.ammClient.addLiquidityIx(
          failAmm,
          failBaseMint,
          failQuoteMint,
          quoteTokensToLP,
          baseTokensToLP,
          new BN(0),
          provider.wallet.publicKey
        )
      )
    )
    .transaction();

  const proposalTx = await autocratClient
    .initializeProposalIx(
      "https://metadao.fi",
      ix,
      dao,
      storedDao.tokenMint,
      storedDao.usdcMint,
      quoteTokensToLP,
      quoteTokensToLP,
      nonce
    )
    .transaction();
  return { initializeVaultTx, mintTx, ammTx, proposalTx };
}

function getProposalAddr(
  programId: PublicKey,
  proposer: PublicKey,
  nonce: BN
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [
      utils.bytes.utf8.encode("proposal"),
      proposer.toBuffer(),
      nonce.toArrayLike(Buffer, "le", 8)
    ],
    programId
  );
}
