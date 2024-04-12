import { BN, Program, Provider } from "@coral-xyz/anchor";
import {
  ConditionalMarkets,
  OpenbookOrder,
  OpenbookProposalMarket,
} from "../../types/markets";
import { Proposal, ProposalWithVaults } from "../../types/proposals";
import { FutarchyMarketsClient } from "../client";
import {
  OpenbookV2,
  baseLotsToUi,
  priceLotsToUi,
} from "@openbook-dex/openbook-v2";
import { MarketAccount, OpenBookV2Client } from "@openbook-dex/openbook-v2";
import { MarketAccountWithKey, ProgramVersion, TokenProps } from "../../types";
import {
  findOpenOrders,
  getLeafNodes,
  getUsersOpenOrderPks,
} from "../../openbook";
import { PublicKey } from "@solana/web3.js";
import { OpenbookTwapV0_2 } from "../../idl/openbook_twap_v0.2";
import OPENBOOK_TWAP_IDLV0_1 from "../../idl/openbook_twap_v0.1.json";
import OPENBOOK_TWAP_IDLV0_2 from "../../idl/openbook_twap_v0.2.json";
import {
  OPENBOOK_TWAP_PROGRAM_IDV0_1,
  OPENBOOK_TWAP_PROGRAM_IDV0_2,
  SYSTEM_PROGRAM,
} from "../../constants";
import { OpenbookTwapV0_1 } from "../../idl/openbook_twap_v0.1";
import { TransactionSender } from "../../transactions";
import {
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountIdempotentInstruction,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import { VaultAccount } from "../../types/conditionalVault";

export class FutarchyOpenbookMarketsRPCClient
  implements FutarchyMarketsClient<OpenbookProposalMarket, OpenbookOrder>
{
  private openbook: Program<OpenbookV2>;
  private openbookClient: OpenBookV2Client;
  private openbookTwap: Program<OpenbookTwapV0_2> | Program<OpenbookTwapV0_1>;
  private rpcProvider: Provider;
  private transactionSender: TransactionSender;

  constructor(
    rpcProvider: Provider,
    programVersion: ProgramVersion,
    openbook: Program<OpenbookV2>,
    openbookClient: OpenBookV2Client,
    transactionSender: TransactionSender
  ) {
    this.openbook = openbook;
    this.openbookClient = openbookClient;
    this.rpcProvider = rpcProvider;
    if (["V0.2", "V0.3"].includes(programVersion?.label!)) {
      this.openbookTwap = new Program<OpenbookTwapV0_2>(
        OPENBOOK_TWAP_IDLV0_2 as OpenbookTwapV0_2,
        OPENBOOK_TWAP_PROGRAM_IDV0_2,
        rpcProvider
      );
    } else {
      this.openbookTwap = new Program<OpenbookTwapV0_1>(
        OPENBOOK_TWAP_IDLV0_1 as OpenbookTwapV0_1,
        OPENBOOK_TWAP_PROGRAM_IDV0_1,
        rpcProvider
      );
    }
    this.transactionSender = transactionSender;
  }
  async fetchConditionalMarketsFromProposal(
    proposal: Proposal,
    baseToken: TokenProps,
    quoteToken: TokenProps
  ): Promise<ConditionalMarkets<OpenbookProposalMarket> | undefined> {
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
      marketAuthority: passOpenBookMarket.marketAuthority,
      baseVault: passOpenBookMarket.marketBaseVault,
      quoteVault: passOpenBookMarket.marketQuoteVault,
      bidsPublicKey: passOpenBookMarket.bids,
      asksPublicKey: passOpenBookMarket.asks,
      publicKey: proposal.account.openbookPassMarket,
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
      marketAuthority: failOpenBookMarket.marketAuthority,
      baseVault: failOpenBookMarket.marketBaseVault,
      quoteVault: failOpenBookMarket.marketQuoteVault,
      bidsPublicKey: failOpenBookMarket.bids,
      asksPublicKey: failOpenBookMarket.asks,
      publicKey: proposal.account.openbookPassMarket,
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

    return { pass: passMarket, fail: failMarket };
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
      .sort((a, b) => (a.clientOrderId < b.clientOrderId ? 1 : -1));

    return userOrders ?? [];
  }

  async cancelUserOrder(
    market: OpenbookProposalMarket,
    order: OpenbookOrder,
    proposal: ProposalWithVaults,
    baseMint: PublicKey,
    quoteMint: PublicKey
  ): Promise<string[]> {
    const txs = await this.cancelAndSettleFundsTransactions(
      this.transactionSender.owner,
      order.clientOrderId,
      proposal.quoteVaultAccount.conditionalOnFinalizeTokenMint,
      proposal.baseVaultAccount.conditionalOnFinalizeTokenMint,
      proposal.quoteVaultAccount.conditionalOnRevertTokenMint,
      proposal.baseVaultAccount.conditionalOnRevertTokenMint,
      market,
      baseMint,
      quoteMint
    );
    return this.transactionSender.send(txs, this.rpcProvider.connection);
  }

  private async cancelAndSettleFundsTransactions(
    owner: PublicKey,
    orderId: BN | number,
    quoteConditionalOnFinalizeTokenMint: PublicKey,
    baseConditionalOnFinalizeTokenMint: PublicKey,
    quoteConditionalOnRevertTokenMint: PublicKey,
    baseConditionalOnRevertTokenMint: PublicKey,
    market: OpenbookProposalMarket,
    baseMint: PublicKey,
    quoteMint: PublicKey
  ) {
    const openOrdersAccount = findOpenOrders(new BN(orderId), owner);
    const userBaseAccount = getAssociatedTokenAddressSync(
      market.marketType === "pass"
        ? baseConditionalOnFinalizeTokenMint
        : baseConditionalOnRevertTokenMint,
      owner,
      true
    );
    const userQuoteAccount = getAssociatedTokenAddressSync(
      market.marketType === "pass"
        ? quoteConditionalOnFinalizeTokenMint
        : quoteConditionalOnRevertTokenMint,
      owner,
      true
    );
    // TODO: 2x Txns for each side..
    const placeTx = await this.openbook.methods
      .settleFunds()
      .accounts({
        owner: owner,
        penaltyPayer: owner,
        openOrdersAccount,
        market: market.publicKey,
        marketAuthority: market.marketAuthority,
        marketBaseVault: market.baseVault,
        marketQuoteVault: market.quoteVault,
        userBaseAccount,
        userQuoteAccount,
        referrerAccount: null,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: SYSTEM_PROGRAM,
      })
      .preInstructions([
        await this.openbookTwap.methods
          .cancelOrderByClientId(new BN(orderId))
          .accounts({
            openOrdersAccount,
            asks: market.asksPublicKey,
            bids: market.bidsPublicKey,
            market: market.publicKey,
            twapMarket: PublicKey.findProgramAddressSync(
              [Buffer.from("twap_market"), market.publicKey.toBuffer()],
              this.openbookTwap.programId
            )[0],
            openbookProgram: this.openbook.programId,
          })
          .instruction(),
        createAssociatedTokenAccountIdempotentInstruction(
          owner,
          userBaseAccount,
          owner,
          baseMint
        ),
        createAssociatedTokenAccountIdempotentInstruction(
          owner,
          userQuoteAccount,
          owner,
          quoteMint
        ),
      ])
      .transaction();
    return [placeTx];
  }
}
