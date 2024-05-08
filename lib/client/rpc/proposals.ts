import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountIdempotentInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import numeral from "numeral";
import { Dao, DaoAggregate, FutarchyProtocol } from "@/types";
import { Proposal, ProposalAccounts, ProposalInstructionWithPreinstructions } from "@/types/proposals";
import { FutarchyProposalsClient } from "@/client";
import { VaultAccount, VaultAccountWithProtocol } from "@/types/conditionalVault";
import { TransactionSender, createVersionedTransaction } from "@/transactions";
import { enrichTokenMetadata } from "@/tokens";
import { getProposalFromAccount } from "@/proposal";
import { AMM_PROGRAM_ID, AUTOCRAT_PROGRAM_ID, AutocratClient, CONDITIONAL_VAULT_PROGRAM_ID, getAmmAddr, getVaultAddr, getVaultFinalizeMintAddr, getVaultRevertMintAddr } from "@metadaoproject/futarchy-ts";
import { SendTransactionResponse } from "@/types/transactions";
import { SYSTEM_PROGRAM, autocratProgramToLoSizeMap, autocratVersionToConditionalVaultMap, autocratVersionToTwapMap, makerFee, maxObservationChangePerUpdateLots, takerFee, twapMarketBuffer } from "@/constants";
import { OpenBookV2Client } from "@openbook-dex/openbook-v2";
import { OpenbookTwapV0_2 as OpenbookTwap, } from "@/idl/openbook_twap_v0.2";
import { ConditionalVault, } from "@/idl/conditional_vault_v0.2";
import { AutocratV0 as AutocratV0_2, IDL as AutocratV0_2_IDL } from "@/idl/autocrat_v0.2";
import { buildMemoInstruction, buildTransferInstruction } from "@/instructions";
import { AmmMarketParams, CreateProposalInstruction, MarketParams, OpenbookMarketParams, ProposalDetails } from "@/types/createProp";

export class FutarchyRPCProposalsClient implements FutarchyProposalsClient {
  private rpcProvider: AnchorProvider;
  private futarchyProtocols: FutarchyProtocol[];
  private transactionSender: TransactionSender | undefined;
  private autocratClient: AutocratClient
  constructor(
    rpcProvider: AnchorProvider,
    futarchyProtocols: FutarchyProtocol[],
    transactionSender: TransactionSender | undefined
  ) {
    this.rpcProvider = rpcProvider;
    this.futarchyProtocols = futarchyProtocols;
    this.transactionSender = transactionSender;
    this.autocratClient = new AutocratClient(rpcProvider, AUTOCRAT_PROGRAM_ID, CONDITIONAL_VAULT_PROGRAM_ID, AMM_PROGRAM_ID, [])
  }

  async fetchProposals(daoAggregate: DaoAggregate): Promise<Proposal[]> {
    return (
      await Promise.all(
        daoAggregate.daos.map(async (dao) => {
          const allProposals = (
            await dao.protocol.autocrat.account.proposal.all()
          ).map((prop) => ({
            title: `Proposal ${prop.account.number}`,
            description: "",
            ...prop,
          }));
          const vaultsByAddress: Record<string, VaultAccount> =
            await this.getVaultsByAddressFromDao(dao);
          const proposalsWithVaults: Proposal[] = allProposals.map((p) => {
            const baseVaultAccount =
              vaultsByAddress[p.account.baseVault.toString()];
            const quoteVaultAccount =
              vaultsByAddress[p.account.quoteVault.toString()];
            return {
              ...getProposalFromAccount(
                p,
                dao,
                baseVaultAccount,
                quoteVaultAccount
              ),
            };
          });

          return proposalsWithVaults.filter((p) => {
            const { baseVaultAccount } = p;
            return (
              baseVaultAccount.settlementAuthority.toString() ===
              dao.daoAccount.treasury.toString()
            );
          });
        })
      )
    ).flat();
  }

  public async getVaultsByAddressFromDao(
    dao: Dao
  ): Promise<Record<string, VaultAccount>> {
    const allVaults = await dao.protocol.vault.account.conditionalVault.all();
    const vaultsByAddress: Record<string, VaultAccount> = allVaults.reduce(
      (prev, curr) => {
        prev[curr.publicKey.toString()] = curr.account;
        return prev;
      },
      {} as Record<string, VaultAccount>
    );
    return vaultsByAddress;
  }

  public async deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ) {
    if (!this.rpcProvider.publicKey || !this.transactionSender) {
      return;
    }
    // we fetch metadata with finalize token mint, but it could be revert mint instead
    const { decimals } = await enrichTokenMetadata(
      vaultAccount.conditionalOnFinalizeTokenMint,
      this.rpcProvider
    );
    const ixs = [
      createAssociatedTokenAccountIdempotentInstruction(
        this.rpcProvider.publicKey,
        getAssociatedTokenAddressSync(
          vaultAccount.conditionalOnFinalizeTokenMint,
          this.rpcProvider.publicKey,
          true
        ),
        this.rpcProvider.publicKey,
        vaultAccount.conditionalOnFinalizeTokenMint
      ),
      createAssociatedTokenAccountIdempotentInstruction(
        this.rpcProvider.publicKey,
        getAssociatedTokenAddressSync(
          vaultAccount.conditionalOnRevertTokenMint,
          this.rpcProvider.publicKey,
          true
        ),
        this.rpcProvider.publicKey,
        vaultAccount.conditionalOnRevertTokenMint
      ),
      await vaultAccount.protocol.vault.methods
        .mintConditionalTokens(
          new BN(
            numeral(amount)
              .multiply(10 ** (decimals || 0))
              .format("0")
          )
        )
        .accounts({
          vault: vaultAccountAddress,
          userConditionalOnFinalizeTokenAccount: getAssociatedTokenAddressSync(
            vaultAccount.conditionalOnFinalizeTokenMint,
            this.rpcProvider.publicKey,
            true
          ),
          userConditionalOnRevertTokenAccount: getAssociatedTokenAddressSync(
            vaultAccount.conditionalOnRevertTokenMint,
            this.rpcProvider.publicKey,
            true
          ),
          userUnderlyingTokenAccount: getAssociatedTokenAddressSync(
            vaultAccount.underlyingTokenMint,
            this.rpcProvider.publicKey,
            true
          ),
          vaultUnderlyingTokenAccount: vaultAccount.underlyingTokenAccount,
          conditionalOnFinalizeTokenMint:
            vaultAccount.conditionalOnFinalizeTokenMint,
          conditionalOnRevertTokenMint:
            vaultAccount.conditionalOnRevertTokenMint,
        })
        .instruction(),
    ];
    const tx = new Transaction().add(...ixs);
    return this.transactionSender.send([tx], this.rpcProvider.connection);
  }

  public async withdraw(proposal: Proposal) {
    const withdrawBaseIx = await this.withdrawFromVaultIx(
      proposal.account.baseVault,
      proposal.baseVaultAccount
    );
    const withdrawQuoteIx = await this.withdrawFromVaultIx(
      proposal.account.quoteVault,
      proposal.quoteVaultAccount
    );

    if (withdrawBaseIx && withdrawQuoteIx) {
      const ixs: TransactionInstruction[] = [withdrawBaseIx, withdrawQuoteIx];
      return this.transactionSender?.send(
        [new Transaction().add(...ixs)],
        this.rpcProvider.connection
      )
    }
  }

  private async withdrawFromVaultIx(
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol
  ): Promise<TransactionInstruction | undefined> {
    if (
      !vaultAccount.protocol.vault.provider.publicKey ||
      !this.transactionSender
    ) {
      return;
    }
    const userConditionalOnFinalizeTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.conditionalOnFinalizeTokenMint,
      vaultAccount.protocol.vault.provider.publicKey,
      true
    );
    const userConditionalOnRevertTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.conditionalOnRevertTokenMint,
      vaultAccount.protocol.vault.provider.publicKey,
      true
    );
    const userUnderlyingTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.underlyingTokenMint,
      vaultAccount.protocol.vault.provider.publicKey,
      true
    );
    const ix = await vaultAccount.protocol.vault.methods
      .redeemConditionalTokensForUnderlyingTokens()
      .accounts({
        vault: vaultAccountAddress,
        conditionalOnFinalizeTokenMint:
          vaultAccount.conditionalOnFinalizeTokenMint,
        conditionalOnRevertTokenMint: vaultAccount.conditionalOnRevertTokenMint,
        vaultUnderlyingTokenAccount: vaultAccount.underlyingTokenAccount,
        userConditionalOnFinalizeTokenAccount,
        userConditionalOnRevertTokenAccount,
        userUnderlyingTokenAccount,
      })
      .preInstructions([
        createAssociatedTokenAccountIdempotentInstruction(
          vaultAccount.protocol.vault.provider.publicKey,
          userConditionalOnFinalizeTokenAccount,
          vaultAccount.protocol.vault.provider.publicKey,
          vaultAccount.conditionalOnFinalizeTokenMint
        ),
        createAssociatedTokenAccountIdempotentInstruction(
          vaultAccount.protocol.vault.provider.publicKey,
          userConditionalOnRevertTokenAccount,
          vaultAccount.protocol.vault.provider.publicKey,
          vaultAccount.conditionalOnRevertTokenMint
        ),
        createAssociatedTokenAccountIdempotentInstruction(
          vaultAccount.protocol.vault.provider.publicKey,
          userUnderlyingTokenAccount,
          vaultAccount.protocol.vault.provider.publicKey,
          vaultAccount.underlyingTokenMint
        ),
      ])
      .instruction();
    return ix;
  }

  async getUserTokenBalance(tokenMintAddress: PublicKey) {
    // Get the associated token account for the user's wallet and the token mint
    const userTokenAccountAddress = getAssociatedTokenAddressSync(
      new PublicKey(tokenMintAddress),
      this.rpcProvider.publicKey
    );

    // Fetch the account info
    const accountInfo = await getAccount(this.rpcProvider.connection, userTokenAccountAddress).catch(e => console.log(e))
    // The amount is a BigInt, convert it to a string if necessary
    return accountInfo?.amount.toString();
  }

  async initializeVaultTx(
    settlementAuthority: PublicKey,
    underlyingTokenMint: PublicKey,
    nonce: BN,
    vaultProgram: Program<ConditionalVault>,
    conditionalOnFinalizeKP: Keypair,
    conditionalOnRevertKP: Keypair
  ): Promise<any> {

    const [vault] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("conditional_vault", "utf8"),
        settlementAuthority.toBuffer(),
        underlyingTokenMint.toBuffer(),
        nonce.toArrayLike(Buffer, "le", 8),
      ],
      vaultProgram.programId
    );

    const vaultUnderlyingTokenAccount = await getAssociatedTokenAddress(
      underlyingTokenMint,
      vault,
      true
    );

    const ix = (await vaultProgram.methods
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
        systemProgram: SystemProgram.programId,
      })
      .signers([conditionalOnFinalizeKP, conditionalOnRevertKP])
      .transaction()).instructions

    const tx = await createVersionedTransaction(ix, this.rpcProvider)
    tx.sign([conditionalOnFinalizeKP, conditionalOnRevertKP])

    return [vault, tx];
  }

  private async createProposalV02(dao: Dao, onPassIx: ProposalInstructionWithPreinstructions, marketParams: OpenbookMarketParams): SendTransactionResponse {
    const proposalKP = Keypair.generate();

    const basePassMint = Keypair.generate();
    const baseFailMint = Keypair.generate();

    const quotePassMint = Keypair.generate();
    const quoteFailMint = Keypair.generate();

    const passMarketKP = Keypair.generate();
    const failMarketKP = Keypair.generate();

    const autocratProgramId = dao.protocol.autocrat.programId
    const autocrat = new Program<AutocratV0_2>(AutocratV0_2_IDL, autocratProgramId, this.rpcProvider)

    const vault = autocratVersionToConditionalVaultMap["V0.2"]
    const vaultProgram = new Program<ConditionalVault>(vault.idl as ConditionalVault, vault.programId, this.rpcProvider)

    const openbook = new OpenBookV2Client(this.rpcProvider);
    const twap = autocratVersionToTwapMap["V0.2"]
    const twapProgram = new Program<OpenbookTwap>(twap.idl as OpenbookTwap, twap.programId, this.rpcProvider);

    //@ts-ignore
    const daoAccount = await autocrat.account.dao.fetch(currentDao.publicKey)
    if (!daoAccount) return

    // const baseNonce:BN = new BN(daoAccount.proposalCount);
    const baseNonce: BN = new BN(1027);
    const daoTreasury = daoAccount.treasury
    const tokenMint = daoAccount.metaMint!!;
    const usdcMint = daoAccount.usdcMint;

    const [baseVault, initializeBaseVaultTx] = await this.initializeVaultTx(daoTreasury, tokenMint, baseNonce, vaultProgram, basePassMint, baseFailMint)
    const [quoteVault, initializeQuoteVaultTx] = await this.initializeVaultTx(daoTreasury, usdcMint, baseNonce.or(new BN(1).shln(63)), vaultProgram, quotePassMint, quoteFailMint)

    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const elevenDaysInSeconds = 11 * 24 * 60 * 60;
    const expiryTime = new BN(currentTimeInSeconds + elevenDaysInSeconds);
    const { quoteLotSize, baseLotSize } = autocratProgramToLoSizeMap[autocratProgramId.toString()]
    const confFilter = 0.1
    const maxStalenessSlots = 100
    const twapExpectedValue = daoAccount.twapExpectedValue

    const [twapPassMarket] = PublicKey.findProgramAddressSync([twapMarketBuffer, passMarketKP.publicKey.toBuffer()], twapProgram.programId)
    const [twapFailMarket] = PublicKey.findProgramAddressSync([twapMarketBuffer, failMarketKP.publicKey.toBuffer()], twapProgram.programId)

    let [passMarketIx, passMarketSigners] =
      await openbook.createMarketIx(
        this.rpcProvider.publicKey,
        `${baseNonce.toString()}pMETA/pUSDC`,
        quotePassMint.publicKey,
        basePassMint.publicKey,
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

    const createPassMarketTx = await createVersionedTransaction(passMarketIx, this.rpcProvider)
    createPassMarketTx.sign(passMarketSigners)

    let [failMarketIx, failMarketSigners] =
      await openbook.createMarketIx(
        this.rpcProvider.publicKey,
        `${baseNonce.toString()}fMETA/fUSDC`,
        quoteFailMint.publicKey,
        baseFailMint.publicKey,
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

    const createFailMarketTx = await createVersionedTransaction(failMarketIx, this.rpcProvider)
    createFailMarketTx.sign(failMarketSigners)

    const createTwapPassIxs = (await twapProgram.methods
      .createTwapMarket(twapExpectedValue, maxObservationChangePerUpdateLots)
      .accounts({ market: passMarketKP.publicKey, twapMarket: twapPassMarket, systemProgram: SYSTEM_PROGRAM, payer: this.rpcProvider.publicKey })
      .transaction()).instructions
    const createTwapFailIxs = (await twapProgram.methods
      .createTwapMarket(twapExpectedValue, maxObservationChangePerUpdateLots)
      .accounts({ market: failMarketKP.publicKey, twapMarket: twapFailMarket, systemProgram: SYSTEM_PROGRAM, payer: this.rpcProvider.publicKey })
      .transaction()).instructions

    const createTwaps = new Transaction().add(...createTwapPassIxs, ...createTwapFailIxs)

    const initializeProposalIxs = (await autocrat.methods
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
        proposer: this.rpcProvider.publicKey,
      })
      .transaction()).instructions

    const initializeProposalTx = await createVersionedTransaction([...initializeProposalIxs], this.rpcProvider)
    initializeProposalTx.sign([proposalKP])

    const allTxs = [
      initializeBaseVaultTx,
      initializeQuoteVaultTx,
      createPassMarketTx,
      createFailMarketTx,
      createTwaps,
      initializeProposalTx
    ]
    const txResp = await this.transactionSender?.send(
      allTxs,
      this.rpcProvider.connection,
      { commitment: "confirmed", sequential: true }
    )

    const accounts = {
      proposer_acct: this.rpcProvider.publicKey,
      base_cond_vault_acct: txResp?.signatures.length == 1 ? baseVault : null,
      quote_cond_vault_acct: txResp?.signatures.length == 2 ? quoteVault : null,
      pass_market_acct: txResp?.signatures.length == 3 ? passMarketKP.publicKey : null,
      fail_market_acct: txResp?.signatures.length == 4 ? failMarketKP.publicKey : null,
      proposal_acct: txResp?.signatures.length == allTxs.length ? proposalKP.publicKey : null,
    }
    await this.updateProposalAccounts(accounts)

    return txResp
  }

  private async createProposalV1(dao: Dao, onPassIx: ProposalInstructionWithPreinstructions, marketParams: AmmMarketParams): SendTransactionResponse {
    const proposalKP = Keypair.generate();
    const proposal = proposalKP.publicKey

    const autocrat = this.autocratClient.autocrat
    const vaultClient = this.autocratClient.vaultClient
    const ammClient = this.autocratClient.ammClient
    const treasury = dao.daoAccount.treasury

    const usdcMint = dao.daoAccount.usdcMint;
    const tokenMint = dao.daoAccount.tokenMint!!;
    const vaultProgramId = vaultClient.vaultProgram.programId

    const daoAccount = await autocrat.account.dao.fetch(dao.publicKey)

    const baseTokensToLP = new BN(marketParams.baseLiquidity)
    const quoteTokensToLP = new BN(marketParams.quoteLiquidity)

    const [baseVault] = getVaultAddr(vaultProgramId, treasury, tokenMint, proposal);
    const [quoteVault] = getVaultAddr(vaultProgramId, treasury, usdcMint, proposal);

    const [passBase] = getVaultFinalizeMintAddr(vaultProgramId, baseVault);
    const [passQuote] = getVaultFinalizeMintAddr(vaultProgramId, quoteVault);

    const [failBase] = getVaultRevertMintAddr(vaultProgramId, baseVault);
    const [failQuote] = getVaultRevertMintAddr(vaultProgramId, quoteVault);

    const [passAmm] = getAmmAddr(ammClient.program.programId, passBase, passQuote, proposal);
    const [failAmm] = getAmmAddr(ammClient.program.programId, failBase, failQuote, proposal);

    const initializeVaultsAndMintTx = await this.autocratClient.vaultClient.initializeVaultIx(treasury, tokenMint, proposal).postInstructions([
      ...(await this.autocratClient.vaultClient.initializeVaultIx(treasury, usdcMint, proposal).transaction()).instructions,
      ...(await this.autocratClient.vaultClient.mintConditionalTokensIx(baseVault, tokenMint, baseTokensToLP).transaction()).instructions,
      ...(await this.autocratClient.vaultClient.mintConditionalTokensIx(quoteVault, usdcMint, quoteTokensToLP).transaction()).instructions
    ]).transaction()

    const createAmmdAddLiquidityTx = await ammClient
      .createAmmIx(passBase, passQuote, daoAccount.twapInitialObservation, daoAccount.twapMaxObservationChangePerUpdate, proposal)
      .postInstructions([
        ...(await ammClient.createAmmIx(failBase, failQuote, daoAccount.twapInitialObservation, daoAccount.twapMaxObservationChangePerUpdate, proposal).transaction()).instructions,
        ...(await this.autocratClient.ammClient.addLiquidityIx(passAmm, passBase, passQuote, quoteTokensToLP, baseTokensToLP, new BN(0)).transaction()).instructions,
        ...(await this.autocratClient.ammClient.addLiquidityIx(failAmm, failBase, failQuote, quoteTokensToLP, baseTokensToLP, new BN(0)).transaction()).instructions,
      ]).transaction()

    const initializeProposalIx = (await this.autocratClient
      .initializeProposalIx(proposalKP, "www.google.com", onPassIx.instruction, dao.publicKey, tokenMint, usdcMint, quoteTokensToLP, quoteTokensToLP)
      .preInstructions([
        ...(onPassIx.preInstructions || []),
        await autocrat.account.proposal.createInstruction(proposalKP, 2500)
      ])
      .signers([proposalKP])
      .transaction()).instructions

    // initializeProposal needs to be a versioned tx to be able to partial sign with wallet signAllTransactions
    // signing after a partial sign overwrites it
    // versionedTransaction have no partialSign fn because it's sign fn is a partialSign
    const initializeProposalTx = await createVersionedTransaction(initializeProposalIx, this.rpcProvider)
    initializeProposalTx.sign([proposalKP])

    const allTxs = [initializeVaultsAndMintTx, createAmmdAddLiquidityTx, initializeProposalTx]
    const txResp = await this.transactionSender?.send(
      allTxs,
      this.rpcProvider.connection,
      { commitment: "finalized", sequential: true }
    )
    const accounts = {
      proposer_acct: this.rpcProvider.publicKey,
      base_cond_vault_acct: txResp?.signatures.length == 1 ? baseVault : null,
      quote_cond_vault_acct: txResp?.signatures.length == 1 ? quoteVault : null,
      pass_market_acct: txResp?.signatures.length == 2 ? passAmm : null,
      fail_market_acct: txResp?.signatures.length == 2 ? failAmm : null,
      proposal_acct: txResp?.signatures.length == allTxs.length ? proposal : null,
    }
    await this.updateProposalAccounts(accounts)
    return txResp
  }

  // TO DO INDEXER
  private async saveProposalDetails(proposalDetails: ProposalDetails) { }
  private async updateProposalAccounts(accounts: ProposalAccounts) { }

  public async createProposal(
    daoAggregate: DaoAggregate,
    version: "V0.2" | "V1" = "V1",
    instructionParams: CreateProposalInstruction,
    marketParams: MarketParams,
    proposalDetails: ProposalDetails
  ) {
    const currentDao = daoAggregate.daos.filter((dao) => dao.protocol.deploymentVersion === version).slice(-1)[0]
    if (!currentDao) return

    let onPassIxs;
    switch (instructionParams.type) {
      case "memo":
        (onPassIxs = buildMemoInstruction(instructionParams.message));
        break;
      case "transfer":
        (onPassIxs = await buildTransferInstruction(
          currentDao.daoAccount.treasury,
          instructionParams.destination,
          instructionParams.mint,
          instructionParams.amount,
          this.rpcProvider));
        break;
    }

    this.saveProposalDetails(proposalDetails)
    let resp
    switch (version) {
      case "V0.2":
        resp = await this.createProposalV02(currentDao, onPassIxs, marketParams as OpenbookMarketParams)
      case "V1":
        resp = await this.createProposalV1(currentDao, onPassIxs, marketParams as AmmMarketParams)
    }
    return resp
  }
}