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
