const sort = require("../cyclicsort")

describe('cyclic_sort: ', () => {
    it('should sort properly', () => {
        expect(sort([4, 1, 3, 5, 2])).toStrictEqual([1, 2, 3, 4, 5])
    });
});