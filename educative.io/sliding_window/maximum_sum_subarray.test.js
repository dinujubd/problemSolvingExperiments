const msub = require('./maximum_sum_subarray')

it("Maximum Subarray Should Be Calcualted Properly", () => {
    const test1 = msub(3, [2, 1, 5, 1, 3, 2])
    const test2 = msub(2, [2, 3, 4, 1, 5])

    expect(test1).toBe(9);
    expect(test2).toBe(7);
});