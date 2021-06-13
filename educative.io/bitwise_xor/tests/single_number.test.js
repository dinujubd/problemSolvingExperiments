const single_number = require("../single_number")

describe('single_number: ', () => {
    it('should find out single number', () => {
        expect(single_number([1,2,3,4,3,1,4])).toBe(2)
        expect(single_number([1,2,3,4,3,2,4])).toBe(1)
    });
});