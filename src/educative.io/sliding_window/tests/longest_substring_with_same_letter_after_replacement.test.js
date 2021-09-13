const solution = require('../longest_substring_with_same_letter_after_replacement')

describe('longest_substring_with_same_letter_after_replacement', () => {
    it('Should work', () => {
        const  len = solution("bccbababd", 2)
        expect(len).toBe(5);
    });
})