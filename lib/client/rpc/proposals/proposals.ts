import { PublicKey, Transaction } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import {
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountIdempotentInstruction,
  getAssociatedTokenAddressSync
} from "@solana/spl-token";
import numeral from "numeral";
import {
  Dao,
  DaoAggregate,
  FutarchyProtocol,
  ProgramVersionLabel
} from "@/types";
import { Proposal, ProposalAccounts } from "@/types/proposals";
import { FutarchyProposalsClient } from "@/client";
import {
  VaultAccount,
  VaultAccountWithProtocol
} from "@/types/conditionalVault";
import { TransactionSender } from "@/transactions";
import { enrichTokenMetadata } from "@/tokens";
import { getProposalFromAccount } from "@/proposal";
import {
  AMM_PROGRAM_ID,
  AUTOCRAT_PROGRAM_ID,
  AutocratClient,
  CONDITIONAL_VAULT_PROGRAM_ID
} from "@metadaoproject/futarchy";
import { SendTransactionResponse } from "@/types/transactions";

import {
  CreateProposalInstruction,
  MarketParams,
  ProposalDetails
} from "@/types/createProp";
import { FinalizeProposalClient } from "./finalizeProposal";
import { CreateProposalClient } from "./createProposal";

export class FutarchyRPCProposalsClient implements FutarchyProposalsClient {
  private rpcProvider: AnchorProvider;
  private futarchyProtocols: FutarchyProtocol[];
  private transactionSender: TransactionSender | undefined;
  private finalizeProposalClient: FinalizeProposalClient;
  private createProposalClient: CreateProposalClient;
  public autocratClient: AutocratClient;

  constructor(
    rpcProvider: AnchorProvider,
    futarchyProtocols: FutarchyProtocol[],
    transactionSender: TransactionSender | undefined
  ) {
    this.rpcProvider = rpcProvider;
    this.futarchyProtocols = futarchyProtocols;
    this.transactionSender = transactionSender;
    this.autocratClient = new AutocratClient(
      rpcProvider,
      AUTOCRAT_PROGRAM_ID,
      CONDITIONAL_VAULT_PROGRAM_ID,
      AMM_PROGRAM_ID,
      []
    );
    this.finalizeProposalClient = new FinalizeProposalClient(
      this,
      rpcProvider,
      this.autocratClient,
      transactionSender
    );
    this.createProposalClient = new CreateProposalClient(
      this,
      rpcProvider,
      this.autocratClient,
      transactionSender
    );
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
            ...prop
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
              )
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
  ): SendTransactionResponse {
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
            vaultAccount.conditionalOnRevertTokenMint
        })
        .instruction()
    ];
    const tx = new Transaction().add(...ixs);
    return this.transactionSender.send([tx], this.rpcProvider.connection);
  }

  public async createProposal(
    daoAggregate: DaoAggregate,
    version: ProgramVersionLabel = "V0.3",
    instructionParams: CreateProposalInstruction,
    marketParams: MarketParams,
    proposalDetails: ProposalDetails
  ) {
    return this.createProposalClient.createProposal(
      daoAggregate,
      version,
      instructionParams,
      marketParams,
      proposalDetails
    );
  }

  public async finalizeProposal(proposal: Proposal) {
    return this.finalizeProposalClient.finalizeProposal(proposal);
  }

  async getVaultAccounts(
    vaultAccount: VaultAccountWithProtocol,
    proposal: PublicKey
  ) {
    const userConditionalOnFinalizeTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.conditionalOnFinalizeTokenMint,
      this.rpcProvider.publicKey,
      true
    );

    const userConditionalOnRevertTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.conditionalOnRevertTokenMint,
      this.rpcProvider.publicKey,
      true
    );

    const userUnderlyingTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.underlyingTokenMint,
      this.rpcProvider.publicKey,
      true
    );

    return {
      userConditionalOnFinalizeTokenAccount,
      userConditionalOnRevertTokenAccount,
      userUnderlyingTokenAccount,
      conditionalOnFinalizeTokenMint:
        vaultAccount.conditionalOnFinalizeTokenMint,
      conditionalOnRevertTokenMint: vaultAccount.conditionalOnRevertTokenMint,
      vaultUnderlyingTokenAccount: vaultAccount.underlyingTokenAccount,
      tokenProgram: TOKEN_PROGRAM_ID
    };
  }

  public async mergeConditionalTokensForUnderlyingTokens(
    programVersion: ProgramVersionLabel,
    amount: BN,
    proposal: Proposal,
    underlyingToken: "base" | "quote"
  ) {
    if (programVersion == "V0.3" || programVersion == "V0.2") {
      const vaultForVersion = autocratVersionToConditionalVaultMap[proposal.protocol.deploymentVersion]
      const vaultProgram = new Program(vaultForVersion.idl, vaultForVersion.programId, this.rpcProvider)

      const vaultAccount =
        underlyingToken == "base"
          ? proposal.baseVaultAccount
          : proposal.quoteVaultAccount;
      const vaultAddress =
        underlyingToken == "base"
          ? proposal.account.baseVault
          : proposal.account.quoteVault;

      const accounts = await this.getVaultAccounts(
        vaultAccount,
        proposal.publicKey
      );
      const mergeTx = await vaultProgram.methods
        .mergeConditionalTokensForUnderlyingTokens(amount)
        .accounts({
          ...accounts,
          authority: this.rpcProvider.publicKey,
          vault: vaultAddress
        })
        .transaction();

      const resp = await this.transactionSender?.send(
        [mergeTx],
        this.rpcProvider.connection
      );
      return resp;
    } else throw Error("Version not compatible");
  }

  public async withdraw(proposal: Proposal) {
    const vaultForVersion = autocratVersionToConditionalVaultMap[proposal.protocol.deploymentVersion]
    const vaultProgram = new Program(vaultForVersion.idl, vaultForVersion.programId, this.rpcProvider)

    const baseAccounts = await this.getVaultAccounts(
      proposal.baseVaultAccount,
      proposal.publicKey
    );
    const quoteAccounts = await this.getVaultAccounts(
      proposal.quoteVaultAccount,
      proposal.publicKey
    );

    const redeeemBaseIx = (
      await vaultProgram.methods
        .redeemConditionalTokensForUnderlyingTokens()
        .accounts({
          ...baseAccounts,
          authority: this.rpcProvider.publicKey,
          vault: proposal.account.baseVault
        })
        .transaction()
    ).instructions;

    const redeeemQuoteIx = (
      await vaultProgram.methods
        .redeemConditionalTokensForUnderlyingTokens()
        .accounts({
          ...quoteAccounts,
          authority: this.rpcProvider.publicKey,
          vault: proposal.account.quoteVault
        })
        .transaction()
    ).instructions;

    const tx = new Transaction().add(...redeeemBaseIx).add(...redeeemQuoteIx);
    const resp = await this.transactionSender?.send(
      [tx],
      this.rpcProvider.connection
    );
    return resp;
  }

  // TO DO INDEXER
  public async saveProposalDetails(proposalDetails: ProposalDetails) {}
  public async updateProposalAccounts(accounts: ProposalAccounts) {}
}
