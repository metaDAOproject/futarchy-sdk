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
import { FutarchyOpenbookMarketsRPCClient } from "./openbookMarkets";
import { TransactionSender } from "@/transactions";
import { getFutarchyProtocols } from "@/utils";

export class FutarchyRPCClient implements FutarchyClient {
  public daos: FutarchyRPCDaoClient;
  public proposals: FutarchyRPCProposalsClient;
  public balances: FutarchyRPCBalancesClient;
  public markets: FutarchyOpenbookMarketsRPCClient;

  private constructor(
    // has to be AnchorProvider because of Openbook SDK
    rpcProvider: AnchorProvider,
    transactionSender: TransactionSender | undefined
  ) {
    const futarchyProtocols = getFutarchyProtocols(rpcProvider);

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
    transactionSender: TransactionSender | undefined
  ) {
    return new FutarchyRPCClient(rpcProvider, transactionSender);
  }
}
