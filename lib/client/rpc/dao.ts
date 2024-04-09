import { Program, Provider } from "@coral-xyz/anchor";
import {
  AutocratProgram,
  DaoAccount,
  DaoWithTokens,
  ProgramVersion,
} from "../../types";
import { FutarchyDaoClient } from "../client";
import { enrichTokenMetadata } from "../../tokens";

export class FutarchyRPCDaoClient implements FutarchyDaoClient {
  private autocratProgram: Program<AutocratProgram>;
  private programVersion: ProgramVersion;
  private rpcProvider: Provider;
  constructor(
    rpcProvider: Provider,
    programVersion: ProgramVersion,
    autocratProgram: Program<AutocratProgram>
  ) {
    this.rpcProvider = rpcProvider;
    this.programVersion = programVersion;
    this.autocratProgram = autocratProgram;
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
}
