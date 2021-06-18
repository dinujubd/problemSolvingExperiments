const max_heapify = require('./max_heap');
const min_heapify = require('./min_heap');

const sort = (heap, n, isMax) => {
    for (let i = n - 1; i > 0; i--) {
        [heap[0], heap[i]] = [heap[i], heap[0]]; // swapping top element to last element and heapify
        isMax ? max_heapify(heap, 0, i) : min_heapify(heap, 0, i);
    }
}

const heapSort = (heap, isMax) => {
    let n = heap.length
    sort(heap, n, isMax);
    return heap;
}

const makeHeap = (arr, isMax) => {
    let n = arr.length
    for (let i = n / 2 - 1; i >= 0; i--)  // starting from middle so that we don't need to do unncessary check
        isMax ? max_heapify(arr, i, n) : min_heapify(arr, i, n);

    return arr;
}

module.exports = {
    makeHeap,
    heapSort,
}