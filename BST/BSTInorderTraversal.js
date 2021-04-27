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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let list = []
    if (!root) return list
    
    let DFS = node => {
        if (node.left) DFS(node.left)
        list.push(node.val)
        if (node.right) DFS(node.right)
    }
    
    DFS(root)
    return list
};