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
