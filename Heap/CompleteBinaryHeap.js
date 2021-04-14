//Priority Queue implemented with complete binary heap
//O(logn) insertion O(logn) remove

class Node {
  constructor(val, priority) {
    this.value = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    //heap is initialized with null as zero index
    //so that parent can be located by dividing index by two, and children by multiplying by two
    this.heap = [null];
  }

  
  insert(value, priority) {

    //Instantiate node, push into heap array
    const newNode = new Node(value, priority);
    this.heap.push(newNode);

    //Create current pointers to new Node and it's parent
    let currentNodeIdx = this.heap.length - 1; // 1
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2); // 0

    //Loop to locate insertion location
    //While currentNode's parent exists AND newNode's priority is greater than currentNode's parent priority
    //This keeps swapping node with it's parent until no longer possible
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.priority > this.heap[currentNodeParentIdx].priority
    ) {

    //swap currentNode with parentNode
      const parent = this.heap[currentNodeParentIdx]; //null
      this.heap[currentNodeParentIdx] = newNode;
      this.heap[currentNodeIdx] = parent;
    
    //Reset indexes based on mutated heap
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

  remove() {

    //if it's a heap with just one element, just pop it off
    if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }


    //remove the first element (ignore null)
    const toRemove = this.heap[1];
    
    //grab last element added, we send this back through the heap
    this.heap[1] = this.heap.pop();
    
    //start at the first node, grab left and right child
    let currentNodeIdx = 1;
    let right = currentNodeIdx * 2
    let left = currentNodeIdx * 2
    let currentChildIdx
    

    //decide whether to start with left or right child node
    if (this.heap[right] && this.heap[right].priority >= this.heap[left].priority){
      currentChildIdx = right
    } else currentChildIdx = left

    //we want to locate high prio node and swap with them
    //while there is a child to swap with AND it has a higher prio that currNode
    while (
      this.heap[currentChildIdx] &&
      this.heap[currentNodeIdx].priority <= this.heap[currentChildIdx].priority
    ) {

      //swap currentNode with the childNode
      let currentNode = this.heap[currentNodeIdx];
      let currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentNodeIdx] = currentChildNode;
    }
    return toRemove;
  }
}
