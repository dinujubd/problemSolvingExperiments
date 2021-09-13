const sort = require('./insertion_sort')

describe('insertion sort', () => {
    it('Should sort properly', () => {
        const result = sort([23,5,212,34,65,34]);
        expect(result).toStrictEqual([5,23,34,34,65,212]);
    });
})