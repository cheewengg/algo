// https://leetcode.com/problems/combination-sum/
// https://leetcode.com/submissions/detail/679052522/
// Runtime: 126 ms, faster than 36.60% of JavaScript online submissions for Combination Sum.
// Memory Usage: 50 MB, less than 7.17% of JavaScript online submissions for Combination Sum.
// O(n) time, O(???) space where n === candidates.length * target

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  memo = { 0: [[]] };

  for (let num of candidates) {
    for (let i = 0; i < target; i++) {
      if (!memo[i]) continue;
      if (num + i > target) continue;

      if (!memo[num + i]) memo[num + i] = [];

      memo[i].forEach((combi) => {
        const newCombi = [...combi];
        newCombi.push(num);
        memo[num + i].push(newCombi);
      });
    }
  }

  return memo[target] ? memo[target] : [];
};
