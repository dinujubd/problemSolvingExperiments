const Heap = require('../ds_heap')

describe('Heap data structure', () => {
    it('should add elements and maintain max heap property', () => {
        const heap = new Heap()
        heap.add(5)
        heap.add(10)
        heap.add(3)
        expect(heap.peek()).toBe(10)
    })

    it('should poll max element', () => {
        const heap = new Heap()
        heap.add(5)
        heap.add(10)
        heap.add(3)
        expect(heap.poll()).toBe(10)
        expect(heap.peek()).toBe(5)
    })

    it('should handle single element', () => {
        const heap = new Heap()
        heap.add(5)
        expect(heap.peek()).toBe(5)
        expect(heap.poll()).toBe(5)
    })

    it('should maintain heap property after multiple operations', () => {
        const heap = new Heap()
        heap.add(3)
        heap.add(1)
        heap.add(6)
        heap.add(5)
        heap.add(2)
        heap.add(4)

        expect(heap.poll()).toBe(6)
        expect(heap.poll()).toBe(5)
        expect(heap.poll()).toBe(4)
    })
})
