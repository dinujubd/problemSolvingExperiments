const isHappyNumber = require('../happy_number')

describe('happy number', () => {
    it('should return true for happy numbers', () => {
        expect(isHappyNumber(1)).toBe(true)
        expect(isHappyNumber(7)).toBe(true)
        expect(isHappyNumber(19)).toBe(true)
        expect(isHappyNumber(23)).toBe(true)
    })

    it('should return false for unhappy numbers', () => {
        expect(isHappyNumber(2)).toBe(false)
        expect(isHappyNumber(4)).toBe(false)
        expect(isHappyNumber(12)).toBe(false)
    })
})
