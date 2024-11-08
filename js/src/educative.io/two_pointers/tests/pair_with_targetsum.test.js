const pair_with_targetsum = require("../pair_with_targetsum");

describe('pair_with_targetsum: ', () => {
    it('should find the pairs', () => {
        expect(pair_with_targetsum([1, 2, 3, 4, 6],6)).toStrictEqual([1,3]);
    });
});