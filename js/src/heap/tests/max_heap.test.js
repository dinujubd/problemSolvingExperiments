const heap = require('../heap')

describe('heap: ', () => {
    describe('mean heap:', () => {
        it("should heapify properly", () => {
            expect(heap.makeHeap([56, 2, 5, 87, 3, 8, 3, 6, 89, 0], false)).toStrictEqual([0, 2, 3, 6, 3, 8, 5, 87, 89, 56]);
        })

        it("should sort in ascending order", () => {
            const arr = [56, 2, 5, 87, 3, 8, 3, 6, 89, 0];
            heap.makeHeap(arr, false);
            expect(heap.heapSort(arr, false)).toStrictEqual([89, 87, 56, 8, 6, 5, 3, 3, 2, 0]);
        })
    })

    describe('max heap:', () => {
        it("should heapify properly", () => {
            expect(heap.makeHeap([56, 2, 5, 87, 3, 8, 3, 6, 89, 0], true)).toStrictEqual([89, 87, 8, 56, 3, 5, 3, 6, 2, 0]);
        })

        it("should sort in ascending order", () => {
            const arr = [56, 2, 5, 87, 3, 8, 3, 6, 89, 0];
            heap.makeHeap(arr, true);
            expect(heap.heapSort(arr, true)).toStrictEqual([0, 2, 3, 3, 5, 6, 8, 56, 87, 89]);
        })
    })

});