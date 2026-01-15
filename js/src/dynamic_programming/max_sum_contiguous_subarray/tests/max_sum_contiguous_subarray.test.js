const maxSumSubArray = require('../max_sum_contiguous_subarray')

describe('max sum contiguous subarray', () => {
    it('should return maximum sum possible from an array', () => {
       expect(maxSumSubArray([1, 2, 3, 4, -10])).toStrictEqual([10, [1, 2, 3, 4]]);
       expect(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual([6, [4,-1,2,1]]);
       expect(maxSumSubArray([-1, -2, -3])).toStrictEqual([-1, [-1]]);
       expect(maxSumSubArray([97, 0, -461, -125, -404, -59, -322, -495, -288, -341, -449, -313, -192, -214, -389, -202, -183, -72, -416, -455, -187, -242, -416, 39, -198, -338, -465, -248, -25, -398, -97, -461, -214, -423, -407, -77, -190, -67, -178, -410, -160, 72, -350, -31, -85, -247, -319, -462, -303, -48, -354, -110, 17, 60, 19, 80, -218, -28, -426, -366, -140, 50])[0]).toBe(176);
    });
})
