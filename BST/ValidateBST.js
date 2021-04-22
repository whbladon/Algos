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
 const isValidBST = function(root) {
    
    const validate = (node, min, max) => {
        //basecase if leaflet is hit
        if (!node) return true
        
        //check if node violates min and max
        if (max != null && node.val >= max
            || 
            min != null && node.val <= min) {
            
            return false
        } 
        
        
            
        //return both left and right evals
        return validate(node.left, min, node.val) && validate(node.right, node.val, max)
    }
    
    return validate(root, null, null)
}