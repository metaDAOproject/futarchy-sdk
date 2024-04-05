import { Program, Provider, utils } from "@coral-xyz/anchor";
import { AutocratProgram, Dao, DaoState, ProgramVersion } from "../types";
import { PublicKey } from "@solana/web3.js";
import { FutarchyClient } from "./client";
import { enrichTokenMetadata } from "../tokens";

export class FutarchyRPClient implements FutarchyClient {
  private programVersion: ProgramVersion;
  private autocratProgram: Program<AutocratProgram>;
  private rpcProvider: Provider;
  private constructor(programVersion: ProgramVersion, rpcProvider: Provider) {
    this.programVersion = programVersion;
    this.rpcProvider = rpcProvider;
    this.autocratProgram = new Program<AutocratProgram>(
      programVersion.idl as AutocratProgram,
      programVersion.programId,
      this.rpcProvider
    );
  }
  static make(programVersion: ProgramVersion, rpcProvider: Provider) {
    return new FutarchyRPClient(programVersion, rpcProvider);
  }
  async fetchDao(daoAddress: string): Promise<Dao | undefined> {
    const daoAndTreasury = await this.fetchDaoState(daoAddress);
    if (daoAndTreasury) {
      const daoState = daoAndTreasury;
      const baseMint = ["V0.2", "V0.3"].includes(this.programVersion.label)
        ? daoState.tokenMint
        : daoState.metaMint;
      const quoteMint = daoState.usdcMint;
      if (baseMint) {
        const baseToken = await enrichTokenMetadata(baseMint, this.rpcProvider);
        const quoteToken = await enrichTokenMetadata(
          quoteMint,
          this.rpcProvider
        );
        return {
          daoState,
          baseToken,
          quoteToken,
        };
      }
    }
  }

  private async fetchDaoState(
    daoAddress: string
  ): Promise<DaoState | undefined> {
    const allDaos = await this.autocratProgram.account.dao.all();
    const daoAccount: DaoState = allDaos.find(
      (d) => d.publicKey.toString() === daoAddress
    )!.account;

    return daoAccount;
  }
}
