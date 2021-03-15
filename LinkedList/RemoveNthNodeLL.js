/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head
    let prev = head
    
    while (fast){
        n--
        fast = fast.next
        
        if (n < 0) {
            prev = slow
            slow = slow.next
        }
    }
    
    if (slow !== head) prev.next = slow.next
    else head = slow.next
    
    return head
};