import { Program, Provider, utils } from "@coral-xyz/anchor";
import { AutocratProgram, Dao, ProgramVersion } from "../types";
import { Metaplex } from "@metaplex-foundation/js";
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";
import { PublicKey } from "@solana/web3.js";
import { MetaDAOClient } from "./client";

export class MetaDAORPClient implements MetaDAOClient {
  private programVersion: ProgramVersion;
  private rpcProvider: Provider;
  private metaplex: Metaplex;
  private constructor(programVersion: ProgramVersion, rpcProvider: Provider) {
    this.programVersion = programVersion;
    this.rpcProvider = rpcProvider;
    this.metaplex = Metaplex.make(this.rpcProvider.connection);
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
    const daoState = await autocratProgram.account.dao.fetch(dao);
    const baseToken = await this.metaplex
      .nfts()
      .findByMint({ mintAddress: daoState.tokenMint });

    if (
      daoState &&
      baseToken.tokenStandard === TokenStandard.Fungible &&
      baseToken.json?.symbol
    ) {
      return {
        daoState,
        baseToken: {
          symbol: baseToken.json.symbol,
          publicKey: daoState.tokenMint.toString(),
          url: baseToken.json.image,
        },
        daoTreasury,
      };
    }
  }
}
