// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// https://leetcode.com/submissions/detail/679228679/
// Runtime: 91 ms, faster than 77.78% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
// Memory Usage: 51.9 MB, less than 57.24% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
// O(???) time, O(???) space

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q) return root;

  const queue = [root];
  let found_p = false;
  let found_q = false;

  let lvl = 0;
  while (!found_p || !found_q) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node === p) found_p = true;
      if (node === q) found_q = true;

      const left_node = node.left;
      const right_node = node.right;

      if (left_node) {
        left_node.parent = node;
        left_node.level = lvl + 1;
        queue.push(left_node);
      }

      if (right_node) {
        right_node.parent = node;
        right_node.level = lvl + 1;
        queue.push(right_node);
      }
    }

    lvl++;
  }

  let ancestor_p = p;
  let ancestor_q = q;

  while (ancestor_p !== ancestor_q) {
    const lvl_p = ancestor_p.level;
    const lvl_q = ancestor_q.level;
    if (lvl_p >= lvl_q) ancestor_p = ancestor_p.parent;
    if (lvl_q >= lvl_p) ancestor_q = ancestor_q.parent;
  }

  return ancestor_p;
};
