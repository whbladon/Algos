//Priority Queue implemented with complete binary heap
//O(logn) insertion O(logn) remove, because you must restructure

class PriorityQueue {
  constructor() {
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
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.priority > this.heap[currentNodeParentIdx].priority
    ) {

    //Retrieve parent node
      const parent = this.heap[currentNodeParentIdx]; //null
    //Replace parent's position with newNode
      this.heap[currentNodeParentIdx] = newNode;
    //Replace currentNode's position with parent
      this.heap[currentNodeIdx] = parent;
    
    //Reset indexes based on mutated heap
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

  remove() {
    if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }
    const toRemove = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;
    let [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
    let currentChildIdx =
      this.heap[right] && this.heap[right].priority >= this.heap[left].priority
        ? right
        : left;
    while (
      this.heap[currentChildIdx] &&
      this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority
    ) {
      let currentNode = this.heap[currentIdx];
      let currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
    }
    return toRemove;
  }
}
