// https://leetcode.com/problems/valid-parentheses/
// https://leetcode.com/submissions/detail/675171210/
// Runtime: 64 ms, faster than 88.18% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.3 MB, less than 60.72% of JavaScript online submissions for Valid Parentheses.
// O(n) time, O(n) space, where n === s.length

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const matcher = { "}": "{", ")": "(", "]": "[" };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];
    if (matcher.hasOwnProperty(currentBracket)) {
      if (stack.length.isEmpty) return false;
      if (matcher[currentBracket] !== stack.pop()) return false;
      continue;
    }

    stack.push(currentBracket);
  }

  return stack.length === 0;
};

module.exports = isValid;
