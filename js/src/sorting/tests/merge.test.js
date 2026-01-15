const merge = require('../merge')

describe('merge', () => {
    it('1: Should sort properly', () => {
        const result = merge([1,2,3], [4,5,6]);
        expect(result).toStrictEqual([1,2,3,4,5,6]);
    });

    it('2: Should sort properly', () => {
        const result = merge([1,2,5], [3,4,6]);
        expect(result).toStrictEqual([1,2,3,4,5,6]);
    });

    it('3: Should sort properly', () => {
        const result = merge([1,2,7], [4,5,6]);
        expect(result).toStrictEqual([1,2,4,5,6,7]);
    });

    it('4: Should sort properly', () => {
        const result = merge([1,2,3,7], [4,5,6]);
        expect(result).toStrictEqual([1,2,3,4,5,6,7]);
    });

    it('5: Should sort properly', () => {
        const result = merge([1,2,3,7], [4,5,6,98, 100]);
        expect(result).toStrictEqual([1,2,3,4,5,6,7, 98, 100]);
    });
})