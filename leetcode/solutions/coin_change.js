// https://leetcode.com/problems/coin-change/
// https://leetcode.com/submissions/detail/677198402/
// Runtime: 362 ms, faster than 16.09% of JavaScript online submissions for Coin Change.
// Memory Usage: 49.1 MB, less than 32.91% of JavaScript online submissions for Coin Change.
// O(???) time, O(???) space where ???

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  const memo = {};

  const findMin = (amt) => {
    if (memo[amt]) return memo[amt];
    if (amt < 0) return Infinity;
    if (amt === 0) return 0;

    let min = Infinity;
    for (coin of coins) {
      const currentMin = 1 + findMin(amt - coin);
      min = Math.min(currentMin, min);
    }

    memo[amt] = min;
    return min;
  };

  const res = findMin(amount);
  return res === Infinity ? -1 : res;
};
