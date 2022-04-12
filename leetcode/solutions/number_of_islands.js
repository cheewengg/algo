// https://leetcode.com/problems/number-of-islands/
// https://leetcode.com/submissions/detail/678916596/
// Runtime: 118 ms, faster than 52.52% of JavaScript online submissions for Number of Islands.
// Memory Usage: 50.1 MB, less than 34.55% of JavaScript online submissions for Number of Islands.
// O(m*n) time, O(m*n) space

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const visited = new Set();

  const bfs = (r, c) => {
    // traversing up, right, down, left
    const traverse_r = [-1, 0, 1, 0];
    const traverse_c = [0, 1, 0, -1];

    const queue_r = [r];
    const queue_c = [c];

    while (queue_r.length > 0) {
      const current_r = queue_r.pop();
      const current_c = queue_c.pop();

      for (let i = 0; i < traverse_r.length; i++) {
        const neighbor_r = current_r + traverse_r[i];
        const neighbor_c = current_c + traverse_c[i];

        if (neighbor_r < 0 || neighbor_r >= grid.length) continue;
        if (neighbor_c < 0 || neighbor_c >= grid[0].length) continue;
        if (grid[neighbor_r][neighbor_c] === "0") continue;

        const cellLabel = grid[0].length * neighbor_r + neighbor_c;
        if (visited.has(cellLabel)) continue;

        queue_r.push(neighbor_r);
        queue_c.push(neighbor_c);
        visited.add(cellLabel);
      }
    }
    return 1;
  };

  let islands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const current_cell = grid[row][col];
      const current_cellLabel = grid[0].length * row + col;
      if (current_cell === "0") continue;
      if (visited.has(current_cellLabel)) continue;
      islands += bfs(row, col);
    }
  }

  return islands;
};
