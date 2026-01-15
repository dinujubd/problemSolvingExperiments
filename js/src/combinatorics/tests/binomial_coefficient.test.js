const binomial_coefficient = require('../binomial_coefficient')

describe('binomial coefficient', () => {
    it('should calculate C(n, k) correctly', () => {
        expect(binomial_coefficient(5, 2)).toBe(10)
        expect(binomial_coefficient(6, 3)).toBe(20)
        expect(binomial_coefficient(10, 5)).toBe(252)
    })

    it('should return 1 when k equals 0', () => {
        expect(binomial_coefficient(5, 0)).toBe(1)
        expect(binomial_coefficient(10, 0)).toBe(1)
    })

    it('should return 1 when k equals n', () => {
        expect(binomial_coefficient(5, 5)).toBe(1)
        expect(binomial_coefficient(10, 10)).toBe(1)
    })

    it('should return n when k equals 1', () => {
        expect(binomial_coefficient(5, 1)).toBe(5)
        expect(binomial_coefficient(10, 1)).toBe(10)
    })
})
