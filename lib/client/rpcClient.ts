import { Program, Provider, utils } from "@coral-xyz/anchor";
import { AutocratProgram, Dao, DaoState, ProgramVersion } from "../types";
import { PublicKey } from "@solana/web3.js";
import { MetaDAOClient } from "./client";
import { enrichTokenMetadata } from "../tokens";

export class MetaDAORPClient implements MetaDAOClient {
  private programVersion: ProgramVersion;
  private rpcProvider: Provider;
  private constructor(programVersion: ProgramVersion, rpcProvider: Provider) {
    this.programVersion = programVersion;
    this.rpcProvider = rpcProvider;
  }
  static make(programVersion: ProgramVersion, rpcProvider: Provider) {
    return new MetaDAORPClient(programVersion, rpcProvider);
  }
  async fetchDao(daoAddress: string): Promise<Dao | undefined> {
    const { programId, idl } = this.programVersion!;

    const dao = PublicKey.findProgramAddressSync(
      [utils.bytes.utf8.encode(daoAddress)],
      programId
    )[0];

    const daoTreasury = PublicKey.findProgramAddressSync(
      [dao.toBuffer()],
      programId
    )[0];

    const autocratProgram = new Program<AutocratProgram>(
      idl as AutocratProgram,
      programId,
      this.rpcProvider
    );

    const daoState: DaoState = await autocratProgram.account.dao.fetch(dao);

    const baseToken = await enrichTokenMetadata(daoState.metaMint);

    return {
      daoState,
      baseToken,
      daoTreasury,
    };
  }
}
