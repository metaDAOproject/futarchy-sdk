import { Program, Provider } from "@coral-xyz/anchor";
import {
  AutocratProgram,
  DaoWithTokens,
  DaoAccount,
  ProgramVersion,
  TokenWithBalance,
} from "../types";
import { FutarchyClient } from "./client";
import { enrichTokenMetadata } from "../tokens";
import { PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { VaultAccount } from "../types/conditionalVault";
import {
  ConditionalVault,
  IDL as ConditionalVaultIDL,
} from "../idl/conditional_vault";
import { conditionalVaultProgramIDs } from "../constants/conditionalVault";
import { ProposalWithVaults } from "../types/proposals";

export class FutarchyRPClient implements FutarchyClient {
  private programVersion: ProgramVersion;
  private autocratProgram: Program<AutocratProgram>;
  private vaultProgram: Program<ConditionalVault>;
  private rpcProvider: Provider;
  private constructor(
    programVersion: ProgramVersion,
    rpcProvider: Provider,
    conditionalVaultProgramID?: PublicKey
  ) {
    this.programVersion = programVersion;
    this.rpcProvider = rpcProvider;
    this.autocratProgram = new Program<AutocratProgram>(
      programVersion.idl as AutocratProgram,
      programVersion.programId,
      this.rpcProvider
    );
    this.vaultProgram = new Program<ConditionalVault>(
      ConditionalVaultIDL,
      conditionalVaultProgramID ?? conditionalVaultProgramIDs["V0.3"],
      this.rpcProvider
    );
  }
  static make(programVersion: ProgramVersion, rpcProvider: Provider) {
    return new FutarchyRPClient(programVersion, rpcProvider);
  }

  async fetchAllDaos(): Promise<DaoWithTokens[]> {
    const allDaoAccounts = await this.autocratProgram.account.dao.all();
    const allDaos: (DaoWithTokens | undefined)[] = await Promise.all(
      allDaoAccounts.map(async (d) =>
        this.fetchDaoWithTokensFromState(d.account)
      )
    );
    return allDaos.filter((d): d is DaoWithTokens => !!d);
  }
  async fetchDao(daoAddress: string): Promise<DaoWithTokens | undefined> {
    const daoAccount = await this.fetchDaoAccount(daoAddress);
    if (daoAccount) {
      return await this.fetchDaoWithTokensFromState(daoAccount);
    }
  }

  private async fetchDaoAccount(
    daoAddress: string
  ): Promise<DaoAccount | undefined> {
    const daoAccount = await this.autocratProgram.account.dao.fetch(daoAddress);
    return daoAccount;
  }

  private async fetchDaoWithTokensFromState(
    daoAccount: DaoAccount
  ): Promise<DaoWithTokens | undefined> {
    const baseMint = ["V0.2", "V0.3"].includes(this.programVersion.label)
      ? daoAccount.tokenMint
      : daoAccount.metaMint;
    const quoteMint = daoAccount.usdcMint;
    if (baseMint) {
      const baseToken = await enrichTokenMetadata(baseMint, this.rpcProvider);
      const quoteToken = await enrichTokenMetadata(quoteMint, this.rpcProvider);
      return {
        daoAccount,
        baseToken,
        quoteToken,
      };
    }
  }

  async fetchMainTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey
  ): Promise<TokenWithBalance[]> {
    if (ownerWallet && dao.baseToken.publicKey && dao.quoteToken.publicKey) {
      const tokensWithPDA = [
        {
          pda: getAssociatedTokenAddressSync(
            new PublicKey(dao.baseToken.publicKey),
            ownerWallet,
            true
          ),
          token: dao.baseToken,
        },
        {
          pda: getAssociatedTokenAddressSync(
            new PublicKey(dao.quoteToken.publicKey),
            ownerWallet,
            true
          ),
          token: dao.quoteToken,
        },
      ];
      return (
        await Promise.all(
          tokensWithPDA.map<Promise<TokenWithBalance | undefined>>(
            async (t) => {
              try {
                const tokenBalance =
                  await this.rpcProvider.connection.getTokenAccountBalance(
                    t.pda
                  );
                return {
                  balance: tokenBalance.value.uiAmount ?? 0,
                  token: t.token,
                };
              } catch (e) {
                if (!JSON.stringify(e).includes("not found")) {
                  console.info(
                    "error fetching wallet balance for token:",
                    t.token.symbol
                  );
                }
                return {
                  balance: 0,
                  token: t.token,
                };
              }
            }
          )
        )
      ).filter((b): b is TokenWithBalance => !!b);
    }
    return [];
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
    const vaultsByAuthority: Record<string, VaultAccount> = allVaults.reduce(
      (prev, curr) => {
        prev[curr.account.settlementAuthority.toString()] = curr.account;
        return prev;
      },
      {} as Record<string, VaultAccount>
    );
    const proposalsWithVaults: ProposalWithVaults[] = allProposals.map((p) => {
      const baseVaultAccount =
        vaultsByAuthority[p.account.baseVault.toString()];
      const quoteVaultAccount =
        vaultsByAuthority[p.account.quoteVault.toString()];
      return { ...p, baseVaultAccount, quoteVaultAccount };
    });

    const daoProposals = proposalsWithVaults.filter((p) => {
      const { baseVaultAccount } = p;
      return (
        baseVaultAccount.settlementAuthority.toString() ===
        dao.treasury.toString()
      );
    });

    return daoProposals.map((pv) => pv[0]);
  }

  /**
   * Fetching all the conditional token wallet balances for all the providers is expensive because it fetches the token balances on each proposal.
   * @param dao
   * @param ownerWallet
   * @param proposalsWithVaults
   * @returns
   */
  async fetchAllConditionalTokenWalletBalances(
    dao: DaoWithTokens,
    ownerWallet: PublicKey,
    proposalsWithVaults: ProposalWithVaults[]
  ): Promise<TokenWithBalance[]> {
    if (ownerWallet && dao.baseToken.publicKey && dao.quoteToken.publicKey) {
      const tokensWithPDA = proposalsWithVaults.map((p) => {
        return [
          {
            pda: getAssociatedTokenAddressSync(
              new PublicKey(p.baseVaultAccount.conditionalOnFinalizeTokenMint), // needs to be vault.conditionalOnFinalizeTokenMint
              ownerWallet,
              true
            ),
            token: dao.baseToken,
          },
          {
            pda: getAssociatedTokenAddressSync(
              new PublicKey(p.baseVaultAccount.conditionalOnRevertTokenMint), // needs to be vault.conditionalOnFinalizeTokenMint
              ownerWallet,
              true
            ),
            token: dao.baseToken,
          },
          {
            pda: getAssociatedTokenAddressSync(
              new PublicKey(p.quoteVaultAccount.conditionalOnFinalizeTokenMint), // needs to be vault.conditionalOnFinalizeTokenMint
              ownerWallet,
              true
            ),
            token: dao.quoteToken,
          },
          {
            pda: getAssociatedTokenAddressSync(
              new PublicKey(p.quoteVaultAccount.conditionalOnRevertTokenMint), // needs to be vault.conditionalOnFinalizeTokenMint
              ownerWallet,
              true
            ),
            token: dao.quoteToken,
          },
        ];
      });
      const tokensBalances = await Promise.all(
        tokensWithPDA.map(async (tokenWithPDA) => {
          return await Promise.all(
            tokenWithPDA.map<Promise<TokenWithBalance | undefined>>(
              async (t) => {
                try {
                  const tokenBalance =
                    await this.rpcProvider.connection.getTokenAccountBalance(
                      t.pda
                    );
                  return {
                    balance: tokenBalance.value.uiAmount ?? 0,
                    token: t.token,
                  };
                } catch (e) {
                  if (!JSON.stringify(e).includes("not found")) {
                    console.info(
                      "error fetching wallet balance for token:",
                      t.token.symbol
                    );
                  }
                  return {
                    balance: 0,
                    token: t.token,
                  };
                }
              }
            )
          );
        })
      );
      return tokensBalances.flat().filter((b): b is TokenWithBalance => !!b);
    }
    return [];
  }
}
