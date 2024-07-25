import { TokenProps } from "./tokens";

export type TwapObservation = {
  priceRaw?: number;
  priceUi: number;
  slot?: number;
  createdAt: Date;
};

/**
 * Quote and Base amounts generally available on market spot prices
 */
export type SpotObservation = {
  priceRaw?: number;
  priceUi: number;
  createdAt: Date;
  quoteAmount?: number;
  baseAmount?: number;
};

export type ProposalMarketPrices = {
  price: number;
  acct: string;
  quoteAmount: number;
  baseAmount: number;
};

/**
 * A type used to subscribe to all the relevant spot prices and charting data for a proposal
 */
export type ProposalMarketPricesAggregate = {
  createdAt: Date;
  failMarket: ProposalMarketPrices;
  passMarket: ProposalMarketPrices;
};
