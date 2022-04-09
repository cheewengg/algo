// https://leetcode.com/problems/balanced-binary-tree/
// https://leetcode.com/submissions/detail/677078839/
// Runtime: 80 ms, faster than 82.74% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 48.4 MB, less than 17.71% of JavaScript online submissions for Balanced Binary Tree.
// O(n) time, O(h) space where n === no. of nodes, h === height of binary tree

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
 * @return {boolean}
 */

const helper = (node) => {
  if (!node) return { balance: true, height: 0 };
  const { balance: leftSubTreeBalance, height: leftSubTreeHeight } = helper(
    node.left
  );
  const { balance: rightSubTreeBalance, height: rightSubTreeHeight } = helper(
    node.right
  );

  const balance =
    leftSubTreeBalance &&
    rightSubTreeBalance &&
    Math.abs(leftSubTreeHeight - rightSubTreeHeight) <= 1;
  const height = 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);

  return { balance, height };
};

const isBalanced = function (root) {
  const { balance } = helper(root);
  return balance;
};
