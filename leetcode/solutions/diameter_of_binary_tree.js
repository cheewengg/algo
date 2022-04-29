// https://leetcode.com/problems/diameter-of-binary-tree/
// https://leetcode.com/submissions/detail/689655956/
// Runtime: 64 ms, faster than 97.65% of JavaScript online submissions for Diameter of Binary Tree.
// Memory Usage: 45.4 MB, less than 87.93% of JavaScript online submissions for Diameter of Binary Tree.
// O(n) time, O(log n) space where n === no. of nodes in tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  let result = 0;

  const depthFinder = (node) => {
    if (!node) return 0;
    const depthLeftSubTree = depthFinder(node.left);
    const depthRightSubTree = depthFinder(node.right);

    const diameter = depthLeftSubTree + depthRightSubTree;
    result = Math.max(result, diameter);

    return 1 + Math.max(depthLeftSubTree, depthRightSubTree);
  };

  depthFinder(root);

  return result;
};
