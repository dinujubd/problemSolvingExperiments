const ceiling = require("../ceiling");

describe('ceiling: ', () => {
    it('should find exact match', () => {
        expect(ceiling([1, 2, 3, 14, 25, 67, 72], 25)).toBe(25);
    });

    it('should find closest higer', () => {
        expect(ceiling([1, 2, 3, 14, 25, 67, 72], 20)).toBe(25);
    });
});