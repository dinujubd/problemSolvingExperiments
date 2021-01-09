const solution = require('../no_repeat_substring')

describe('no_repeat_substring',() => {
    it('Should work', () => {
        const  maNoRepeatSubstring = solution("pwwkew");
        expect(maNoRepeatSubstring).toBe(3);
    });
})