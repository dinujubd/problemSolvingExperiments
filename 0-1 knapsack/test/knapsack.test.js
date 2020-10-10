const { knapsack, knapsack_dp, knapsack_dp_bottom_up } = require('../.')

test("knapsack should return max value", () => {
    expect(knapsack([5, 5, 3, 6, 7, 8], [2, 5, 6, 7, 8, 1], 25, 5)).toBe(26)
})

test("knapsack dynamic solition should return max value", () => {
    expect(knapsack_dp([5, 5, 3, 6, 7, 8], [2, 5, 6, 7, 8, 1], 25, 5)).toBe(26)
})

test("knapsack dynamic bottom up solition should return max value", () => {
    expect(knapsack_dp_bottom_up([5, 5, 3, 6, 7, 8], [2, 5, 6, 7, 8, 1], 25)).toBe(26)
})