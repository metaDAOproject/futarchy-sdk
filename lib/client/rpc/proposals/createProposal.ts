import {
  SYSTEM_PROGRAM,
  autocratProgramToLoSizeMap,
  autocratVersionToConditionalVaultMap,
  autocratVersionToTwapMap,
  makerFee,
  maxObservationChangePerUpdateLots,
  takerFee,
  twapMarketBuffer
} from "@/constants";
import { buildMemoInstruction, buildTransferInstruction } from "@/instructions";
import { TransactionSender, createVersionedTransaction } from "@/transactions";
import {
  Dao,
  DaoAggregate,
  ProgramVersionLabel,
  ProposalInstructionWithPreinstructions
} from "@/types";
import {
  AmmMarketParams,
  CreateProposalInstruction,
  MarketParams,
  OpenbookMarketParams,
  ProposalDetails
} from "@/types/createProp";
import { SendTransactionResponse } from "@/types/transactions";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import {
  AutocratClient,
  MaxCUs,
  getAmmAddr,
  getVaultAddr,
  getVaultFinalizeMintAddr,
  getVaultRevertMintAddr
} from "@metadaoproject/futarchy";
import { OpenBookV2Client } from "@openbook-dex/openbook-v2";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress
} from "@solana/spl-token";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction
} from "@solana/web3.js";
import {
  AutocratV0 as AutocratV0_2,
  IDL as AutocratV0_2_IDL
} from "@/idl/autocrat_v0.2";
import {
  OpenbookTwapV0_2,
  IDL as OPENBOOK_TWAP_IDLV0_2
} from "@/idl/openbook_twap_v0.2";
import { CreateProposal, FutarchyProposalsClient } from "@/client";
import { ConditionalVault as Conditional_vault_v0_2 } from "@/idl/conditional_vault_v0.2";
import { createNonce } from "@/nonce";

export class CreateProposalClient implements CreateProposal {
  private proposalsClient: FutarchyProposalsClient;
  private rpcProvider: AnchorProvider;
  private transactionSender: TransactionSender | undefined;
  private autocratClient: AutocratClient;

  constructor(
    proposalsClient: FutarchyProposalsClient,
    rpcProvider: AnchorProvider,
    autocratClient: AutocratClient,
    transactionSender: TransactionSender | undefined
  ) {
    this.proposalsClient = proposalsClient;
    this.autocratClient = autocratClient;
    this.rpcProvider = rpcProvider;
    this.transactionSender = transactionSender;
  }

  async initializeVaultTx(
    settlementAuthority: PublicKey,
    underlyingTokenMint: PublicKey,
    nonce: BN,
    vaultProgram: Program<Conditional_vault_v0_2>,
    conditionalOnFinalizeKP: Keypair,
    conditionalOnRevertKP: Keypair
  ): Promise<any> {
    const [vault] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("conditional_vault", "utf8"),
        settlementAuthority.toBuffer(),
        underlyingTokenMint.toBuffer(),
        nonce.toArrayLike(Buffer, "le", 8)
      ],
      vaultProgram.programId
    );

    const vaultUnderlyingTokenAccount = await getAssociatedTokenAddress(
      underlyingTokenMint,
      vault,
      true
    );

    const vaultExists = await this.rpcProvider.connection.getAccountInfo(vaultUnderlyingTokenAccount)
    if (vaultExists) return [vault, undefined]

    const ix = (
      await vaultProgram.methods
        .initializeConditionalVault(settlementAuthority, nonce)
        .accounts({
          vault,
          underlyingTokenMint,
          vaultUnderlyingTokenAccount,
          conditionalOnFinalizeTokenMint: conditionalOnFinalizeKP.publicKey,
          conditionalOnRevertTokenMint: conditionalOnRevertKP.publicKey,
          payer: this.rpcProvider.publicKey,
          tokenProgram: TOKEN_PROGRAM_ID,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId
        })
        .signers([conditionalOnFinalizeKP, conditionalOnRevertKP])
        .transaction()
    ).instructions;

    const tx = await createVersionedTransaction(ix, this.rpcProvider);
    tx.sign([conditionalOnFinalizeKP, conditionalOnRevertKP]);

    return [vault, tx];
  }

  // TO DO standardize naming
  private async createProposalV0_2(
    dao: Dao,
    onPassIx: ProposalInstructionWithPreinstructions,
    marketParams: OpenbookMarketParams
  ): SendTransactionResponse {
    const proposalKP = Keypair.generate();

    const basePassMint = Keypair.generate();
    const baseFailMint = Keypair.generate();

    const quotePassMint = Keypair.generate();
    const quoteFailMint = Keypair.generate();

    const passMarketKP = Keypair.generate();
    const failMarketKP = Keypair.generate();

    const autocratProgramId = dao.protocol.autocrat.programId;
    const autocrat = new Program<AutocratV0_2>(
      AutocratV0_2_IDL,
      autocratProgramId,
      this.rpcProvider
    );

    const vault = autocratVersionToConditionalVaultMap["V0.2"];
    const vaultProgram = new Program<Conditional_vault_v0_2>(
      vault.idl as Conditional_vault_v0_2,
      vault.programId,
      this.rpcProvider
    );

    const openbook = new OpenBookV2Client(this.rpcProvider);
    const twap = autocratVersionToTwapMap["V0.2"];
    const twapProgram = new Program<OpenbookTwapV0_2>(
      twap.idl as OpenbookTwapV0_2,
      twap.programId,
      this.rpcProvider
    );

    //@ts-ignore
    const daoAccount = await autocrat.account.dao.fetch(currentDao.publicKey);
    if (!daoAccount) return;

    const baseNonce: BN = new BN(daoAccount.proposalCount);
    const daoTreasury = daoAccount.treasury;
    const tokenMint = daoAccount.metaMint!!;
    const usdcMint = daoAccount.usdcMint;

    const [baseVault, initializeBaseVaultTx] = await this.initializeVaultTx(
      daoTreasury,
      tokenMint,
      baseNonce,
      vaultProgram,
      basePassMint,
      baseFailMint
    );
    const [quoteVault, initializeQuoteVaultTx] = await this.initializeVaultTx(
      daoTreasury,
      usdcMint,
      baseNonce.or(new BN(1).shln(63)),
      vaultProgram,
      quotePassMint,
      quoteFailMint
    );

    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const elevenDaysInSeconds = 11 * 24 * 60 * 60;
    const expiryTime = new BN(currentTimeInSeconds + elevenDaysInSeconds);
    const { quoteLotSize, baseLotSize } =
      autocratProgramToLoSizeMap[autocratProgramId.toString()];
    const confFilter = 0.1;
    const maxStalenessSlots = 100;
    const twapExpectedValue = daoAccount.twapExpectedValue;

    const [twapPassMarket] = PublicKey.findProgramAddressSync(
      [twapMarketBuffer, passMarketKP.publicKey.toBuffer()],
      twapProgram.programId
    );
    const [twapFailMarket] = PublicKey.findProgramAddressSync(
      [twapMarketBuffer, failMarketKP.publicKey.toBuffer()],
      twapProgram.programId
    );

    const existingPassBaseMint = (await vaultProgram.account.conditionalVault.fetch(baseVault))?.conditionalOnFinalizeTokenMint
    const existingFailBaseMint = (await vaultProgram.account.conditionalVault.fetch(baseVault))?.conditionalOnRevertTokenMint
    const existingPassQuoteMint = (await vaultProgram.account.conditionalVault.fetch(quoteVault))?.conditionalOnFinalizeTokenMint
    const existingFailQuoteMint = (await vaultProgram.account.conditionalVault.fetch(quoteVault))?.conditionalOnRevertTokenMint

    let [passMarketIx, passMarketSigners] = await openbook.createMarketIx(
      this.rpcProvider.publicKey,
      `${baseNonce.toString()}p${dao.baseToken.symbol}/pUSDC`,
      existingPassQuoteMint || quotePassMint.publicKey,
      existingPassBaseMint || basePassMint.publicKey,
      quoteLotSize,
      baseLotSize,
      makerFee,
      takerFee,
      expiryTime,
      null,
      null,
      twapPassMarket,
      null,
      twapPassMarket,
      { confFilter, maxStalenessSlots },
      passMarketKP,
      daoTreasury
    );

    const createPassMarketTx = await createVersionedTransaction(
      passMarketIx,
      this.rpcProvider
    );
    createPassMarketTx.sign(passMarketSigners);

    let [failMarketIx, failMarketSigners] = await openbook.createMarketIx(
      this.rpcProvider.publicKey,
      `${baseNonce.toString()}f${dao.baseToken.symbol}/fUSDC`,
      existingFailQuoteMint || quoteFailMint.publicKey,
      existingFailBaseMint || baseFailMint.publicKey,
      quoteLotSize,
      baseLotSize,
      makerFee,
      takerFee,
      expiryTime,
      null,
      null,
      twapFailMarket,
      null,
      twapFailMarket,
      { confFilter, maxStalenessSlots },
      failMarketKP,
      daoTreasury
    );

    const createFailMarketTx = await createVersionedTransaction(
      failMarketIx,
      this.rpcProvider
    );
    createFailMarketTx.sign(failMarketSigners);

    const createTwapPassIxs = (
      await twapProgram.methods
        .createTwapMarket(twapExpectedValue, maxObservationChangePerUpdateLots)
        .accounts({
          market: passMarketKP.publicKey,
          twapMarket: twapPassMarket,
          systemProgram: SYSTEM_PROGRAM,
          payer: this.rpcProvider.publicKey
        })
        .transaction()
    ).instructions;
    const createTwapFailIxs = (
      await twapProgram.methods
        .createTwapMarket(twapExpectedValue, maxObservationChangePerUpdateLots)
        .accounts({
          market: failMarketKP.publicKey,
          twapMarket: twapFailMarket,
          systemProgram: SYSTEM_PROGRAM,
          payer: this.rpcProvider.publicKey
        })
        .transaction()
    ).instructions;

    const createTwaps = new Transaction().add(
      ...createTwapPassIxs,
      ...createTwapFailIxs
    );

    const initializeProposalIxs = (
      await autocrat.methods
        .initializeProposal("wwww.google.com", onPassIx.instruction)
        .preInstructions([
          ...(onPassIx.preInstructions || []),
          // @ts-ignore
          await autocrat.account.proposal.createInstruction(proposalKP, 1000)
        ])
        .signers([proposalKP])
        .accounts({
          proposal: proposalKP.publicKey,
          dao: dao.publicKey,
          daoTreasury,
          quoteVault,
          baseVault,
          openbookPassMarket: passMarketKP.publicKey,
          openbookFailMarket: failMarketKP.publicKey,
          openbookTwapPassMarket: twapPassMarket,
          openbookTwapFailMarket: twapFailMarket,
          proposer: this.rpcProvider.publicKey
        })
        .transaction()
    ).instructions;

    const initializeProposalTx = await createVersionedTransaction(
      [...initializeProposalIxs],
      this.rpcProvider
    );
    initializeProposalTx.sign([proposalKP]);

    const allTxs = [
      initializeBaseVaultTx,
      initializeQuoteVaultTx,
      createPassMarketTx,
      createFailMarketTx,
      createTwaps,
      initializeProposalTx
    ];
    const txResp = await this.transactionSender?.send(
      allTxs,
      this.rpcProvider.connection,
      { commitment: "confirmed", sequential: true }
    );

    const accounts = {
      proposer_acct: this.rpcProvider.publicKey,
      base_cond_vault_acct: txResp?.signatures.length == 1 ? baseVault : null,
      quote_cond_vault_acct: txResp?.signatures.length == 2 ? quoteVault : null,
      pass_market_acct:
        txResp?.signatures.length == 3 ? passMarketKP.publicKey : null,
      fail_market_acct:
        txResp?.signatures.length == 4 ? failMarketKP.publicKey : null,
      proposal_acct:
        txResp?.signatures.length == allTxs.length ? proposalKP.publicKey : null
    };
    await this.proposalsClient.updateProposalAccounts(accounts);

    return txResp;
  }

  // TO DO standardize naming
  private async createProposalV0_3(
    dao: Dao,
    onPassIx: ProposalInstructionWithPreinstructions,
    marketParams: AmmMarketParams
  ): SendTransactionResponse {
    const proposalKP = Keypair.generate();
    const proposal = proposalKP.publicKey;
    const nonce = createNonce(this.rpcProvider.connection);

    const autocrat = this.autocratClient.autocrat;
    const vaultClient = this.autocratClient.vaultClient;
    const ammClient = this.autocratClient.ammClient;
    const treasury = dao.daoAccount.treasury;

    const usdcMint = dao.daoAccount.usdcMint;
    const tokenMint = dao.daoAccount.tokenMint!!;
    const vaultProgramId = vaultClient.vaultProgram.programId;

    const daoAccount = await autocrat.account.dao.fetch(dao.publicKey);

    const baseTokensToLP = new BN(marketParams.baseLiquidity);
    const quoteTokensToLP = new BN(marketParams.quoteLiquidity);

    const [baseVault] = getVaultAddr(vaultProgramId, treasury, tokenMint);
    const [quoteVault] = getVaultAddr(vaultProgramId, treasury, usdcMint);

    const [passBase] = getVaultFinalizeMintAddr(vaultProgramId, baseVault);
    const [passQuote] = getVaultFinalizeMintAddr(vaultProgramId, quoteVault);

    const [failBase] = getVaultRevertMintAddr(vaultProgramId, baseVault);
    const [failQuote] = getVaultRevertMintAddr(vaultProgramId, quoteVault);

    const [passAmm] = getAmmAddr(
      ammClient.program.programId,
      passBase,
      passQuote
    );
    const [failAmm] = getAmmAddr(
      ammClient.program.programId,
      failBase,
      failQuote
    );

    const initializeVaultsAndMintTx = await this.autocratClient.vaultClient
      .initializeVaultIx(treasury, tokenMint)
      .postInstructions([
        ...(
          await this.autocratClient.vaultClient
            .initializeVaultIx(treasury, usdcMint)
            .transaction()
        ).instructions,
        ...(
          await this.autocratClient.vaultClient
            .mintConditionalTokensIx(baseVault, tokenMint, baseTokensToLP)
            .transaction()
        ).instructions,
        ...(
          await this.autocratClient.vaultClient
            .mintConditionalTokensIx(quoteVault, usdcMint, quoteTokensToLP)
            .transaction()
        ).instructions
      ])
      .transaction();

    const createAmmdAddLiquidityTx = await ammClient
      .createAmmIx(
        passBase,
        passQuote,
        daoAccount.twapInitialObservation,
        daoAccount.twapMaxObservationChangePerUpdate
      )
      .postInstructions([
        ...(
          await ammClient
            .createAmmIx(
              failBase,
              failQuote,
              daoAccount.twapInitialObservation,
              daoAccount.twapMaxObservationChangePerUpdate
            )
            .transaction()
        ).instructions,
        ...(
          await this.autocratClient.ammClient
            .addLiquidityIx(
              passAmm,
              passBase,
              passQuote,
              quoteTokensToLP,
              baseTokensToLP,
              new BN(0)
            )
            .transaction()
        ).instructions,
        ...(
          await this.autocratClient.ammClient
            .addLiquidityIx(
              failAmm,
              failBase,
              failQuote,
              quoteTokensToLP,
              baseTokensToLP,
              new BN(0)
            )
            .transaction()
        ).instructions
      ])
      .transaction();

    const initializeProposalIx = (
      await this.autocratClient
        .initializeProposalIx(
          "www.google.com",
          onPassIx.instruction,
          dao.publicKey,
          tokenMint,
          usdcMint,
          quoteTokensToLP,
          quoteTokensToLP,
          nonce
        )
        .preInstructions([
          ...(onPassIx.preInstructions || []),
          await autocrat.account.proposal.createInstruction(proposalKP, 2500)
        ])
        .signers([proposalKP])
        .transaction()
    ).instructions;

    // initializeProposal needs to be a versioned tx to be able to partial sign with wallet signAllTransactions
    // signing after a partial sign overwrites it
    // versionedTransaction have no partialSign fn because it's sign fn is a partialSign
    const initializeProposalTx = await createVersionedTransaction(
      initializeProposalIx,
      this.rpcProvider
    );
    initializeProposalTx.sign([proposalKP]);

    const allTxs = [
      initializeVaultsAndMintTx,
      createAmmdAddLiquidityTx,
      initializeProposalTx
    ];

    const initializeVaultsAndMintCus =
      MaxCUs.createIdempotent * 6 +
      MaxCUs.initializeConditionalVault * 2 +
      MaxCUs.mintConditionalTokens * 2;
    const createAmmdAddLiquidityCus =
      MaxCUs.initializeAmm * 2 + MaxCUs.addLiquidity * 2;
    const initializeProposalCus =
      MaxCUs.createIdempotent + MaxCUs.initializeProposal;

    const txResp = await this.transactionSender?.send(
      allTxs,
      this.rpcProvider.connection,
      {
        commitment: "confirmed",
        sequential: true,
        CUs: [
          initializeVaultsAndMintCus,
          createAmmdAddLiquidityCus,
          initializeProposalCus
        ]
      }
    );

    const accounts = {
      proposer_acct: this.rpcProvider.publicKey,
      base_cond_vault_acct: txResp?.signatures.length == 1 ? baseVault : null,
      quote_cond_vault_acct: txResp?.signatures.length == 1 ? quoteVault : null,
      pass_market_acct: txResp?.signatures.length == 2 ? passAmm : null,
      fail_market_acct: txResp?.signatures.length == 2 ? failAmm : null,
      proposal_acct:
        txResp?.signatures.length == allTxs.length ? proposal : null
    };
    this.proposalsClient.updateProposalAccounts(accounts);
    return txResp;
  }

  public async createProposal(
    daoAggregate: DaoAggregate,
    version: ProgramVersionLabel = "V0.3",
    instructionParams: CreateProposalInstruction,
    marketParams: MarketParams,
    proposalDetails: ProposalDetails
  ) {
    const currentDao = daoAggregate.daos
      .filter((dao) => dao.protocol.deploymentVersion === version)
      .slice(-1)[0];
    if (!currentDao) return;

    let onPassIxs;
    switch (instructionParams.type) {
      case "memo":
        onPassIxs = buildMemoInstruction(instructionParams.message);
        break;
      case "transfer":
        onPassIxs = await buildTransferInstruction(
          currentDao.daoAccount.treasury,
          instructionParams.destination,
          instructionParams.mint,
          instructionParams.amount,
          this.rpcProvider
        );
        break;
    }

    this.proposalsClient.saveProposalDetails(proposalDetails);
    let resp;
    switch (version) {
      case "V0.2":
        return (resp = await this.createProposalV0_2(
          currentDao,
          onPassIxs,
          marketParams as OpenbookMarketParams
        ));
      case "V0.3":
        return (resp = await this.createProposalV0_3(
          currentDao,
          onPassIxs,
          marketParams as AmmMarketParams
        ));
      default:
        throw Error("Program version not supported.");
    }
  }
}
