/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


 var reverseList = function(head) {
    if (head === null) return null
    
    let currentNode = head.next
    let prevNode = head
    let temp
    head.next = null
   
    
    while (currentNode) {
        let temp = currentNode.next
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = temp
    }
    return prevNode
};
