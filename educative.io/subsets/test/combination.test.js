const combination = require("../combination/combination")

describe('combination: ', () => {
    it('should find all the combinations of an array', () => {
        expect(combination([1,2,3])).toStrictEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
    }); 
});