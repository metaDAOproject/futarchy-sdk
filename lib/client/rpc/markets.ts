import { Program, Provider } from "@coral-xyz/anchor";
import { OpenbookV2, OpenBookV2Client } from "@openbook-dex/openbook-v2";
import {
  AmmMarket,
  AmmMarketFetchRequest,
  MarketFetchRequest,
  OpenbookMarket,
  OpenbookMarketFetchRequest,
} from "@/types";
import { FutarchyMarketsClient } from "@/client";
import { TransactionSender } from "@/transactions";
import { AmmClient } from "@metadaoproject/futarchy-ts";
import { FutarchyOpenbookMarketsRPCClient } from "./market-clients/openbookMarkets";
import { FutarchyAmmMarketsRPCClient } from "./market-clients/ammMarkets";
import { Amm as AmmIDLType } from "@metadaoproject/futarchy-ts/dist/types/amm";

export class FutarchyMarketsRPCClient implements FutarchyMarketsClient {
  // we have generic interface for orderbooks. when adding phoenix, this could be rethunk
  public openbook: FutarchyOpenbookMarketsRPCClient;
  public amm: FutarchyAmmMarketsRPCClient;

  constructor(
    rpcProvider: Provider,
    openbook: Program<OpenbookV2>,
    openbookClient: OpenBookV2Client,
    amm: Program<AmmIDLType>,
    ammClient: AmmClient,
    transactionSender: TransactionSender | undefined
  ) {
    this.openbook = new FutarchyOpenbookMarketsRPCClient(
      rpcProvider,
      openbook,
      openbookClient,
      transactionSender
    );
    this.amm = new FutarchyAmmMarketsRPCClient(
      rpcProvider,
      amm,
      ammClient,
      transactionSender
    );
  }

  async fetchMarket(
    request: MarketFetchRequest
  ): Promise<OpenbookMarket | AmmMarket | undefined> {
    if (request instanceof OpenbookMarketFetchRequest) {
      console.log("is it OpenbookMarketFetchRequest?");
      return this.openbook.fetchMarket(request);
    }
    if (request instanceof AmmMarketFetchRequest) {
      console.log("is it AmmMarketFetchRequest?");
      return this.amm.fetchMarket(request);
    }
    console.log("it's nothing");
    return;
    // TODO logic to fetch any market
    // const obMarket = await OBMarket.load(
    //   this.openbookClient,
    //   request.marketKey
    // );

    // const baseToken = await enrichTokenMetadata(
    //   obMarket.account.baseMint,
    //   this.rpcProvider
    // );
    // const quoteToken = await enrichTokenMetadata(
    //   obMarket.account.quoteMint,
    //   this.rpcProvider
    // );

    // const marketName = "blah";

    // const baseTokenWithSymbol = !baseToken.isFallback
    //   ? baseToken
    //   : {
    //       ...baseToken,
    //       symbol: marketName.split("/")[0],
    //     };
    // const quoteTokenWithSymbol = !quoteToken.isFallback
    //   ? quoteToken
    //   : {
    //       ...quoteToken,
    //       symbol: marketName.split("/")[0],
    //     };

    // return {
    //   baseMint: obMarket.account.baseMint,
    //   baseToken: baseTokenWithSymbol,
    //   quoteMint: obMarket.account.quoteMint,
    //   quoteToken: quoteTokenWithSymbol,
    //   createdAt: obMarket.account.registrationTime.toNumber(),
    //   makerFee: obMarket.account.makerFee.toNumber(),
    //   marketAuthority: obMarket.account.marketAuthority,
    //   minOrderAmount: obMarket.minOrderSize,
    //   minPriceIncrement: obMarket.quoteLotFactor,
    //   publicKey: request.marketKey,
    //   takerFee: obMarket.account.takerFee.toNumber(),
    //   type: "openbook",
    //   // can avoid refetching market for the orderbook if we pass this in
    //   marketInstance: obMarket,
    //   twapProgram: request.twapProgram,
    // };
  }
}
