import {
  Commitment,
  Connection,
  Keypair,
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Account,
  TOKEN_PROGRAM_ID,
  TokenAccountNotFoundError,
  TokenInvalidAccountOwnerError,
  TokenInvalidMintError,
  TokenInvalidOwnerError,
  createAssociatedTokenAccountIdempotentInstruction,
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import numeral from "numeral";
import {
  Dao,
  DaoAggregate,
  FutarchyProtocol,
} from "@/types";
import { Proposal } from "@/types/proposals";
import { FutarchyProposalsClient } from "@/client";
import {
  VaultAccount,
  VaultAccountWithProtocol,
} from "@/types/conditionalVault";
import { TransactionSender } from "@/transactions";
import { enrichTokenMetadata } from "@/tokens";
import { getProposalFromAccount } from "@/proposal";
import { AMM_PROGRAM_ID, AUTOCRAT_PROGRAM_ID, AutocratClient, CONDITIONAL_VAULT_PROGRAM_ID, getAmmAddr, getVaultAddr, getVaultFinalizeMintAddr, getVaultRevertMintAddr } from "@metadaoproject/futarchy-ts";
import { SendTransactionResponse, TransactionError } from "@/types/transactions";
import { OPENBOOK_TWAP_PROGRAM_IDV0_2, SYSTEM_PROGRAM } from "@/constants";
import { OpenBookV2Client } from "@openbook-dex/openbook-v2";
import { OpenbookTwapV0_2 as OpenbookTwap, IDL as OPENBOOK_TWAP_IDL } from "@/idl/openbook_twap_v0.2";
import { ConditionalVault, IDL as CONDITIONAL_VAULT_IDL } from "@/idl/conditional_vault_v0.2";
import { deserializeMetadata, findMetadataPda } from "@metaplex-foundation/mpl-token-metadata";
import { Metadata, keypairIdentity } from "@metaplex-foundation/js";
import { AutocratV0 as AutocratV0_2, IDL as AutocratV0_2_IDL } from "@/idl/autocrat_v0.2";
import { MPL_TOKEN_METADATA_PROGRAM_ID as UMI_MPL_TOKEN_METADATA_PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { fromWeb3JsPublicKey, toWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { createUmi, signerIdentity } from "@metaplex-foundation/umi";

const MPL_TOKEN_METADATA_PROGRAM_ID = toWeb3JsPublicKey(
  UMI_MPL_TOKEN_METADATA_PROGRAM_ID
);

// import { associatedTokenProgram, tokenProgram } from "@metaplex-foundation/js";
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

  buildMemoInstruction() {
    return {
      programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
      accounts: [],
      data: Buffer.from("Memo", "utf8")
    }
  }

  async getOrCreateAssociatedTokenAccount(
    mint: PublicKey,
    owner: PublicKey,
    allowOwnerOffCurve = false,
    commitment?: Commitment,
    programId = TOKEN_PROGRAM_ID,
    associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID
  ): Promise<Account> {
    const associatedToken = getAssociatedTokenAddressSync(
      mint,
      owner,
      allowOwnerOffCurve,
      programId,
      associatedTokenProgramId
    );
    let account: Account;
    try {
      account = await getAccount(this.rpcProvider.connection, associatedToken, commitment, programId);
    } catch (error: unknown) {
      if (error instanceof TokenAccountNotFoundError || error instanceof TokenInvalidAccountOwnerError) {
        try {
          const transaction = new Transaction().add(
            createAssociatedTokenAccountInstruction(
              this.rpcProvider.publicKey,
              associatedToken,
              owner,
              mint,
              programId,
              associatedTokenProgramId
            )
          );

          this.transactionSender?.send([transaction], this.rpcProvider.connection)
        } catch (error: unknown) { }

        // Now this should always succeed
        account = await getAccount(this.rpcProvider.connection, associatedToken, commitment, programId);
      } else {
        throw error;
      }
    }

    if (!account.mint.equals(mint)) throw new TokenInvalidMintError();
    if (!account.owner.equals(owner)) throw new TokenInvalidOwnerError();

    return account;
  }

  // Transfer
  buildTreasuryTransferInstruction = async (
    daoTreasury: PublicKey,
    destinationAccount: PublicKey,
    tokenMint: PublicKey,
    amount: number
  ) => {
    console.log(`Transfer token ${tokenMint.toString()}`);
    // This gets the origin account with the token intended for transfer
    const originAcc = await this.getOrCreateAssociatedTokenAccount(
      tokenMint,
      daoTreasury,
      true
    );
    const accountBalance = (
      await this.rpcProvider.connection.getTokenAccountBalance(originAcc.address)
    ).value;
    console.log(accountBalance.uiAmountString);

    const transferAmount = amount * 10 ** accountBalance.decimals;

    if (transferAmount > Number(accountBalance.amount)) {
      console.error(
        `Account does not have enough balance to transfer ${transferAmount}`
      );
      return;
    }
    //create indopedent
    const destinationAcc = await this.getOrCreateAssociatedTokenAccount(tokenMint, destinationAccount, true);
    const transferIx = createTransferInstruction(
      originAcc.address,
      destinationAcc.address,
      daoTreasury,
      transferAmount
    );

    return transferIx;
  };

  async simulate(tx: Transaction) {
    const { blockhash } = await this.rpcProvider.connection.getLatestBlockhash();
    tx.recentBlockhash = blockhash;
    tx.feePayer = this.rpcProvider.wallet.publicKey; // Assuming the provider has a wallet

    try {

      const simulationResult = this.rpcProvider.connection.simulateTransaction(tx)
      console.log(simulationResult)
    } catch (e) {
      console.error("Simulation error:", e)
    }
    // const wireTransaction = tx.
  }

  async getUserTokenBalance(tokenMintAddress: PublicKey) {
    // Get the associated token account for the user's wallet and the token mint
    const userTokenAccountAddress = await getAssociatedTokenAddress(
      new PublicKey(tokenMintAddress),
      this.rpcProvider.publicKey
    );

    // Fetch the account info
    const accountInfo = await getAccount(this.rpcProvider.connection, userTokenAccountAddress).catch(e => console.log(e))
    // The amount is a BigInt, convert it to a string if necessary
    return accountInfo?.amount.toString();
  }

  async withdrawIx(vaultAccount: VaultAccount, pubkey: PublicKey) {

    const userPassTokenAccount = getAssociatedTokenAddressSync(vaultAccount.conditionalOnFinalizeTokenMint, this.rpcProvider.publicKey, true);
    const userFailTokenAccount = getAssociatedTokenAddressSync(vaultAccount.conditionalOnRevertTokenMint, this.rpcProvider.publicKey, true);
    const userUnderlyingTokenAccount = getAssociatedTokenAddressSync(vaultAccount.underlyingTokenMint, this.rpcProvider.publicKey, true);

    const ix = await this.autocratClient.vaultClient.vaultProgram.methods
      .redeemConditionalTokensForUnderlyingTokens()
      .accounts({
        vault: pubkey,
        conditionalOnFinalizeTokenMint:
          vaultAccount.conditionalOnFinalizeTokenMint,
        conditionalOnRevertTokenMint: vaultAccount.conditionalOnRevertTokenMint,
        vaultUnderlyingTokenAccount: vaultAccount.underlyingTokenAccount,
        userConditionalOnFinalizeTokenAccount: userPassTokenAccount,
        userConditionalOnRevertTokenAccount: userFailTokenAccount,
        userUnderlyingTokenAccount,
      })
      .preInstructions([
        createAssociatedTokenAccountIdempotentInstruction(
          this.rpcProvider.publicKey,
          userPassTokenAccount,
          this.rpcProvider.publicKey,
          vaultAccount.conditionalOnFinalizeTokenMint
        ),
        createAssociatedTokenAccountIdempotentInstruction(
          this.rpcProvider.publicKey,
          userFailTokenAccount,
          this.rpcProvider.publicKey,
          vaultAccount.conditionalOnRevertTokenMint
        ),
        createAssociatedTokenAccountIdempotentInstruction(
          this.rpcProvider.publicKey,
          userUnderlyingTokenAccount,
          this.rpcProvider.publicKey,
          vaultAccount.underlyingTokenMint
        ),
      ])
      .instruction();
    return ix;
  }
  // async withdrawAllVaults(){
  //   const allVaults = await this.autocratClient.vaultClient.vaultProgram.account.conditionalVault.all()

  //   allVaults.map((vault) => {
  //     if(vault.account.underlyingTokenMint.toString() == "ABizbp4pXowKQJ1pWgPeWPYDfSKwg34A7Xy1fxTu7No9")
  //       const tx = new Transaction().add(this.withdrawIx(vault.account, vault.publicKey))
  //       this.transactionSender?.send(tx)
  //   } )
  // }

  async createVersionedTransaction(instructions: TransactionInstruction[]) {
    // instructions.map((ix) => ix.keys.map((key) => console.log(key)))

    if (!this.rpcProvider.publicKey) throw new Error('Wallet is not connected or public key is not available.');

    const recentBlockhashResponse = await this.rpcProvider.connection.getLatestBlockhash();
    if (!recentBlockhashResponse.blockhash) {
      throw new Error('Failed to get the latest blockhash.');
    }

    console.log(instructions)

    const messageV0 = new TransactionMessage({
      payerKey: this.rpcProvider.publicKey,
      recentBlockhash: recentBlockhashResponse.blockhash,
      instructions,
    }).compileToV0Message()

    return new VersionedTransaction(messageV0);
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

    const tx = await this.createVersionedTransaction(ix)
    tx.sign([conditionalOnFinalizeKP, conditionalOnRevertKP])

    return [vault, tx];
  }

  public async createProposalV02(daoAggregate: DaoAggregate): SendTransactionResponse {
    const currentDao = daoAggregate.daos.filter((dao) => dao.protocol.deploymentVersion === "V0.2")[0]
    if (!currentDao) return { signatures: [], errors: [{ name: "", message: "No dao found for this version" }] }
    
    const proposalKP = Keypair.generate();

    const basePassMint = Keypair.generate();
    const baseFailMint = Keypair.generate();
    const quotePassMint = Keypair.generate();
    const quoteFailMint = Keypair.generate();

    const passMarketKP = Keypair.generate();
    const failMarketKP = Keypair.generate();

    const autocrat = new Program<AutocratV0_2>(AutocratV0_2_IDL, currentDao.protocol.autocrat.programId, this.rpcProvider)
    
    //@ts-ignore
    const daoAccount = await autocrat.account.dao.fetch(currentDao.publicKey)
    if (!daoAccount) return

    // const baseNonce:BN = new BN(daoAccount.proposalCount);
    const baseNonce: BN = new BN(1027);
    const daoTreasury = daoAccount.treasury
    const vaultProgramId = new PublicKey("vAuLTQjV5AZx5f3UgE75wcnkxnQowWxThn1hGjfCVwP")
    const vaultProgram = new Program<ConditionalVault>(CONDITIONAL_VAULT_IDL, vaultProgramId, this.rpcProvider)
    const treasury = daoAccount.treasury

    const tokenMint = daoAccount.metaMint!!;
    const usdcMint = daoAccount.usdcMint;

    const openbook = new OpenBookV2Client(this.rpcProvider);
    const openbookTwap = new Program<OpenbookTwap>(OPENBOOK_TWAP_IDL, OPENBOOK_TWAP_PROGRAM_IDV0_2, this.rpcProvider);

    const [baseVault, initializeBaseVaultTx] = await this.initializeVaultTx(treasury, tokenMint, baseNonce, vaultProgram, basePassMint, baseFailMint)
    const [quoteVault, initializeQuoteVaultTx] = await this.initializeVaultTx(treasury, usdcMint, baseNonce.or(new BN(1).shln(63)), vaultProgram, quotePassMint, quoteFailMint)

    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const elevenDaysInSeconds = 11 * 24 * 60 * 60;
    const expiryTime = new BN(currentTimeInSeconds + elevenDaysInSeconds);
    const quoteLotSize = new BN(100);
    const baseLotSize = currentDao.protocol.autocrat.programId.toString() == "fut5MzSUFcmxaEHMvo9qQThrAL4nAv5FQ52McqhniSt" ? new BN(1e12): new BN(1e8);
    const maxObservationChangePerUpdateLots: BN = new BN(5000);

    const twapSeed = Buffer.from("twap_market", "utf8")

    const [twapPassMarket] = PublicKey.findProgramAddressSync(
      [twapSeed, passMarketKP.publicKey.toBuffer()],
      OPENBOOK_TWAP_PROGRAM_IDV0_2
    )
    const [twapFailMarket] = PublicKey.findProgramAddressSync(
      [twapSeed, failMarketKP.publicKey.toBuffer()],
      OPENBOOK_TWAP_PROGRAM_IDV0_2
    )

    // const expectedValue = new BN(10000)
    const expectedValue = daoAccount.twapExpectedValue
    const makerFee = new BN(0)
    const takerFee = new BN(0)
    let [passMarketIx, passMarketSigners] =
      await openbook.createMarketIx(
        this.rpcProvider.publicKey,
        // MAX 10 CHAR
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
        { confFilter: 0.1, maxStalenessSlots: 100 },
        passMarketKP,
        daoAccount.treasury
      );

    const createPassMarketTx = await this.createVersionedTransaction(passMarketIx)
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
        { confFilter: 0.1, maxStalenessSlots: 100 },
        failMarketKP,
        daoTreasury
      );

    const createFailMarketTx = await this.createVersionedTransaction(failMarketIx)
    createFailMarketTx.sign(failMarketSigners)

    const createTwapPassIxs = (await openbookTwap.methods
      .createTwapMarket(expectedValue, maxObservationChangePerUpdateLots)
      .accounts({ market: passMarketKP.publicKey, twapMarket: twapPassMarket, systemProgram: SYSTEM_PROGRAM, payer: this.rpcProvider.publicKey })
      .transaction()).instructions
    const createTwapFailIxs = (await openbookTwap.methods
      .createTwapMarket(expectedValue, maxObservationChangePerUpdateLots)
      .accounts({ market: failMarketKP.publicKey, twapMarket: twapFailMarket, systemProgram: SYSTEM_PROGRAM, payer: this.rpcProvider.publicKey })
      .transaction()).instructions

    const createTwaps = new Transaction().add(...createTwapPassIxs, ...createTwapFailIxs)

    const instruction = this.buildMemoInstruction()

    const initializeProposalIxs = (await autocrat.methods
      .initializeProposal("wwww.google.com", instruction)
      .preInstructions([
        // @ts-ignore
        await autocrat.account.proposal.createInstruction(proposalKP, 1000)
      ])
      .signers([proposalKP])
      .accounts({
        proposal: proposalKP.publicKey,
        dao: currentDao.publicKey,
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

    const initializeProposalTx = await this.createVersionedTransaction([...initializeProposalIxs])
    initializeProposalTx.sign([proposalKP])

    const txResp = await this.transactionSender?.send(
      [
        initializeBaseVaultTx,
        initializeQuoteVaultTx,
        createPassMarketTx,
        createFailMarketTx,
        createTwaps,
        initializeProposalTx
      ],
      this.rpcProvider.connection,
      { commitment: "confirmed", sequential: true }
    )
    return txResp
  }


  async createProposal(daoAggregate: DaoAggregate) {
    const proposalKP = Keypair.generate();

    //TO DO error handling around prop secret key and tx failures before initialization
    // const secretKey = Uint8Array.from(keypair);
    // const proposalKP = Keypair.fromSecretKey(secretKey)
    const proposal = proposalKP.publicKey

    const currentDao = daoAggregate.daos.filter((dao) => dao.protocol.deploymentVersion === "V1").slice(-1)[0]
    if (!currentDao) return

    const autocrat = this.autocratClient.autocrat
    const vaultClient = this.autocratClient.vaultClient
    const ammClient = this.autocratClient.ammClient
    const treasury = currentDao.daoAccount.treasury

    const usdcMint = currentDao.daoAccount.usdcMint;
    const tokenMint = currentDao.daoAccount.tokenMint!!;
    const vaultProgramId = vaultClient.vaultProgram.programId

    const daoAccount = await autocrat.account.dao.fetch(currentDao.publicKey)

    const baseTokensToLP: BN = daoAccount.minBaseFutarchicLiquidity
    const quoteTokensToLP: BN = daoAccount.minQuoteFutarchicLiquidity

    const memoIx = this.buildMemoInstruction()

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
      .initializeProposalIx(proposalKP, "www.google.com", memoIx, currentDao.publicKey, tokenMint, usdcMint, quoteTokensToLP, quoteTokensToLP)
      .preInstructions([await autocrat.account.proposal.createInstruction(proposalKP, 2500)])
      .signers([proposalKP])
      .transaction()).instructions

    // initializeProposal needs to be a versioned tx to be able to partial sign with wallet signAllTransactions
    // signing after a partial sign overwrites it
    // versionedTransaction have no partialSign fn because it's sign fn is a partialSign
    const initializeProposalTx = await this.createVersionedTransaction(initializeProposalIx)
    initializeProposalTx.sign([proposalKP])

    const txResp = await this.transactionSender?.send(
      [
        initializeVaultsAndMintTx,
        createAmmdAddLiquidityTx,
        initializeProposalTx
      ],
      this.rpcProvider.connection,
      { commitment: "finalized", sequential: true }
    )
    if (!txResp?.errors?.length && txResp) {
    }
    return txResp
  }


}
