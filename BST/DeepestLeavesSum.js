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
 var deepestLeavesSum = function(root) {
    let count = 0
    let maxDepth = 0
    
    let DFS = (node, depth = 0) => {
        
        depth++
        if (depth>maxDepth){
            count = 0
            maxDepth = depth
        }
        
        if (depth===maxDepth) count += node.val
        
        if (node.left) DFS(node.left, depth)
        if (node.right) DFS(node.right, depth)
    }
    
    DFS(root)
    return count
};