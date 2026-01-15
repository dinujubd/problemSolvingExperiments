const lcp_array = require('../lcp_array_impl')

describe('lcp array', () => {
    it('should calculate longest common prefix for sorted suffixes', () => {
        const result = lcp_array('banana')
        // Sorted: a(5), ana(3), anana(1), banana(0), na(4), nana(2)
        expect(result[0].lcp).toBe(0) // first element always 0
        expect(result[1].lcp).toBe(1) // a vs ana = 'a'
        expect(result[2].lcp).toBe(3) // ana vs anana = 'ana'
    })

    it('should handle string with no common prefixes', () => {
        const result = lcp_array('abc')
        expect(result[0].lcp).toBe(0)
        expect(result[1].lcp).toBe(0) // a vs abc
        expect(result[2].lcp).toBe(0) // abc vs bc
    })

    it('should handle single character', () => {
        const result = lcp_array('a')
        expect(result.length).toBe(1)
        expect(result[0].lcp).toBe(0)
    })
})
