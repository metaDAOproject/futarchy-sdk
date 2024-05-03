import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { AnchorProvider, BN, Program, Provider } from "@coral-xyz/anchor";
import {
  createAssociatedTokenAccountIdempotentInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import numeral from "numeral";
import {
  AutocratProgram,
  Dao,
  DaoAccount,
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
import { AMM_PROGRAM_ID, AUTOCRAT_PROGRAM_ID, AutocratClient, CONDITIONAL_VAULT_PROGRAM_ID, ConditionalVault, ConditionalVaultClient, getATA, getAmmAddr, getDaoTreasuryAddr, getVaultAddr, getVaultFinalizeMintAddr, getVaultRevertMintAddr } from "@metadaoproject/futarchy-ts";
import { MethodsBuilder } from "@coral-xyz/anchor/dist/cjs/program/namespace/methods";
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";

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
  ): Promise<string[] | undefined> {
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
      );
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
  createMemoInstruction() {
    return {
      programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
      accounts: [],
      data: Buffer.from("Memo", "utf8")
    }
  }

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
    const accountInfo = await getAccount(this.rpcProvider.connection, userTokenAccountAddress);

    // The amount is a BigInt, convert it to a string if necessary
    return accountInfo.amount.toString();
  }

  async mintIx(amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccountWithProtocol) {
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
        .mintConditionalTokens(amount)
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
    return ixs
  }

  async createProposal(daoAggregate: DaoAggregate, user: PublicKey) {
    const proposalKP = Keypair.generate();
    const proposal = proposalKP.publicKey;

    console.log(proposal)
    const currentDao = daoAggregate.daos.filter((dao) => dao.protocol.autocrat.programId.toString() == this.autocratClient.autocrat.programId.toString())[1]
    if (!currentDao) return

    console.log(currentDao.publicKey.toString())
    const autocrat = this.autocratClient.autocrat
    const vaultClient = this.autocratClient.vaultClient
    const ammClient = this.autocratClient.ammClient
    const treasury = currentDao.daoAccount.treasury

    const usdcMint = currentDao.daoAccount.usdcMint;
    const tokenMint = currentDao.daoAccount.tokenMint
    if (!tokenMint) return
    const vaultProgramId = vaultClient.vaultProgram.programId

    console.log(usdcMint.toString(), tokenMint.toString())
    const [baseVault] = getVaultAddr(vaultProgramId, treasury, tokenMint, proposal);
    const [quoteVault] = getVaultAddr(vaultProgramId, treasury, usdcMint, proposal);

    const [passBase] = getVaultFinalizeMintAddr(vaultProgramId, baseVault);
    const [passQuote] = getVaultFinalizeMintAddr(vaultProgramId, quoteVault);
    const [passAmm] = getAmmAddr(ammClient.program.programId, passBase, passQuote, proposal);

    const [failBase] = getVaultRevertMintAddr(vaultProgramId, baseVault);
    const [failQuote] = getVaultRevertMintAddr(vaultProgramId, quoteVault);
    const [failAmm] = getAmmAddr(ammClient.program.programId, failBase, failQuote, proposal);

    const daoAccount = await autocrat.account.dao.fetch(currentDao.publicKey)

    const baseTokensToLP: BN = daoAccount.minBaseFutarchicLiquidity
    const quoteTokensToLP: BN = daoAccount.minQuoteFutarchicLiquidity


    console.log(baseTokensToLP.toNumber(), quoteTokensToLP.toNumber())
    const baseBalance = await this.getUserTokenBalance(tokenMint)
    const quoteBalance = await this.getUserTokenBalance(usdcMint)
    console.log(baseBalance, quoteBalance)
    const memoIx = this.createMemoInstruction()

    const initializeBaseVaultIx = await this.autocratClient.vaultClient.initializeVaultIx(treasury, tokenMint, proposal).transaction()
    const initializeQuoteIx = await this.autocratClient.vaultClient.initializeVaultIx(treasury, usdcMint, proposal).transaction()

    console.log(tokenMint.toString())




    const mintBaseTokensTx = await vaultClient.mintConditionalTokensIx(baseVault, tokenMint, baseTokensToLP, user).transaction()
    const mintQuoteTokensTx = await vaultClient.mintConditionalTokensIx(quoteVault, usdcMint, quoteTokensToLP, user).transaction()

    const createAmmdAddLiquidityTx = await ammClient
      .createAmmIx(passBase, passQuote, daoAccount.twapInitialObservation, daoAccount.twapMaxObservationChangePerUpdate, proposal)
      .postInstructions([
        await ammClient.createAmmIx(failBase, failQuote, daoAccount.twapInitialObservation, daoAccount.twapMaxObservationChangePerUpdate, proposal).instruction(),
        await this.autocratClient.ammClient.addLiquidityIx(passAmm, passBase, passQuote, quoteTokensToLP, baseTokensToLP, new BN(0)).instruction(),
        await this.autocratClient.ammClient.addLiquidityIx(failAmm, failBase, failQuote, quoteTokensToLP, baseTokensToLP, new BN(0)).instruction(),
      ]).transaction()

    console.log("initializeBaseVaultIx", initializeBaseVaultIx.instructions)
    console.log("initializeQuoteIx ", initializeQuoteIx.instructions)
    console.log("mintBaseTokensTx", mintBaseTokensTx.instructions)
    console.log("mintQuoteTokensTx", mintQuoteTokensTx.instructions)
    console.log("createAMMaddLiquidityTx", createAmmdAddLiquidityTx.instructions)
    const initializeProposalTx = await this.autocratClient
      .initializeProposalIx(proposalKP, "www.google.com", memoIx, currentDao.publicKey, tokenMint, usdcMint, baseTokensToLP, quoteTokensToLP)
      .preInstructions([await autocrat.account.proposal.createInstruction(proposalKP, 2500)])
      .signers([proposalKP])
      .transaction()

    initializeProposalTx.feePayer = proposalKP.publicKey
    initializeProposalTx.recentBlockhash = (await this.rpcProvider.connection.getLatestBlockhash()).blockhash
    initializeProposalTx.sign(proposalKP)
    return this.transactionSender?.send([
      initializeBaseVaultIx,
      initializeQuoteIx,
      mintBaseTokensTx,
      mintQuoteTokensTx,
      createAmmdAddLiquidityTx,
    ],
      this.rpcProvider.connection,
      [initializeProposalTx],
    )
  }
}
