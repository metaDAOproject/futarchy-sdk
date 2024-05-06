import {
  Commitment,
  Connection,
  Keypair,
  PublicKey,
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
import { Metadata } from "@metaplex-foundation/js";
import { AutocratV0 as AutocratV0_2, IDL as AutocratV0_2_IDL } from "@/idl/autocrat_v0.2";
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

    const destinationAcc = await this.getOrCreateAssociatedTokenAccount(tokenMint,destinationAccount,true);
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
    instructions.map((ix) => ix.keys.map((key) => console.log(key)))

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

  // async fetchOnchainMetadataForMint (
  //   address: PublicKey
  // ): Promise<
  //   | {
  //       key: PublicKey;
  //       metadata: Metadata;
  //     }
  //   | undefined
  // > {
  //   const pda = findMetadataPda(umi, {
  //     mint: fromWeb3JsPublicKey(address),
  //   });

  //   const acct = await umi.rpc.getAccount(pda[0]);
  //   if (!acct.exists) return undefined;

  //   return {
  //     key: toWeb3JsPublicKey(pda[0]),
  //     metadata: deserializeMetadata(acct),
  //   };
  // };

  // async generateAddMetadataToConditionalTokensIx(
  //   mint: PublicKey,
  //   onFinalizeMint: PublicKey,
  //   onRevertMint: PublicKey,
  //   vault: PublicKey,
  //   nonce: BN
  // ): Promise<TransactionInstruction | undefined> {
  //   const tokenMetadata = await fetchOnchainMetadataForMint(mint);
  //   if (!tokenMetadata) {
  //     console.warn(
  //       `no metadata found for token = ${mint.toBase58()}, conditional tokens will not have metadata`
  //     );
  //     return undefined;
  //   }

  //   const { metadata, key: metadataKey } = tokenMetadata;
  //   const conditionalOnFinalizeTokenMetadataKey = await findMetaplexMetadataPda(
  //     onFinalizeMint
  //   );
  //   const conditionalOnRevertTokenMetadataKey = await findMetaplexMetadataPda(
  //     onRevertMint
  //   );

  //   // pull off the least significant 32 bits representing the proposal count
  //   const proposalCount = nonce.and(new BN(1).shln(32).sub(new BN(1)));

  //   // create new json, take that and pipe into the instruction
  //   const uploadResult = await uploadOffchainMetadata(
  //     proposalCount,
  //     metadata.symbol
  //   );

  //   if (!uploadResult) return undefined;
  //   const { passTokenMetadataUri, failTokenMetadataUri } = uploadResult;
  //   if (!passTokenMetadataUri || !failTokenMetadataUri) {
  //     // an error here is likely transient, so we want to fail the script so that the caller can try again. otherwise, we will end up with a token with no linkable off-chain metadata.
  //     throw new Error(
  //       `required metadata is undefined, pass = ${passTokenMetadataUri}, fail = ${failTokenMetadataUri}. Please try again.`
  //     );
  //   }

  //   console.log(
  //     `[proposal = ${proposalCount.toNumber()}] pass token metadata uri: ${passTokenMetadataUri}, fail token metadata uri: ${failTokenMetadataUri}`
  //   );

  //   return vaultProgram.methods
  //     .addMetadataToConditionalTokens(
  //       proposalCount,
  //       passTokenMetadataUri,
  //       failTokenMetadataUri
  //     )
  //     .accounts({
  //       payer: ,
  //       vault,
  //       underlyingTokenMint: mint,
  //       underlyingTokenMetadata: metadataKey,
  //       conditionalOnFinalizeTokenMint: onFinalizeMint,
  //       conditionalOnRevertTokenMint: onRevertMint,
  //       conditionalOnFinalizeTokenMetadata: conditionalOnFinalizeTokenMetadataKey,
  //       conditionalOnRevertTokenMetadata: conditionalOnRevertTokenMetadataKey,
  //       tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
  //       systemProgram: SystemProgram.programId,
  //       rent: SYSVAR_RENT_PUBKEY,
  //     })
  //     .instruction();
  // }


  public async createProposalV02(daoAggregate: DaoAggregate): SendTransactionResponse {
    const currentDao = daoAggregate.daos.filter((dao) => dao.protocol.deploymentVersion === "V0.2")[0]
    if (!currentDao) return { signatures: [], errors: [{ name: "", message: "No dao found for this version" }] }
    // const keypair = [77, 195, 26, 149, 156, 91, 191, 182, 119, 195, 207, 138, 205, 222, 136, 17, 246, 173, 73, 232, 193, 220, 10, 124, 156, 67, 131, 95, 92, 29, 46, 223, 68, 94, 58, 115, 41, 108, 251, 183, 87, 141, 52, 246, 148, 61, 60, 78, 90, 156, 209, 254, 189, 221, 85, 150, 192, 16, 34, 70, 242, 166, 113, 239]
    // const secretKey = Uint8Array.from(keypair);
    // const proposalKP = Keypair.fromSecretKey(secretKey)
    const proposalKP = Keypair.generate();
    const proposal = proposalKP.publicKey

    const autocrat = new Program<AutocratV0_2>(AutocratV0_2_IDL, "metaRK9dUBnrAdZN6uUDKvxBVKW5pyCbPVmLtUZwtBp", this.rpcProvider)
    const allDaos = await autocrat.account.dao.all()

    const daoAccount = await autocrat.account.dao.fetch(currentDao.publicKey)
    // const baseNonce:BN = new BN(daoAccount.proposalCount);
    const baseNonce: BN = new BN(1000000);
    const daoTreasury = daoAccount.treasury
    const vaultProgramId = new PublicKey("vAuLTQjV5AZx5f3UgE75wcnkxnQowWxThn1hGjfCVwP")
    const vaultProgram = new Program<ConditionalVault>(CONDITIONAL_VAULT_IDL, vaultProgramId, this.rpcProvider)

    const treasury = currentDao.daoAccount.treasury

    const tokenMint = currentDao.daoAccount.tokenMint!!
    const usdcMint = currentDao.daoAccount.usdcMint;

    // const [baseVault] = getVaultAddr(vaultProgramId, treasury, tokenMint, proposal);
    // const [quoteVault] = getVaultAddr(vaultProgramId, treasury, usdcMint, proposal);

    const [baseVault] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("conditional_vault", "utf8"),
        treasury.toBuffer(),
        tokenMint.toBuffer(),
        baseNonce.toArrayLike(Buffer, "le", 8),
      ],
      vaultProgramId
    );

    const [quoteVault] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("conditional_vault", "utf8"),
        treasury.toBuffer(),
        usdcMint.toBuffer(),
        baseNonce.toArrayLike(Buffer, 'le', 8),
      ],
      vaultProgramId
    );

    const baseTokenAccount = getAssociatedTokenAddressSync(tokenMint, baseVault, true);
    const quoteTokenAccount = getAssociatedTokenAddressSync(usdcMint, quoteVault, true);

    const [passBase] = getVaultFinalizeMintAddr(vaultProgramId, baseVault);
    const [passQuote] = getVaultFinalizeMintAddr(vaultProgramId, quoteVault);

    const [failBase] = getVaultRevertMintAddr(vaultProgramId, baseVault);
    const [failQuote] = getVaultRevertMintAddr(vaultProgramId, quoteVault);

    const openbook = new OpenBookV2Client(this.rpcProvider);
    const openbookTwap = new Program<OpenbookTwap>(OPENBOOK_TWAP_IDL, OPENBOOK_TWAP_PROGRAM_IDV0_2, this.rpcProvider);

    let quotePassKP = Keypair.generate();
    let quoteFailKP = Keypair.generate();

    let basePassKP = Keypair.generate();
    let baseFailKP = Keypair.generate();

    const initializeBaseVaultIx = await vaultProgram.methods
      .initializeConditionalVault(treasury, baseNonce)
      .accounts({
        vault: baseVault,
        underlyingTokenMint: tokenMint,
        conditionalOnFinalizeTokenMint: basePassKP.publicKey,
        conditionalOnRevertTokenMint: baseFailKP.publicKey,
        vaultUnderlyingTokenAccount: baseTokenAccount,
        payer: this.rpcProvider.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId
      })
      .signers([basePassKP, baseFailKP])
      .instruction()

    const initializeQuoteVaultIx = await vaultProgram.methods
      .initializeConditionalVault(treasury, baseNonce)
      .accounts({
        vault: quoteVault,
        underlyingTokenMint: usdcMint,
        conditionalOnFinalizeTokenMint: quotePassKP.publicKey,
        conditionalOnRevertTokenMint: quoteFailKP.publicKey,
        vaultUnderlyingTokenAccount: quoteTokenAccount,
        payer: this.rpcProvider.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId
      })
      .signers([quotePassKP, quoteFailKP])
      .instruction()

    const initializeBaseVaultTx = await this.createVersionedTransaction([initializeBaseVaultIx])
    initializeBaseVaultTx.sign([basePassKP, baseFailKP])

    const initializeQuoteVaultTx = await this.createVersionedTransaction([initializeQuoteVaultIx])
    initializeQuoteVaultTx.sign([quotePassKP, quoteFailKP])

    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const elevenDaysInSeconds = 11 * 24 * 60 * 60;
    const expiryTime = new BN(currentTimeInSeconds + elevenDaysInSeconds);
    const quoteLotSize = new BN(100);
    const baseLotSize = new BN(1e8);
    const maxObservationChangePerUpdateLots: BN = new BN(5000);

    let passMarketKP = Keypair.generate();

    const twapSeed = Buffer.from("twap_market", "utf8")

    const [twapPassMarket] = PublicKey.findProgramAddressSync(
      [twapSeed, passMarketKP.publicKey.toBuffer()],
      OPENBOOK_TWAP_PROGRAM_IDV0_2
    )
    let failMarketKP = Keypair.generate();

    const [twapFailMarket] = PublicKey.findProgramAddressSync(
      [twapSeed, failMarketKP.publicKey.toBuffer()],
      OPENBOOK_TWAP_PROGRAM_IDV0_2
    )

    const expectedValue: BN = new BN(10000)

    const makerFee = new BN(0)
    const takerFee = new BN(0)
    let [passMarketIx, passMarketSigners] =
      await openbook.createMarketIx(
        this.rpcProvider.publicKey,
        `${baseNonce}pMETA/pUSDC`,
        passQuote,
        passBase,
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

    let [failMarketIx, failMarketSigners] = await openbook.createMarketIx(
      this.rpcProvider.publicKey,
      `${baseNonce}fMETA/fUSDC`,
      failQuote,
      failBase,
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
    )

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

    console.log(proposalKP, expectedValue, maxObservationChangePerUpdateLots, passMarketKP.publicKey, twapPassMarket, twapFailMarket, failMarketKP.publicKey)
    console.log(proposal, currentDao.publicKey, daoTreasury, quoteVault, baseVault)

    const preIx = await autocrat.account.proposal.createInstruction(proposalKP)
    preIx.keys[0].pubkey = proposalKP.publicKey
    const initializeProposalIxs = (await autocrat.methods
      .initializeProposal("wwww.google.com", instruction)
      .signers([proposalKP])
      .accounts({
        proposal,
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


    // initializeProposal needs to be a versioned tx to be able to partial sign with wallet signAllTransactions
    // signing after a partial sign overwrites it
    // versionedTransaction have no partialSign fn because it's sign fn is a partialSign
    const initializeProposalTx = await this.createVersionedTransaction([preIx, ...initializeProposalIxs])
    initializeProposalTx.sign([proposalKP])

    const txResp = await this.transactionSender?.send(
      [
        initializeBaseVaultTx,
        initializeQuoteVaultTx,
        // createMarketsTx,
        createPassMarketTx,
        createFailMarketTx,
        createTwaps,
        initializeProposalTx
      ],
      this.rpcProvider.connection,
      { commitment: "finalized", sequential: true }
    )
    return txResp
  }


  async createProposal(daoAggregate: DaoAggregate) {
    // const keypair = [25, 111, 35, 204, 221, 176, 254, 247, 101, 231, 192, 64, 105, 173, 22, 31, 119, 111, 15, 135, 239, 17, 175, 152, 223, 187, 143, 147, 5, 95, 251, 245, 110, 203, 74, 146, 31, 43, 170, 247, 111, 37, 73, 202, 158, 51, 54, 172, 134, 84, 227, 59, 135, 93, 150, 75, 108, 235, 168, 76, 161, 11, 175, 230]
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
