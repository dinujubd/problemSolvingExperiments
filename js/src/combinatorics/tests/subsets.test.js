const findAllSubsets = require('../find_all_subsets')

describe('find all subsets', () => {
    it('should return all subsets of an array', () => {
        const result = findAllSubsets([1, 2, 3])
        expect(result.length).toBe(8)
        expect(result).toContainEqual([])
        expect(result).toContainEqual([1])
        expect(result).toContainEqual([2])
        expect(result).toContainEqual([3])
        expect(result).toContainEqual([1, 2])
        expect(result).toContainEqual([1, 3])
        expect(result).toContainEqual([2, 3])
        expect(result).toContainEqual([1, 2, 3])
    })

    it('should return only empty set for empty input', () => {
        expect(findAllSubsets([])).toStrictEqual([[]])
    })

    it('should return two subsets for single element', () => {
        expect(findAllSubsets([1])).toStrictEqual([[], [1]])
    })
})
