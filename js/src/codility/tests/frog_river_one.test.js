const frog_river_one = require('../lesson 4-Counting/frog_river_one')

test("frog_river_one should return correct result", () => {
    expect(frog_river_one(5, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6);
    expect(frog_river_one(5, [1, 4, 1, 5, 2, 3, 7])).toEqual(5);
    expect(frog_river_one(5, [1, 3, 1, 2, 3, 5])).toEqual(-1);
})