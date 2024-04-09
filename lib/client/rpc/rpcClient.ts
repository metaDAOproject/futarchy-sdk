import { Program, Provider } from "@coral-xyz/anchor";
import { AutocratProgram, ProgramVersion } from "../../types";
import { FutarchyClient } from "../client";
import {
  ConditionalVault,
  IDL as ConditionalVaultIDL,
} from "../../idl/conditional_vault";
import { autocratVersionToConditionalVaultMap } from "../../constants/conditionalVault";
import { FutarchyRPCDaoClient } from "./dao";
import { FutarchyRPCProposalsClient } from "./proposals";
import { FutarchyRPCBalancesClient } from "./balances";

export class FutarchyRPCClient implements FutarchyClient {
  public daos: FutarchyRPCDaoClient;
  public proposals: FutarchyRPCProposalsClient;
  public balances: FutarchyRPCBalancesClient;
  private constructor(programVersion: ProgramVersion, rpcProvider: Provider) {
    const autocratProgram = new Program<AutocratProgram>(
      programVersion.idl as AutocratProgram,
      programVersion.programId,
      rpcProvider
    );

    const vaultProgram = new Program<ConditionalVault>(
      ConditionalVaultIDL,
      autocratVersionToConditionalVaultMap[programVersion.label],
      rpcProvider
    );
    this.daos = new FutarchyRPCDaoClient(
      rpcProvider,
      programVersion,
      autocratProgram
    );
    this.proposals = new FutarchyRPCProposalsClient(
      autocratProgram,
      vaultProgram
    );
    this.balances = new FutarchyRPCBalancesClient(rpcProvider);
  }
  static make(programVersion: ProgramVersion, rpcProvider: Provider) {
    return new FutarchyRPCClient(programVersion, rpcProvider);
  }
}
