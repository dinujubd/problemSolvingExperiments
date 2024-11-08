const solution = require('../fruite_basket')

describe('fruite_basket', () => {
    it('Should work', () => {
        const maxNoOfFruites = solution("ABCAC")
        expect(maxNoOfFruites).toBe(3);
    });
});