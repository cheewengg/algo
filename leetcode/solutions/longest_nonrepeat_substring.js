// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// https://leetcode.com/submissions/detail/676987786/
// Runtime: 322 ms, faster than 23.22% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 49.1 MB, less than 26.92% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// O(???) time, O(???) space where n === s.length

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const strLen = s.length;
  let max = 0;

  for (let i = 0; i < strLen; i++) {
    const potentialMax = strLen - i;
    if (max >= potentialMax) break;

    const seen = new Set();
    seen.add(s[i]);
    let currentMax = 1;

    for (let j = i + 1; j < strLen; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      currentMax++;
    }

    max = Math.max(currentMax, max);
  }

  return max;
};
