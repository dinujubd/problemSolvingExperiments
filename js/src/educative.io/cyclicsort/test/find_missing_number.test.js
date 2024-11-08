const find = require("../find_missing_number")

describe('find: ', () => {
    it('should find the first missing number', () => {
        expect(find([4, 1, 0 ,3, 2])).toBe(5);
        expect(find([3, 4, 1, 2])).toBe(0);
    });
});