const perm_missing_elements = require('../lesson 3-Time Complexity/perm_missing_elements')

test("perm_missing_elements should return correct result", () => {
    expect(perm_missing_elements([1, 3])).toEqual(2);
    expect(perm_missing_elements([1, 2, 3, 4, 6])).toEqual(5);
    expect(perm_missing_elements([6, 3, 5, 2, 1])).toEqual(4);
})