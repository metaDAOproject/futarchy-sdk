import { Program, Provider, utils } from "@coral-xyz/anchor";
import { AutocratProgram, Dao, DaoState, ProgramVersion } from "../types";
import { Metaplex } from "@metaplex-foundation/js";
import {
  TokenStandard,
  MPL_TOKEN_METADATA_PROGRAM_ID,
  deserializeMetadata,
  JsonMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { RpcAccount } from "@metaplex-foundation/umi";
import { PublicKey } from "@solana/web3.js";
import { MetaDAOClient } from "./client";

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

    const mplTokenProgramID = new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID);
    const tokenMetaDataAddress = PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata", "utf8"),
        mplTokenProgramID.toBuffer(),
        daoState.metaMint.toBuffer(),
      ],
      mplTokenProgramID
    )[0];
    const tokenMetaDataAccount =
      await this.rpcProvider.connection.getAccountInfo(tokenMetaDataAddress);

    if (tokenMetaDataAccount) {
      const decodedMetadata = deserializeMetadata(
        tokenMetaDataAccount as unknown as RpcAccount
      );
      const uriRes = await fetch(decodedMetadata.uri);
      const json = (await uriRes.json()) as JsonMetadata;

      if (daoState && json.symbol && json.image) {
        return {
          daoState,
          baseToken: {
            symbol: json.symbol,
            publicKey: daoState.metaMint.toString(),
            url: json.image,
          },
          daoTreasury,
        };
      }
    }
  }
}
