import { PublicKey, Transaction, TransactionInstruction } from "@solana/web3.js";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
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
  CONDITIONAL_VAULT_PROGRAM_ID,
  InstructionUtils
} from "@metadaoproject/futarchy";
import { SendTransactionResponse } from "@/types/transactions";

import {
  CreateProposalInstruction,
  MarketParams,
  ProposalDetails
} from "@/types/createProp";
import { FinalizeProposalClient } from "./finalizeProposal";
import { CreateProposalClient } from "./createProposal";
import { autocratVersionToConditionalVaultMap } from "@/constants";
import { throwError } from "rxjs";

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
  ) {
    if (!this.rpcProvider.publicKey || !this.transactionSender) {
      return;
    }
    // we fetch metadata with finalize token mint, but it could be revert mint instead
    const { decimals } = await enrichTokenMetadata(
      vaultAccount.conditionalOnFinalizeTokenMint,
      this.rpcProvider
    );
    const accounts = {
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
      conditionalOnRevertTokenMint: vaultAccount.conditionalOnRevertTokenMint,
      // we used to not need to pass this in, but since we changed some things on the frontend now we do ¯\_(ツ)_/¯
      authority: this.transactionSender.owner
    };
    const finalizeTokenPDACreateIx =
      createAssociatedTokenAccountIdempotentInstruction(
        this.rpcProvider.publicKey,
        getAssociatedTokenAddressSync(
          vaultAccount.conditionalOnFinalizeTokenMint,
          this.rpcProvider.publicKey,
          true
        ),
        this.rpcProvider.publicKey,
        vaultAccount.conditionalOnFinalizeTokenMint
      );
    const revertTokenPDACreateIx =
      createAssociatedTokenAccountIdempotentInstruction(
        this.rpcProvider.publicKey,
        getAssociatedTokenAddressSync(
          vaultAccount.conditionalOnRevertTokenMint,
          this.rpcProvider.publicKey,
          true
        ),
        this.rpcProvider.publicKey,
        vaultAccount.conditionalOnRevertTokenMint
      );
    const mintConditionalsIx = await vaultAccount.protocol.vault.methods
      .mintConditionalTokens(
        new BN(
          numeral(amount)
            .multiply(10 ** (decimals || 0))
            .format("0")
        )
      )
      .accounts(accounts)
      .instruction();

    const ixs = [
      finalizeTokenPDACreateIx,
      revertTokenPDACreateIx,
      mintConditionalsIx
    ];
    const tx = new Transaction().add(...ixs);
    return this.transactionSender.send(
      [tx],
      this.rpcProvider.connection,
      {
        customErrors: [vaultAccount.protocol.vault.idl.errors],
        CUs: 100_000
      },
      { title: "Minting" }
    );
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
    user: PublicKey
  ) {
    const userConditionalOnFinalizeTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.conditionalOnFinalizeTokenMint,
      user,
      true
    );

    const userConditionalOnRevertTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.conditionalOnRevertTokenMint,
      user,
      true
    );

    const userUnderlyingTokenAccount = getAssociatedTokenAddressSync(
      vaultAccount.underlyingTokenMint,
      user,
      true
    );

    return {
      userConditionalOnFinalizeTokenAccount,
      userConditionalOnRevertTokenAccount,
      userUnderlyingTokenAccount,
      conditionalOnFinalizeTokenMint: vaultAccount.conditionalOnFinalizeTokenMint,
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
      const vaultForVersion =
        autocratVersionToConditionalVaultMap[
        proposal.protocol.deploymentVersion
        ];
      const vaultProgram = new Program(
        vaultForVersion.idl,
        vaultForVersion.programId,
        this.rpcProvider
      );

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
        this.rpcProvider.publicKey
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
        this.rpcProvider.connection,
        {
          customErrors: [vaultProgram.idl.errors],
          CUs: 80_000
        },
        { title: "Merging Conditional Tokens" }
      );
      return resp;
    } else throw Error("Version not compatible");
  }

  private async createRedeemIx(
    vaultProgram: any,
    accounts: Record<string, PublicKey>,
    vault: PublicKey,
    user: PublicKey
  ) {
    const passVaultAccountRedeemCreateIx = 
      createAssociatedTokenAccountIdempotentInstruction(
        user,
        accounts.userConditionalOnFinalizeTokenAccount, // TODO: Review if we want to instead use getAssociatedTokenAddressSync()
        user,
        accounts.conditionalOnFinalizeTokenMint
      );
    
    const failVaultAccountRedeemCreateIx = 
      createAssociatedTokenAccountIdempotentInstruction(
        user,
        accounts.userConditionalOnRevertTokenAccount, // TODO: Review if we want to instead use getAssociatedTokenAddressSync()
        user,
        accounts.conditionalOnRevertTokenMint
      );

    let redeem = (
      vaultProgram.methods
        .redeemConditionalTokensForUnderlyingTokens()
        .accounts({
          ...accounts,
          authority: user,
          vault
        })
        .preInstructions(
          [passVaultAccountRedeemCreateIx, failVaultAccountRedeemCreateIx]
        )
    );

    return redeem && (await redeem.transaction()).instructions;
  }

  public async withdraw(proposal: Proposal) {
    const user = this.rpcProvider.publicKey
    const vaultForVersion =
      autocratVersionToConditionalVaultMap[proposal.protocol.deploymentVersion];
    const vaultProgram = new Program(
      vaultForVersion.idl,
      vaultForVersion.programId,
      this.rpcProvider
    );

    const baseAccounts = await this.getVaultAccounts(proposal.baseVaultAccount, user);
    const quoteAccounts = await this.getVaultAccounts(proposal.quoteVaultAccount, user);

    const redeemBaseIx = await this.createRedeemIx(vaultProgram, baseAccounts, proposal.account.baseVault, user);
    const redeemQuoteIx = await this.createRedeemIx(vaultProgram, quoteAccounts, proposal.account.quoteVault, user);

    const tx = new Transaction();
    if (redeemBaseIx) tx.add(...redeemBaseIx);
    if (redeemQuoteIx) tx.add(...redeemQuoteIx);
  
    if(!redeemBaseIx && !redeemQuoteIx) throw new Error("No account")

    const resp = this.transactionSender?.send(
      [tx],
      this.rpcProvider.connection,
      {
        customErrors: [vaultProgram.idl.errors],
        CUs: 130_000
      },
      { title: "Withdrawing" }
    );
    return resp;
  }

  // TO DO INDEXER
  public async saveProposalDetails(proposalDetails: ProposalDetails) { }
  public async updateProposalAccounts(accounts: ProposalAccounts) { }
}
