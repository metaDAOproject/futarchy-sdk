import { AnchorProvider, Program } from "@coral-xyz/anchor";
import {
  IDL as OPENBOOK_IDL,
  OPENBOOK_PROGRAM_ID,
  OpenBookV2Client,
  OpenbookV2,
} from "@openbook-dex/openbook-v2";
import { AutocratProgram, FutarchyProtocol } from "@/types";
import { FutarchyClient } from "@/client";
import {
  ConditionalVault,
  IDL as ConditionalVaultIDL,
} from "@/idl/conditional_vault";
import { autocratVersionToConditionalVaultMap } from "@/constants/conditionalVault";
import { FutarchyRPCDaoClient } from "@/client/rpc/dao";
import { FutarchyRPCProposalsClient } from "./proposals";
import { FutarchyRPCBalancesClient } from "./balances";
import { FutarchyOpenbookMarketsRPCClient } from "./openbookMarkets";
import { TransactionSender } from "@/transactions";
import {
  AUTOCRAT_VERSIONS,
  OPENBOOK_TWAP_PROGRAM_IDV0_1,
  OPENBOOK_TWAP_PROGRAM_IDV0_2,
} from "@/constants";
import { OpenbookTwapV0_2 } from "@/idl/openbook_twap_v0.2";
import { OpenbookTwapV0_1 } from "@/idl/openbook_twap_v0.1";
import OPENBOOK_TWAP_IDLV0_1_JSON from "@/idl/openbook_twap_v0.1.json";
import OPENBOOK_TWAP_IDLV0_2_JSON from "@/idl/openbook_twap_v0.2.json";

export class FutarchyRPCClient implements FutarchyClient {
  public daos: FutarchyRPCDaoClient;
  public proposals: FutarchyRPCProposalsClient;
  public balances: FutarchyRPCBalancesClient;
  public markets: FutarchyOpenbookMarketsRPCClient;

  // TODO how to use the protocol for a specific DAO based on the market or proposal...
  // V2 Future DAO is where stuff thing

  private constructor(
    // no more program versions anymore
    // just return data across autocrat versions, but we need to have results aggregated
    // has to be AnchorProvider because of Openbook SDK
    rpcProvider: AnchorProvider,
    transactionSender: TransactionSender | undefined
  ) {
    const futarchyProtocols = AUTOCRAT_VERSIONS.reduce((prev, curr) => {
      const autocrat = new Program<AutocratProgram>(
        curr.idl as AutocratProgram,
        curr.programId,
        rpcProvider
      );
      const vaultProgram = new Program<ConditionalVault>(
        ConditionalVaultIDL,
        autocratVersionToConditionalVaultMap[curr.label],
        rpcProvider
      );
      let openbookTwap:
        | undefined
        | Program<OpenbookTwapV0_2>
        | Program<OpenbookTwapV0_1>;
      if (["V0.2", "V0.3"].includes(curr.label)) {
        openbookTwap = new Program<OpenbookTwapV0_2>(
          OPENBOOK_TWAP_IDLV0_2_JSON as OpenbookTwapV0_2,
          OPENBOOK_TWAP_PROGRAM_IDV0_2,
          rpcProvider
        );
      } else {
        openbookTwap = new Program<OpenbookTwapV0_1>(
          OPENBOOK_TWAP_IDLV0_1_JSON as OpenbookTwapV0_1,
          OPENBOOK_TWAP_PROGRAM_IDV0_1,
          rpcProvider
        );
      }
      const protocol: FutarchyProtocol = {
        key: autocrat.programId.toString(),
        autocrat: autocrat,
        deploymentVersion: curr.label,
        vault: vaultProgram,
        pricingModel: openbookTwap,
      };
      prev.push(protocol);
      return prev;
    }, [] as FutarchyProtocol[]);

    this.daos = new FutarchyRPCDaoClient(rpcProvider, futarchyProtocols);
    this.proposals = new FutarchyRPCProposalsClient(
      rpcProvider,
      futarchyProtocols,
      transactionSender
    );
    this.balances = new FutarchyRPCBalancesClient(
      rpcProvider,
      futarchyProtocols
    );

    this.markets = new FutarchyOpenbookMarketsRPCClient(
      rpcProvider,
      new Program<OpenbookV2>(OPENBOOK_IDL, OPENBOOK_PROGRAM_ID, rpcProvider),
      new OpenBookV2Client(rpcProvider, OPENBOOK_PROGRAM_ID),
      transactionSender
    );
  }
  static make(
    rpcProvider: AnchorProvider,
    transactionSender: TransactionSender
  ) {
    return new FutarchyRPCClient(rpcProvider, transactionSender);
  }
}
