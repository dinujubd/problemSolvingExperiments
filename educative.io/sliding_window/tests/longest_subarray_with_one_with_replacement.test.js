const solution = require('../longest_subarray_with_one_with_replacement')

describe('longest_subarray_with_one_with_replacement', () => {
    it('Should work', () => {
        const  maxLen = solution([1,1,1,0,0,0,1,1,1,1,0], 2)
        expect(maxLen).toBe(6);
    });
})