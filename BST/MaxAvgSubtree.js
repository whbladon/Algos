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
 var maximumAverageSubtree = function(root) {
    let output = 0
   
    function DFS (node){
        let sum = node.val
        let nodeCount = 1
        
        //if left, recurse left
        if (node.left) {
            const [leftSum, leftCount] = DFS(node.left)
            sum += leftSum
            nodeCount += leftCount
        }
        
        //if right, recurse right
        if (node.right) {
            const [rightSum, rightCount] = DFS(node.right)
            sum += rightSum
            nodeCount += rightCount
        }
        
        output = Math.max(sum/nodeCount, output)
        return [sum, nodeCount]
    }
        
    DFS(root)
    return output
};