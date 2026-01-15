const suffix_array = require('../suffix_array_impl')

describe('suffix array', () => {
    it('should generate sorted suffix array', () => {
        const result = suffix_array('banana')
        expect(result.length).toBe(6)
        // Sorted suffixes: a, ana, anana, banana, na, nana
        expect(result[0].str).toBe('a')
        expect(result[1].str).toBe('ana')
        expect(result[2].str).toBe('anana')
        expect(result[3].str).toBe('banana')
        expect(result[4].str).toBe('na')
        expect(result[5].str).toBe('nana')
    })

    it('should include original indices', () => {
        const result = suffix_array('abc')
        expect(result).toContainEqual({ str: 'abc', ind: 0 })
        expect(result).toContainEqual({ str: 'bc', ind: 1 })
        expect(result).toContainEqual({ str: 'c', ind: 2 })
    })

    it('should handle single character', () => {
        const result = suffix_array('a')
        expect(result).toStrictEqual([{ str: 'a', ind: 0 }])
    })
})
