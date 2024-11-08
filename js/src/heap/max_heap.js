const max_heapify = (heap, curr, size) => {
    let largest = curr;
    let left = 2 * curr + 1;
    let right = left + 1;

    if (left < size && heap[largest] < heap[left]) {
        largest = left;
    }

    if (right < size && heap[largest] < heap[right]) {
        largest = right;
    }

    if (largest !== curr) {
        [heap[curr], heap[largest]] = [heap[largest], heap[curr]]
        max_heapify(heap, largest, size) // if a swap happens we need to heapify from the swapped position
    }

}


module.exports = max_heapify;
