const solution = require('../longest_string_with_distinct_k_characters')

it("longest string with distict k characters should work", () => {
    const test1 = solution('araaci', 2)
    const test2 = solution('araaci', 1)
    const test3 = solution('cbbebi', 3)

    expect(test1).toBe(4);
    expect(test2).toBe(2);
    expect(test3).toBe(5);
});