import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { BN, Program, Provider } from "@coral-xyz/anchor";
import {
  createAssociatedTokenAccountIdempotentInstruction,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import numeral from "numeral";
import {
  AutocratProgram,
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

export class FutarchyRPCProposalsClient implements FutarchyProposalsClient {
  private rpcProvider: Provider;
  private futarchyProtocols: FutarchyProtocol[];
  private transactionSender: TransactionSender | undefined;

  constructor(
    rpcProvider: Provider,
    futarchyProtocols: FutarchyProtocol[],
    transactionSender: TransactionSender | undefined
  ) {
    this.rpcProvider = rpcProvider;
    this.futarchyProtocols = futarchyProtocols;
    this.transactionSender = transactionSender;
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
          const allVaults =
            await dao.protocol.vault.account.conditionalVault.all();
          const vaultsByAddress: Record<string, VaultAccount> =
            allVaults.reduce((prev, curr) => {
              prev[curr.publicKey.toString()] = curr.account;
              return prev;
            }, {} as Record<string, VaultAccount>);
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
}
