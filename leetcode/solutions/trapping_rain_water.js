// https://leetcode.com/problems/trapping-rain-water/
// https://leetcode.com/submissions/detail/682723862/
// Runtime: 90 ms, faster than 55.49% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 45.8 MB, less than 9.90% of JavaScript online submissions for Trapping Rain Water.
// O(n) time, O(n) memory where n === height.length

/**
 * @param {number[]} height
 * @return {number}
 */

const trap = function (height) {
  // closed curve --> left <= right
  // open curve --> left > right
  const isOpen = (left, right) => {
    return height[left] > height[right];
  };
  if (height.length <= 2) return 0;
  const localBounds = [];
  let i = 0;

  while (i < height.length - 1) {
    let currentHeight = height[i];
    let nextHeight = height[i + 1];

    if (currentHeight <= nextHeight) {
      i++;
      continue;
    }

    // find local bound
    let localLeft = i;
    let localRight;
    let turningPoint;
    while (i < height.length) {
      currentHeight = height[i];
      nextHeight = height[i + 1];

      if (
        turningPoint &&
        (nextHeight === undefined || currentHeight > nextHeight)
      ) {
        localRight = i;
        break;
      }
      if (currentHeight < nextHeight) turningPoint = i;
      i++;
    }

    if (!localRight) break;
    localBounds.push([localLeft, localRight]);

    // check if possible to merge with left neighbor (if any)
    while (true) {
      if (localBounds.length === 1) break;
      let [leftL, rightL] = localBounds[localBounds.length - 1];
      let [leftN, rightN] = localBounds[localBounds.length - 2];

      if (!isOpen(leftN, rightN) || isOpen(leftL, rightL)) break;

      [leftL, rightL] = localBounds.pop();
      [leftN, rightN] = localBounds.pop();

      localBounds.push([leftN, rightL]);
    }
  }

  if (!localBounds.length) return 0;

  let totalVol = 0;
  for (let i = 0; i < localBounds.length; i++) {
    const [leftIdx, rightIdx] = localBounds[i];
    const localMax = Math.min(height[leftIdx], height[rightIdx]);

    let localVol = localMax * (rightIdx - leftIdx + 1);
    for (let j = leftIdx; j < rightIdx + 1; j++) {
      localVol -= Math.min(height[j], localMax);
    }

    totalVol += localVol;
  }

  return totalVol;
};
