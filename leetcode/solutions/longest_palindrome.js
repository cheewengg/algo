// https://leetcode.com/problems/longest-palindrome/
// https://leetcode.com/submissions/detail/677571436/
// Runtime: 60 ms, faster than 97.51% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 42.5 MB, less than 95.85% of JavaScript online submissions for Longest Palindrome.
// O(n) time, O(1) space where n === s.length

/**
 * @param {string} s
 * @return {number}
 */

const longestPalindrome = function (s) {
  let totalCount = 0;
  const letters = new Array(52).fill(false);

  for (let i = 0; i < s.length; i++) {
    let idx;
    const charCode = s.charCodeAt(i);
    if (charCode > 90) idx = charCode - 65 - 6;
    else idx = charCode - 65;

    if (letters[idx]) totalCount += 2;
    letters[idx] = !letters[idx];
  }

  return totalCount === s.length ? totalCount : totalCount + 1;
};

// const longestPalindrome = function (s) {
//   const memo = {};
//   let totalCount = 0;
//   for (letter of s) {
//     if (!memo[letter]) memo[letter] = 1;
//     else memo[letter]++;
//     totalCount++;
//   }

//   let finalLength = 0;
//   for (letter of Object.keys(memo)) {
//     const letterCount = memo[letter];
//     if (!letterCount % 2) {
//       finalLength += letterCount;
//       totalCount -= letterCount;
//       continue;
//     }

//     const n = Math.floor(letterCount / 2) * 2;
//     finalLength += n;
//     totalCount -= n;
//   }

//   if (finalLength % 2) return finalLength;
//   return totalCount ? finalLength + 1 : finalLength;
// };
