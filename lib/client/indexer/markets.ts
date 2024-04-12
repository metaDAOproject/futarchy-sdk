import {
  ConditionalMarkets,
  Market,
  OpenbookOrder,
  OpenbookProposalMarket,
  Order,
} from "../../types/markets";
import { Proposal, ProposalWithVaults } from "../../types/proposals";
import { FutarchyMarketsClient } from "../client";
import { TokenProps } from "../../types";
import { PublicKey } from "@solana/web3.js";

export class FutarchyIndexerMarketsClient implements FutarchyMarketsClient {
  async fetchConditionalMarketsFromProposal(
    proposal: Proposal,
    baseToken: TokenProps,
    quoteToken: TokenProps
  ): Promise<ConditionalMarkets<Market> | undefined> {
    return;
  }

  async filterUserOpenOrdersFromProposalMarkets(
    passMarket: OpenbookProposalMarket,
    failMarket: OpenbookProposalMarket,
    owner: PublicKey
  ): Promise<OpenbookOrder[]> {
    return [];
  }

  async cancelUserOrder(
    market: OpenbookProposalMarket,
    order: Order,
    proposal: ProposalWithVaults,
    baseMint: PublicKey,
    quoteMint: PublicKey
  ): Promise<string[]> {
    return [];
  }
}
