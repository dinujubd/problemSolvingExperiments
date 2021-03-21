const ncr = require("../combination/combination_ncr")

describe('ncr: ', () => {
    it('should find all the combinations of an array', () => {
        expect(ncr([1,2,3], 2)).toStrictEqual([[1,2], [1,3], [2,3]]);
    }); 
});