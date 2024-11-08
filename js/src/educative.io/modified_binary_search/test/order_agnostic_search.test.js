const order_agnostic_search = require("../order_agnostic_search");

describe('order_agnostic_search: ', () => {
    it('should work', () => {
        expect(order_agnostic_search([4, 6, 10], 10)).toBe(2);
        expect(order_agnostic_search([1, 2, 3, 4, 5, 6, 7], 5)).toBe(4);
        expect(order_agnostic_search([10, 6, 4], 10)).toBe(0);
        expect(order_agnostic_search([10, 6, 4], 4)).toBe(2);
        expect(order_agnostic_search([10, 6, 4], 9)).toBe(-1);
    });
});