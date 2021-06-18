const min_heapify = (heap, curr, size) => {
    let smallest = curr;
    let left = 2 * curr + 1;
    let right = left + 1;

    if (left < size && heap[smallest] > heap[left]) {
        smallest = left;
    }

    if (right < size && heap[smallest] > heap[right]) {
        smallest = right;
    }

    if (smallest !== curr) {
        [heap[curr], heap[smallest]] = [heap[smallest], heap[curr]]
        min_heapify(heap, smallest, size) // if a swap happens we need to heapify from the swapped position
    }

}

module.exports = min_heapify;