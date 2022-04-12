// https://leetcode.com/problems/rotting-oranges/
// https://leetcode.com/submissions/detail/678927030/
// Runtime: 86 ms, faster than 80.97% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 44.9 MB, less than 63.68% of JavaScript online submissions for Rotting Oranges.
// O(m*n) time, O(m*n) space

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  // traverse grid in one pass to
  // 1. find location of rotten oranges in the grid
  // 2. find no. of rotten oranges
  // 3. find total no. of oranges

  let orangeCount = 0;

  const queue_r = [];
  const queue_c = [];
  const visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const currentCell = grid[r][c];
      if (currentCell !== 0) orangeCount++;
      if (currentCell === 2) {
        queue_r.push(r);
        queue_c.push(c);

        const cellLabel = r * grid[0].length + c;
        visited.add(cellLabel);
      }
    }
  }

  if (orangeCount === queue_r.length) return 0;

  let time = 0;
  let rottenOrangeCount = 0;

  while (queue_r.length > 0) {
    let loops = queue_r.length;

    // traverse up right down left
    const traverse_r = [-1, 0, 1, 0];
    const traverse_c = [0, 1, 0, -1];

    for (let i = 0; i < loops; i++) {
      const current_r = queue_r.shift();
      const current_c = queue_c.shift();

      rottenOrangeCount++;

      for (let j = 0; j < traverse_r.length; j++) {
        const neighbor_r = current_r + traverse_r[j];
        const neighbor_c = current_c + traverse_c[j];

        if (neighbor_r < 0 || neighbor_r >= grid.length) continue;
        if (neighbor_c < 0 || neighbor_c >= grid[0].length) continue;
        if (grid[neighbor_r][neighbor_c] === 0) continue;

        const cellLabel = neighbor_r * grid[0].length + neighbor_c;
        if (visited.has(cellLabel)) continue;

        queue_r.push(neighbor_r);
        queue_c.push(neighbor_c);
        visited.add(cellLabel);
      }
    }
    time++;
  }

  return rottenOrangeCount < orangeCount ? -1 : time - 1;
};
