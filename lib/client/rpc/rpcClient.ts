import { AnchorProvider, Program, Provider } from "@coral-xyz/anchor";
import { AutocratProgram, ProgramVersion } from "../../types";
import { FutarchyClient, FutarchyMarketsClient } from "../client";
import {
  ConditionalVault,
  IDL as ConditionalVaultIDL,
} from "../../idl/conditional_vault";
import { autocratVersionToConditionalVaultMap } from "../../constants/conditionalVault";
import { FutarchyRPCDaoClient } from "./dao";
import { FutarchyRPCProposalsClient } from "./proposals";
import { FutarchyRPCBalancesClient } from "./balances";
import { FutarchyOpenbookMarketsRPCClient } from "./openbookMarkets";
import {
  IDL as OPENBOOK_IDL,
  OPENBOOK_PROGRAM_ID,
  OpenBookV2Client,
  OpenbookV2,
} from "@openbook-dex/openbook-v2";
import { TransactionSender } from "../../transactions";

export class FutarchyRPCClient implements FutarchyClient {
  public daos: FutarchyRPCDaoClient;
  public proposals: FutarchyRPCProposalsClient;
  public balances: FutarchyRPCBalancesClient;
  public markets: FutarchyOpenbookMarketsRPCClient;

  private constructor(
    programVersion: ProgramVersion,
    // has to be AnchorProvider because of Openbook SDK
    rpcProvider: AnchorProvider,
    transactionSender: TransactionSender
  ) {
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

    this.markets = new FutarchyOpenbookMarketsRPCClient(
      rpcProvider,
      programVersion,
      new Program<OpenbookV2>(OPENBOOK_IDL, OPENBOOK_PROGRAM_ID, rpcProvider),
      new OpenBookV2Client(rpcProvider, OPENBOOK_PROGRAM_ID),
      transactionSender
    );
  }
  static make(
    programVersion: ProgramVersion,
    rpcProvider: AnchorProvider,
    transactionSender: TransactionSender
  ) {
    return new FutarchyRPCClient(
      programVersion,
      rpcProvider,
      transactionSender
    );
  }
}
