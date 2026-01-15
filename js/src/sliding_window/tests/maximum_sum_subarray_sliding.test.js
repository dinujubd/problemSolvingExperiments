const max_sub_array_of_size_k = require('../maximum_sum_subarray_sliding')

describe('Subarray: ', () => {
  it('should sort properly', () => {
    expect(max_sub_array_of_size_k(3, [4, 2, 5, 1, 7])).toStrictEqual([5, 5, 7])
  })
})
