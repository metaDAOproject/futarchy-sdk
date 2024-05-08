import { Orderbook } from "./types";

/**
 * Calculates the maximum value considering the slippage percentage.
 *
 * @param {number} maxValue - The original maximum value before slippage adjustment.
 * @param {number} slippage - The slippage rate as a whole percentage (not decimal). i.e. if your slippage is 0.3%, pass in 0.3.
 *                            This value will be divided by 100 internally to calculate the slippage percentage.
 * @returns {number} The maximum value adjusted for slippage.
 */
export function calculateMaxWithSlippage(maxValue: number, slippage: number) {
  const slippagePercent = slippage / 100;
  return maxValue * (1 + slippagePercent);
}

/**
 * Calculates the minimum value considering the slippage percentage.
 *
 * @param {number} minValue - The original minimum value before slippage adjustment.
 * @param {number} slippage - The slippage rate as a whole percentage (not decimal). i.e. if your slippage is 0.3%, pass in 0.3.
 *                            This value will be divided by 100 internally to calculate the slippage percentage.
 * @returns {number} The minimum value adjusted for slippage.
 */
export function calculateMinWithSlippage(minValue: number, slippage: number) {
  const slippagePercent = slippage / 100;
  return minValue * (1 - slippagePercent);
}

/**
 * Function to calculate the mid price from the order book
 * @param orderBook
 * @returns numb | null
 */
export function getMidPrice(orderBook: Orderbook): number | null {
  // Check if there are any asks and bids
  if (orderBook.asks.length === 0 || orderBook.bids.length === 0) {
    return null; // Return null if there are no asks or bids to calculate mid-price
  }

  // Assumes asks and bids are sorted by price, asks ascending and bids descending
  const bestAsk = orderBook.asks[0].price;
  const bestBid = orderBook.bids[0].price;

  // Calculate and return the mid price
  return (bestAsk + bestBid) / 2;
}
