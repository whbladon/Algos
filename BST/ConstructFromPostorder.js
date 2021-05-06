/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    
    //basecase if posorder has no length, leaflet is hit
    if (inorder.length<1) return null
    
    //create node, mutate postorder
    const node = new TreeNode(postorder.pop())
    
    
    //find index of node in inorder
    const nodeIndex = inorder.indexOf(node.val)
    
    
    //assign left and right to recursive calls, pass in mutated arrays
    node.right = buildTree(inorder.slice(nodeIndex + 1), postorder)
    node.left = buildTree(inorder.slice(0, nodeIndex), postorder)
    
    
    
    return node
};

