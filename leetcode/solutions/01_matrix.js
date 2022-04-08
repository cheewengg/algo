// https://leetcode.com/problems/01-matrix/
// https://leetcode.com/submissions/detail/676583977/
// Runtime: 256 ms, faster than 51.11% of JavaScript online submissions for 01 Matrix.
// Memory Usage: 57.2 MB, less than 54.05% of JavaScript online submissions for 01 Matrix.
// O(m*n) time, O(m*n) space where m === no. of rows, n === no. of columns

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  const queue_r = [];
  const queue_c = [];

  const res = mat.map((row, rowIdx) =>
    row.map((col, colIdx) => {
      if (!col) {
        queue_r.push(rowIdx);
        queue_c.push(colIdx);
        return col;
      }
      return Infinity;
    })
  );

  const traverse_r = [-1, 0, 1, 0];
  const traverse_c = [0, 1, 0, -1];
  let i = 0;

  while (i < queue_r.length) {
    const current_r = queue_r[i];
    const current_c = queue_c[i];
    const current_dist = res[current_r][current_c];

    for (let i = 0; i < traverse_r.length; i++) {
      const neighbor_r = current_r + traverse_r[i];
      const neighbor_c = current_c + traverse_c[i];

      if (neighbor_r < 0 || neighbor_r >= mat.length) continue;
      if (neighbor_c < 0 || neighbor_c >= mat[0].length) continue;

      const dist = 1 + current_dist;
      if (dist >= res[neighbor_r][neighbor_c]) continue;
      res[neighbor_r][neighbor_c] = dist;

      queue_r.push(neighbor_r);
      queue_c.push(neighbor_c);
    }

    i++;
  }

  return res;
};

module.exports = updateMatrix;
