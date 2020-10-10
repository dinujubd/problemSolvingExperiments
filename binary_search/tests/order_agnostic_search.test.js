const { order_agnostic_search } = require('../.')

test('order agnostic search', () => {
    expect(order_agnostic_search([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(order_agnostic_search([1, 2, 3, 4, 5], 4)).toBe(3);
    expect(order_agnostic_search([5, 4, 3, 2, 1], 2)).toBe(3);
    expect(order_agnostic_search([5, 4, 3, 2, 1], 1)).toBe(4);
    expect(order_agnostic_search([5, 4, 3, 2, 1], 7)).toBe(-1);
});