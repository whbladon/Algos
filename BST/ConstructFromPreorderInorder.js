/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    
    //basecase, if a leaflet is hit, return null, bubble up this leaflet
    if(inorder.length < 1) return null
    
    //construct node from first element of preorder, alter preorder
    const root = new TreeNode(preorder.shift())
    
    //find index of root by searching inorder
    const indexOfRoot = inorder.indexOf(root.val)
    
    //make recursive call to build left subtree with altered preorder and left slice of inorder
    root.left = buildTree(preorder, inorder.slice(0, indexOfRoot))
    root.right = buildTree(preorder, inorder.slice(indexOfRoot + 1))
    
    //bubble up your tree nodes
    return root
};