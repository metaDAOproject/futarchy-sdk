export type TwapObservation = {
  priceRaw?: number | null;
  priceUi: number | null;
  createdAt: Date;
};

/**
 * Quote and Base amounts generally available on market spot prices
 */
export type SpotObservation = {
  priceRaw?: number | null;
  priceUi: number | null;
  createdAt: Date;
  quoteAmount?: number;
  baseAmount?: number;
};

export type ProposalMarketPrices = {
  price: number | null;
  acct: string;
  quoteAmount: number | null;
  baseAmount: number | null;
};

/**
 * A type used to subscribe to all the relevant spot prices and charting data for a proposal
 */
export type ProposalMarketPricesAggregate = {
  createdAt: Date;
  failMarket: ProposalMarketPrices;
  passMarket: ProposalMarketPrices;
};
