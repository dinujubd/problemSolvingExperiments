const { singleNumberXor, twoSingleNumberXor } = require('..')

test("singleNumberXor should find 4", () => {
    expect(singleNumberXor([1, 2, 3, 4, 2, 1, 3])).toBe(4);
})

test("twoSingleNumberXor should find 4, 7", () => {
    expect(twoSingleNumberXor([1, 4, 2, 1, 3, 2, 3, 7])).toEqual([7, 4]);
})