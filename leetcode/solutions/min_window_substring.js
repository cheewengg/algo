// https://leetcode.com/problems/minimum-window-substring/
// https://leetcode.com/submissions/detail/682041061/
// Runtime: 104 ms, faster than 78.56% of JavaScript online submissions for Minimum Window Substring.
// Memory Usage: 49.2 MB, less than 23.05% of JavaScript online submissions for Minimum Window Substring.
// O(m) time, O(m) space where m = s.length
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const minWindow = function (s, t) {
  const memoT = {};
  for (let letter of t) {
    if (memoT[letter]) memoT[letter]++;
    else memoT[letter] = 1;
  }

  const memoS = {};
  const queueStart = [];
  const queueEnd = [];
  let len = 0;
  let bound;
  let leftQPointer = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!memoT[letter]) continue;

    memoS[letter] = memoS[letter] ? memoS[letter] + 1 : 1;
    queueEnd.push(i);
    if (memoS[letter] <= memoT[letter]) len++;
    if (bound === undefined && len === t.length) bound = queueEnd.length - 1;

    let leftQLetter = s[queueEnd[leftQPointer]];
    if (memoS[letter] <= memoT[letter] || letter !== leftQLetter) {
      queueStart.push(queueEnd[leftQPointer]);
      continue;
    }

    while (
      leftQPointer < queueEnd.length - 1 &&
      memoS[leftQLetter] > memoT[leftQLetter]
    ) {
      leftQPointer++;
      memoS[leftQLetter]--;
      leftQLetter = s[queueEnd[leftQPointer]];
    }

    queueStart.push(queueEnd[leftQPointer]);
  }

  if (bound === undefined) return "";

  let startIdx, endIdx;
  for (let i = bound; i < queueEnd.length; i++) {
    const currentLen = queueEnd[i] - queueStart[i] + 1;
    if (currentLen < t.length) continue;
    if (
      (startIdx === undefined && endIdx === undefined) ||
      currentLen < endIdx - startIdx + 1
    ) {
      startIdx = queueStart[i];
      endIdx = queueEnd[i];
    }
  }

  return s.slice(startIdx, endIdx + 1);
};
