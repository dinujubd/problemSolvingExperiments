const permutation = require('../permutation')

describe('permutation', () => {
    it('should return all permutations of an array', () => {
        const result = permutation([1, 2, 3])
        expect(result.length).toBe(6)
        expect(result).toContainEqual([1, 2, 3])
        expect(result).toContainEqual([1, 3, 2])
        expect(result).toContainEqual([2, 1, 3])
        expect(result).toContainEqual([2, 3, 1])
        expect(result).toContainEqual([3, 1, 2])
        expect(result).toContainEqual([3, 2, 1])
    })

    it('should return single permutation for single element', () => {
        expect(permutation([1])).toStrictEqual([[1]])
    })

    it('should return empty array for empty input', () => {
        expect(permutation([])).toStrictEqual([[]])
    })
})
