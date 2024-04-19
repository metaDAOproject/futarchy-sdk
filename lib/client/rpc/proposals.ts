import { BN, Program, Provider } from "@coral-xyz/anchor";
import { AutocratProgram, DaoAccount, ProgramVersion } from "../../types";
import { ProposalWithVaults } from "../../types/proposals";
import { FutarchyProposalsClient } from "../client";
import { ConditionalVault } from "../../idl/conditional_vault";
import { VaultAccount } from "../../types/conditionalVault";
import {
  createAssociatedTokenAccountIdempotentInstruction,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import numeral from "numeral";
import { enrichTokenMetadata } from "../../tokens";
import { PublicKey, Transaction } from "@solana/web3.js";
import { TransactionSender } from "../../transactions";

export class FutarchyRPCProposalsClient implements FutarchyProposalsClient {
  private rpcProvider: Provider;
  private autocratProgram: Program<AutocratProgram>;
  private vaultProgram: Program<ConditionalVault>;
  private transactionSender: TransactionSender;

  constructor(
    rpcProvider: Provider,
    autocratProgram: Program<AutocratProgram>,
    vaultProgram: Program<ConditionalVault>,
    transactionSender: TransactionSender
  ) {
    this.rpcProvider = rpcProvider;
    this.autocratProgram = autocratProgram;
    this.vaultProgram = vaultProgram;
    this.transactionSender = transactionSender;
  }
  async fetchProposals(dao: DaoAccount): Promise<ProposalWithVaults[]> {
    const allProposals = (
      await this.autocratProgram.account.proposal.all()
    ).map((prop) => ({
      title: `Proposal ${prop.account.number}`,
      description: "",
      ...prop,
    }));
    const allVaults = await this.vaultProgram.account.conditionalVault.all();
    const vaultsByAddress: Record<string, VaultAccount> = allVaults.reduce(
      (prev, curr) => {
        prev[curr.publicKey.toString()] = curr.account;
        return prev;
      },
      {} as Record<string, VaultAccount>
    );
    const proposalsWithVaults: ProposalWithVaults[] = allProposals.map((p) => {
      const baseVaultAccount = vaultsByAddress[p.account.baseVault.toString()];
      const quoteVaultAccount =
        vaultsByAddress[p.account.quoteVault.toString()];
      return { ...p, baseVaultAccount, quoteVaultAccount };
    });

    return proposalsWithVaults.filter((p) => {
      const { baseVaultAccount } = p;
      return (
        baseVaultAccount.settlementAuthority.toString() ===
        dao.treasury.toString()
      );
    });
  }

  public async deposit(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: VaultAccount
  ): Promise<string[] | undefined> {
    if (!this.rpcProvider.publicKey) {
      return;
    }
    // we fetch metadata with finalize token mint, but it doesn't matter
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
      await this.vaultProgram.methods
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

  public async withdraw(
    amount: number,
    vaultAccountAddress: PublicKey,
    vaultAccount: {
      status:
        | ({ finalized?: undefined; reverted?: undefined } & {
            active: Record<string, never>;
          })
        | ({ active?: undefined; reverted?: undefined } & {
            finalized: Record<string, never>;
          })
        | ({ active?: undefined; finalized?: undefined } & {
            reverted: Record<string, never>;
          });
      settlementAuthority: PublicKey;
      underlyingTokenMint: PublicKey;
      nonce: BN;
      underlyingTokenAccount: PublicKey;
      conditionalOnFinalizeTokenMint: PublicKey;
      conditionalOnRevertTokenMint: PublicKey;
      pdaBump: number;
    }
  ): Promise<string[] | undefined> {
    return [];
  }
}
