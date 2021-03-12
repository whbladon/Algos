/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (!head) return false
    
    
    let slow = head
    let fast = head
    
    while (fast && slow){
        fast = fast.next?.next
        slow = slow.next
        if (fast === slow) return true
    }
    
    
    return false
};