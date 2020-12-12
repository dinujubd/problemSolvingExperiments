const cyclic_rotation = require('../lesson 2-Array/cyclic_rotation')

test("binaryGap should return correct gap", () => {
    expect(cyclic_rotation([1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(cyclic_rotation([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(cyclic_rotation([1, 2, 3], 1)).toEqual([3, 1, 2]);
    expect(cyclic_rotation([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
    expect(cyclic_rotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
})