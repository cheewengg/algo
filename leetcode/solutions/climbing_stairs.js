// https://leetcode.com/problems/climbing-stairs/
// https://leetcode.com/submissions/detail/677545901/
// Runtime: 76 ms, faster than 54.76% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 42.1 MB, less than 41.22% of JavaScript online submissions for Climbing Stairs.
// O(n) time, O(n) space

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const memo = {};
  const helperFunc = (i) => {
    if (memo[i] !== undefined) return memo[i];
    if (i < 0) return 0;
    if (i == 0) return 1;

    const res = helperFunc(i - 1) + helperFunc(i - 2);
    memo[i] = res;
    return res;
  };

  return helperFunc(n);
};
