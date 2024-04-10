import { BN, Program, Provider } from "@coral-xyz/anchor";
import { OpenbookOrder, OpenbookProposalMarket } from "../../types/markets";
import { Proposal } from "../../types/proposals";
import { FutarchyMarketsClient } from "../client";
import {
  OpenbookV2,
  baseLotsToUi,
  priceLotsToUi,
} from "@openbook-dex/openbook-v2";
import { MarketAccount, OpenBookV2Client } from "@openbook-dex/openbook-v2";
import { OpenOrdersAccountWithKey, TokenProps } from "../../types";
import { getLeafNodes, getUsersOpenOrderPks } from "../../openbook";
import { PublicKey } from "@solana/web3.js";
import { QUOTE_LOTS } from "../../constants";

export class FutarchyOpenbookMarketsRPCClient implements FutarchyMarketsClient {
  private openbook: Program<OpenbookV2>;
  private openbookClient: OpenBookV2Client;
  private rpcProvider: Provider;
  constructor(
    rpcProvider: Provider,
    openbook: Program<OpenbookV2>,
    openbookClient: OpenBookV2Client
  ) {
    this.openbook = openbook;
    this.openbookClient = openbookClient;
    this.rpcProvider = rpcProvider;
  }
  async fetchConditionalMarketsFromProposal(
    proposal: Proposal,
    baseToken: TokenProps,
    quoteToken: TokenProps
  ): Promise<[OpenbookProposalMarket, OpenbookProposalMarket] | undefined> {
    const accountInfos =
      await this.rpcProvider.connection.getMultipleAccountsInfo([
        proposal.account.openbookPassMarket,
        proposal.account.openbookFailMarket,
        proposal.account.openbookTwapPassMarket,
        proposal.account.openbookTwapFailMarket,
        proposal.account.baseVault,
        proposal.account.quoteVault,
      ]);
    if (!accountInfos || accountInfos.indexOf(null) >= 0) return;

    const [passOpenBookMarket, failOpenBookMarket] =
      await Promise.all<MarketAccount>([
        // pass market is index 0
        this.openbook.coder.accounts.decode("market", accountInfos[0]!.data),
        // fail market is index 1
        this.openbook.coder.accounts.decode("market", accountInfos[1]!.data),
      ]);

    const bookAccountInfos =
      await this.rpcProvider.connection.getMultipleAccountsInfo([
        passOpenBookMarket.asks,
        passOpenBookMarket.bids,
        failOpenBookMarket.asks,
        failOpenBookMarket.bids,
      ]);
    const passAsksNodes = getLeafNodes(
      await this.openbook.coder.accounts.decode(
        "bookSide",
        bookAccountInfos[0]!.data
      ),
      this.openbook
    );
    const passBidsNodes = getLeafNodes(
      await this.openbook.coder.accounts.decode(
        "bookSide",
        bookAccountInfos[1]!.data
      ),
      this.openbook
    );
    const failAsksNodes = getLeafNodes(
      await this.openbook.coder.accounts.decode(
        "bookSide",
        bookAccountInfos[2]!.data
      ),
      this.openbook
    );
    const failBidsNodes = getLeafNodes(
      await this.openbook.coder.accounts.decode(
        "bookSide",
        bookAccountInfos[3]!.data
      ),
      this.openbook
    );
    const passMarket: OpenbookProposalMarket = {
      marketType: "pass",
      bids: passBidsNodes.map((leafNode) => {
        const size = baseLotsToUi(passOpenBookMarket, leafNode.quantity);
        const price = priceLotsToUi(passOpenBookMarket, leafNode.key.shrn(64));
        return {
          price,
          size,
          market: proposal?.account.openbookPassMarket,
          marketType: "pass",
          owner: leafNode.owner,
          ownerSlot: leafNode.ownerSlot,
          side: "bid" as const,
          timestamp: leafNode.timestamp,
          time: new Date(leafNode.timestamp),
          status: "open",
          token: {
            ...quoteToken,
            symbol: "p" + quoteToken.symbol,
          },
          clientOrderId: leafNode.clientOrderId,
        };
      }),
      asks: passAsksNodes.map((leafNode) => {
        const size = baseLotsToUi(passOpenBookMarket, leafNode.quantity);
        const price = priceLotsToUi(passOpenBookMarket, leafNode.key.shrn(64));
        return {
          price,
          size,
          market: proposal?.account.openbookPassMarket,
          marketType: "pass",
          owner: leafNode.owner,
          ownerSlot: leafNode.ownerSlot,
          side: "ask" as const,
          timestamp: leafNode.timestamp,
          time: new Date(leafNode.timestamp),
          status: "open",
          token: {
            ...baseToken,
            symbol: "p" + baseToken.symbol,
          },
          clientOrderId: leafNode.clientOrderId,
        };
      }),
    };
    const failMarket: OpenbookProposalMarket = {
      marketType: "fail",
      bids: failBidsNodes.map((leafNode) => {
        const size = baseLotsToUi(passOpenBookMarket, leafNode.quantity);
        const price = priceLotsToUi(passOpenBookMarket, leafNode.key.shrn(64));
        return {
          price,
          size,
          market: proposal?.account.openbookFailMarket,
          marketType: "fail",
          owner: leafNode.owner,
          ownerSlot: leafNode.ownerSlot,
          side: "bid" as const,
          timestamp: leafNode.timestamp,
          time: new Date(leafNode.timestamp),
          status: "open",
          token: {
            ...quoteToken,
            symbol: "f" + quoteToken.symbol,
          },
          clientOrderId: leafNode.clientOrderId,
        };
      }),
      asks: failAsksNodes.map((leafNode) => {
        const size = baseLotsToUi(passOpenBookMarket, leafNode.quantity);
        const price = priceLotsToUi(passOpenBookMarket, leafNode.key.shrn(64));
        return {
          price,
          size,
          market: proposal?.account.openbookFailMarket,
          marketType: "fail",
          owner: leafNode.owner,
          ownerSlot: leafNode.ownerSlot,
          side: "ask" as const,
          timestamp: leafNode.timestamp,
          time: new Date(leafNode.timestamp),
          status: "open",
          token: {
            ...baseToken,
            symbol: "f" + baseToken.symbol,
          },
          clientOrderId: leafNode.clientOrderId,
        };
      }),
    };

    return [passMarket, failMarket] as [
      OpenbookProposalMarket,
      OpenbookProposalMarket
    ];
  }

  async filterUserOpenOrdersFromProposalMarkets(
    passMarket: OpenbookProposalMarket,
    failMarket: OpenbookProposalMarket,
    owner: PublicKey
  ): Promise<OpenbookOrder[]> {
    const openOrdersPks = (
      await getUsersOpenOrderPks(this.openbookClient, owner)
    ).map((p) => p.toString());

    const allOrders = [
      ...passMarket.asks,
      ...passMarket.bids,
      ...failMarket.asks,
      ...failMarket.bids,
    ];

    const userOrders = allOrders
      .filter(
        (o): o is OpenbookOrder =>
          !!o.market && openOrdersPks.includes(o.owner?.toString())
      )
      .map((o) => {
        const position: OpenOrdersAccountWithKey["account"]["position"] =
          o.side === "bid"
            ? {
                asksBaseLots: new BN(0),
                bidsBaseLots: new BN(o.size),
                baseFreeNative: new BN(),
                quoteFreeNative: new BN(),
                lockedMakerFees: new BN(),
                referrerRebatesAvailable: new BN(),
                penaltyHeapCount: new BN(),
                makerVolume: new BN(),
                takerVolume: new BN(),
                reserved: [],
              }
            : {
                bidsBaseLots: new BN(0),
                asksBaseLots: new BN(o.size),
                baseFreeNative: new BN(),
                quoteFreeNative: new BN(),
                lockedMakerFees: new BN(),
                referrerRebatesAvailable: new BN(),
                penaltyHeapCount: new BN(),
                makerVolume: new BN(),
                takerVolume: new BN(),
                reserved: [],
              };
        const order: OpenOrdersAccountWithKey = {
          publicKey: o.owner,
          account: {
            owner: o.owner,
            accountNum: o.clientOrderId.toNumber(),
            market: o.market,
            position,
            bump: 0,
            delegate: {
              key: o.owner,
            },
            name: [],
            openOrders: [
              {
                clientId: o.clientOrderId,
                id: new BN(),
                isFree: 0,
                lockedPrice: new BN(o.price / QUOTE_LOTS),
                padding: new BN(),
                sideAndTree: 0,
              },
            ],
            padding: [],
          },
        };

        return order;
      })
      .sort((a, b) => (a.account.accountNum < b.account.accountNum ? 1 : -1));

    return [];
  }
}
