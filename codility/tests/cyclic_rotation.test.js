const cyclic_rotation = require('../lesson 2-Array/cyclic_rotation')
const cyclic_rotation_v2 = require('../lesson 2-Array/cyclic_rotation_v2')

test("cyclic_rotation should return correct array", () => {
    expect(cyclic_rotation([1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(cyclic_rotation([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(cyclic_rotation([1, 2, 3], 1)).toEqual([3, 1, 2]);
    expect(cyclic_rotation([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
    expect(cyclic_rotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
})

test("cyclic_rotation_v2 should return correct array", () => {
    expect(cyclic_rotation_v2([1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(cyclic_rotation_v2([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(cyclic_rotation_v2([1, 2, 3], 1)).toEqual([3, 1, 2]);
    expect(cyclic_rotation_v2([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
    expect(cyclic_rotation_v2([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
})