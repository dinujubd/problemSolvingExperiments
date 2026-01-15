class Heap {
  constructor() {
    this.heap = []
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)]
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)]
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)]
  }

  swap(indexOne, indexTwo) {
    ;[this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ]
  }

  peek() {
    return this.heap[0]
  }

  poll() {
    const item = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.heapifyDown()
    return item
  }

  add(item) {
    this.heap.push(item)
    this.heapifyUp()
  }

  heapifyUp() {
    let last = this.heap.length - 1

    while (this.hasParent(last) && this.heap[last] > this.parent(last)) {
      this.swap(last, this.getParentIndex(last))
      last = this.getParentIndex(last)
    }
  }

  heapifyDown() {
    let first = 0

    while (this.hasLeftChild(first)) {
      let largerChildIndex = this.getLeftChildIndex(first)

      if (
        this.hasRightChild(first) &&
        this.rightChild(first) > this.leftChild(first)
      ) {
        largerChildIndex = this.getRightChildIndex(first)
      }

      if (this.heap[first] > this.heap[largerChildIndex]) break

      this.swap(first, largerChildIndex)
      first = largerChildIndex
    }
  }
}

module.exports = Heap
