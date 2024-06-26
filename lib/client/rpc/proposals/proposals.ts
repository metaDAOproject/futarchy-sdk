import {
  PublicKey,
  Transaction,
  TransactionInstruction
} from "@solana/web3.js";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import {
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountIdempotentInstruction,
  getAssociatedTokenAddressSync
} from "@solana/spl-token";
import numeral from "numeral";
import {
  ConditionalVaultProgram,
  Dao,
  DaoAggregate,
  FutarchyProtocol,
  ProgramVersionLabel
} from "@/types";
import {
  BalanceLockedInProposal,
  ProposalAccounts,
  ProposalWithFullData
} from "@/types/proposals";
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

import {
  CreateProposalInstruction,
  MarketParams,
  ProposalDetails
} from "@/types/createProp";
import { FinalizeProposalClient } from "./finalizeProposal";
import { CreateProposalClient } from "./createProposal";
import { autocratVersionToConditionalVaultMap } from "@/constants";

export class FutarchyRPCProposalsClient implements FutarchyProposalsClient {
  private rpcProvider: AnchorProvider;
  private futarchyProtocols: FutarchyProtocol[];
  public transactionSender: TransactionSender | undefined;
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

  async fetchProposals(
    daoAggregate: DaoAggregate
  ): Promise<ProposalWithFullData[]> {
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
          const proposalsWithVaults: ProposalWithFullData[] = allProposals.map(
            (p) => {
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
            }
          );

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

  public async fetchProposal(
    dao: Dao,
    proposalAcct: PublicKey
  ): Promise<ProposalWithFullData> {
    const proposal = await dao.protocol.autocrat.account.proposal.fetch(
      proposalAcct
    );
    const vaultsByAddress: Record<string, VaultAccount> =
      await this.getVaultsByAddressFromDao(dao);
    const baseVaultAccount = vaultsByAddress[proposal.baseVault.toBase58()];
    const quoteVaultAccount = vaultsByAddress[proposal.quoteVault.toBase58()];
    return {
      ...getProposalFromAccount(
        { account: proposal, publicKey: new PublicKey(proposalAcct) },
        dao,
        baseVaultAccount,
        quoteVaultAccount
      )
    };
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

    const tx = await this.autocratClient.vaultClient
      .mintConditionalTokensIx(
        vaultAccountAddress,
        vaultAccount.underlyingTokenMint,
        new BN(
          numeral(amount)
            .multiply(10 ** (decimals || 0))
            .format("0")
        )
      )
      .transaction();
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
    marketParams: MarketParams
  ) {
    return this.createProposalClient.createProposal(
      daoAggregate,
      version,
      instructionParams,
      marketParams
    );
  }

  public async finalizeProposal(proposal: ProposalWithFullData) {
    return this.finalizeProposalClient.finalizeProposal(proposal);
  }

  async getUserVaultAccounts(
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
      conditionalOnFinalizeTokenMint:
        vaultAccount.conditionalOnFinalizeTokenMint,
      conditionalOnRevertTokenMint: vaultAccount.conditionalOnRevertTokenMint,
      vaultUnderlyingTokenAccount: vaultAccount.underlyingTokenAccount,
      tokenProgram: TOKEN_PROGRAM_ID
    };
  }

  private async createMergeConditionalTokensIxAndProgram(
    amount: BN,
    proposal: ProposalWithFullData,
    underlyingToken: "base" | "quote"
  ): Promise<
    undefined | [TransactionInstruction, Program<ConditionalVaultProgram>]
  > {
    if (
      proposal.protocol.deploymentVersion == "V0.3" ||
      proposal.protocol.deploymentVersion == "V0.2"
    ) {
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

      const accounts = await this.getUserVaultAccounts(
        vaultAccount,
        this.rpcProvider.publicKey
      );
      const mergeIx = await vaultProgram.methods
        .mergeConditionalTokensForUnderlyingTokens(amount)
        .accounts({
          ...accounts,
          authority: this.rpcProvider.publicKey,
          vault: vaultAddress
        })
        .instruction();

      return [mergeIx, vaultProgram];
    }
  }

  public async mergeConditionalTokensForUnderlyingTokens(
    amount: BN,
    proposal: ProposalWithFullData,
    underlyingToken: "base" | "quote"
  ) {
    try {
      const ixAndProgram = await this.createMergeConditionalTokensIxAndProgram(
        amount,
        proposal,
        underlyingToken
      );
      if (!ixAndProgram) return;

      const [mergeIx, vaultProgram] = ixAndProgram;

      const resp = await this.transactionSender?.send(
        [new Transaction().add(mergeIx)],
        this.rpcProvider.connection,
        {
          customErrors: [vaultProgram.idl.errors],
          CUs: 80_000
        },
        { title: "Merging Conditional Tokens" }
      );
      return resp;
    } catch (e) {
      console.error(e);
    }
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

    let redeem = vaultProgram.methods
      .redeemConditionalTokensForUnderlyingTokens()
      .accounts({
        ...accounts,
        authority: user,
        vault
      })
      .preInstructions([
        passVaultAccountRedeemCreateIx,
        failVaultAccountRedeemCreateIx
      ]);

    return redeem && (await redeem.transaction()).instructions;
  }

  public async reclaimFromManyProposals(
    proposalBalances: (BalanceLockedInProposal & {
      proposal: ProposalWithFullData;
    })[]
  ) {
    const transactions: Transaction[] = [];
    for (const proposalBalance of proposalBalances) {
      if (proposalBalance.proposal.state === "Pending") {
        const createRes = await this.createMergeConditionalTokensIxAndProgram(
          new BN(proposalBalance.userBalance.balance),
          proposalBalance.proposal,
          proposalBalance.userBalance.token.symbol
            .toLowerCase()
            .includes("usdc")
            ? "quote"
            : "base"
        );
        if (!createRes) {
          continue;
        }
        const [ix] = createRes;
        if (ix) {
          transactions.push(new Transaction().add(ix));
        }
      } else {
        const vaultForVersion =
          autocratVersionToConditionalVaultMap[
            proposalBalance.proposal.protocol.deploymentVersion
          ];
        const vaultProgram = new Program(
          vaultForVersion.idl,
          vaultForVersion.programId,
          this.rpcProvider
        );

        const tx = await this.createWithdrawTx(
          proposalBalance.proposal,
          vaultProgram
        );
        if (tx) transactions.push(tx);
      }
    }

    const resp = await this.transactionSender?.send(
      transactions,
      this.rpcProvider.connection,
      {
        customErrors: [], // Add appropriate custom errors
        CUs: 220_000
      },
      { title: "Claiming Funds from All Proposals" }
    );
    return resp;
  }

  async createWithdrawTx(
    proposal: ProposalWithFullData,
    vaultProgram: Program<ConditionalVaultProgram>
  ) {
    const user = this.rpcProvider.publicKey;

    const baseAccounts = await this.getUserVaultAccounts(
      proposal.baseVaultAccount,
      user
    );
    const quoteAccounts = await this.getUserVaultAccounts(
      proposal.quoteVaultAccount,
      user
    );

    const redeemBaseIx = await this.createRedeemIx(
      vaultProgram,
      baseAccounts,
      proposal.account.baseVault,
      user
    );
    const redeemQuoteIx = await this.createRedeemIx(
      vaultProgram,
      quoteAccounts,
      proposal.account.quoteVault,
      user
    );

    // NOTE: Create our underlying token accounts in case they don't exist
    const createUnderlyingBaseIx =
      createAssociatedTokenAccountIdempotentInstruction(
        user,
        getAssociatedTokenAddressSync(
          proposal.baseVaultAccount.underlyingTokenMint,
          user,
          true
        ),
        user,
        proposal.baseVaultAccount.underlyingTokenMint
      );

    const createUnderlyingQuoteIx =
      createAssociatedTokenAccountIdempotentInstruction(
        user,
        getAssociatedTokenAddressSync(
          proposal.quoteVaultAccount.underlyingTokenMint,
          user,
          true
        ),
        user,
        proposal.quoteVaultAccount.underlyingTokenMint
      );

    const tx = new Transaction();
    tx.add(createUnderlyingQuoteIx);
    tx.add(createUnderlyingBaseIx);
    if (redeemBaseIx) tx.add(...redeemBaseIx);
    if (redeemQuoteIx) tx.add(...redeemQuoteIx);

    if (!redeemBaseIx && !redeemQuoteIx) throw new Error("No account");

    return tx;
  }

  public async withdraw(proposal: ProposalWithFullData) {
    const vaultForVersion =
      autocratVersionToConditionalVaultMap[proposal.protocol.deploymentVersion];
    const vaultProgram = new Program(
      vaultForVersion.idl,
      vaultForVersion.programId,
      this.rpcProvider
    );
    const tx = await this.createWithdrawTx(proposal, vaultProgram);

    const resp = this.transactionSender?.send(
      [tx],
      this.rpcProvider.connection,
      {
        customErrors: [vaultProgram.idl.errors],
        CUs: 220_000
      },
      { title: "Withdrawing" }
    );
    return resp;
  }

  // TO DO INDEXER
  public async saveProposalDetails(proposalDetails: ProposalDetails) {}
  public async updateProposalAccounts(accounts: ProposalAccounts) {}
}
