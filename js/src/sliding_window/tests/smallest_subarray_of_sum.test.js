const smsub = require('../smallest_subarray_of_sum')

it("Maximum Subarray Should Be Calcualted Properly", () => {
    const test1 = smsub(7, [2, 1, 5, 2, 3, 2])
    const test2 = smsub(7, [2, 1, 5, 2, 8])
    const test3 = smsub(8, [3, 4, 1, 1, 6])

    expect(test1).toBe(2);
    expect(test2).toBe(1);
    expect(test3).toBe(3);
});