// https://leetcode.com/problems/permutations/
// https://leetcode.com/submissions/detail/679142160/
// Runtime: 76 ms, faster than 90.15% of JavaScript online submissions for Permutations.
// Memory Usage: 45.9 MB, less than 14.30% of JavaScript online submissions for Permutations.
// O(n!) time, O(n) space where n === nums.length

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  if (nums.length === 1) return [[...nums]];

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const nums_reduced = [...nums];
    nums_reduced.splice(i, 1);
    for (const comb of permute(nums_reduced)) {
      const newComb = [nums[i], ...comb];
      result.push(newComb);
    }
  }

  return result;
};
