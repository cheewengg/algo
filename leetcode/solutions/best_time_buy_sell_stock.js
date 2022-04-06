// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// https://leetcode.com/submissions/detail/675194839/
// Runtime: 68 ms, faster than 99.43% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 51.9 MB, less than 33.16% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// O(n) time, O(1) space where n === prices.length

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let buyPx = 10001;
  let profit = -10001;

  for (let i = 0; i < prices.length; i++) {
    const currentPx = prices[i];
    if (currentPx < buyPx) buyPx = currentPx;

    const sellPx = currentPx;
    const potentialProfit = sellPx - buyPx;
    if (potentialProfit > profit) profit = potentialProfit;
  }

  return profit;
};

module.exports = maxProfit;
