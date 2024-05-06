import { AnchorProvider, Program } from "@coral-xyz/anchor";
import {
  IDL as OPENBOOK_IDL,
  OPENBOOK_PROGRAM_ID,
  OpenBookV2Client,
  OpenbookV2,
} from "@openbook-dex/openbook-v2";
import { FutarchyClient } from "@/client";
import { FutarchyRPCDaoClient } from "@/client/rpc/dao";
import { FutarchyRPCProposalsClient } from "./proposals";
import { FutarchyRPCBalancesClient } from "./balances";
import { TransactionSender } from "@/transactions";
import { getFutarchyProtocols } from "@/utils";
import { FutarchyProtocol } from "@/types";
import { AMM_PROGRAM_ID, AmmClient } from "@metadaoproject/futarchy-ts";
import { Amm as AmmIDLType, IDL as AMM_IDL } from "@/idl/amm";
import { FutarchyMarketsRPCClient } from "./markets";

export class FutarchyRPCClient implements FutarchyClient {
  public daos: FutarchyRPCDaoClient;
  public proposals: FutarchyRPCProposalsClient;
  public balances: FutarchyRPCBalancesClient;
  public markets: FutarchyMarketsRPCClient;
  public futarchyProtocols: FutarchyProtocol[];

  private constructor(
    // has to be AnchorProvider because of Openbook SDK
    rpcProvider: AnchorProvider,
    transactionSender: TransactionSender | undefined
  ) {
    const futarchyProtocols = getFutarchyProtocols(rpcProvider);
    this.futarchyProtocols = futarchyProtocols;

    this.daos = new FutarchyRPCDaoClient(rpcProvider, futarchyProtocols);
    this.proposals = new FutarchyRPCProposalsClient(
      rpcProvider,
      futarchyProtocols,
      transactionSender
    );
    this.balances = new FutarchyRPCBalancesClient(rpcProvider);

    this.markets = new FutarchyMarketsRPCClient(
      rpcProvider,
      new Program<OpenbookV2>(OPENBOOK_IDL, OPENBOOK_PROGRAM_ID, rpcProvider),
      new OpenBookV2Client(rpcProvider, OPENBOOK_PROGRAM_ID),
      new Program<AmmIDLType>(AMM_IDL, AMM_PROGRAM_ID, rpcProvider),
      new AmmClient(rpcProvider, AMM_PROGRAM_ID, []),
      transactionSender
    );
  }
  static make(
    rpcProvider: AnchorProvider,
    transactionSender: TransactionSender | undefined
  ) {
    return new FutarchyRPCClient(rpcProvider, transactionSender);
  }
}
