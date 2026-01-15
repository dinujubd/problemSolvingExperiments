const min_heapify = require('../min_heap')

describe('min heapify', () => {
    it('should heapify array to min heap property', () => {
        const heap = [5, 1, 3]
        min_heapify(heap, 0, 3)
        expect(heap[0]).toBe(1)
    })

    it('should maintain min heap after heapify', () => {
        const heap = [10, 5, 3, 2, 4]
        min_heapify(heap, 0, 5)
        expect(heap[0]).toBeLessThanOrEqual(heap[1])
        expect(heap[0]).toBeLessThanOrEqual(heap[2])
    })

    it('should not change already valid min heap', () => {
        const heap = [1, 5, 3]
        min_heapify(heap, 0, 3)
        expect(heap).toStrictEqual([1, 5, 3])
    })
})
