// https://leetcode.com/problems/merge-intervals/
// https://leetcode.com/submissions/detail/679134724/
// Runtime: 132 ms, faster than 71.30% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 49.3 MB, less than 50.58% of JavaScript online submissions for Merge Intervals.
// O(n log n) time, O(n) space where n === intervals.length

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  const intervals_sorted = [...intervals];
  intervals_sorted.sort((a, b) => a[0] - b[0]);

  const result = [];
  let i = 0;
  const len = intervals_sorted.length;
  while (i < len) {
    if (i + 1 < len && intervals_sorted[i][1] >= intervals_sorted[i + 1][0]) {
      let j = i + 1;
      const temp = [...intervals_sorted[i]];

      while (j < len && temp[1] >= intervals_sorted[j][0]) {
        temp[0] = Math.min(temp[0], intervals_sorted[j][0]);
        temp[1] = Math.max(temp[1], intervals_sorted[j][1]);
        j++;
      }
      result.push(temp);
      i = j;
    } else {
      result.push(intervals_sorted[i]);
      i++;
    }
  }
  return result;
};
