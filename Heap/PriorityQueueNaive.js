//Linked list implementation 
//O(n) insert, O(1) remove

class Node {
  constructor(val, priority) {
    this.value = val
    this.priority = priority
    this.next = null
  }
}

class PriorityQueue {
    constructor() {
      this.first = null;
    }
    
    insert(value, priority) {
      const newNode = new Node(value, priority)
      let currNode = this.first

      //if no first node
      if (!this.first) this.first = newNode
      //if newNode has higher priority than first node
      else if (priority > currNode.priority) {
        this.first = newNode
        newNode.next = currNode
      } 

      //Loop until we locate last node with higher priority
      while (currNode.next && priority < currNode.next.priority){
        currNode = currNode.next
      }
      
      //insert node 
      newNode.next = currNode.next
      currNode.next = newNode
    }
    
    remove() {
      const first = this.first;
      this.first = this.first.next;
      return first;
    }
}