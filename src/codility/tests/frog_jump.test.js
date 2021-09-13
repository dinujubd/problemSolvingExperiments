const frog_jump = require('../lesson 3-Time Complexity/frog_jump')

test("frog_jump should return correct result", () => {
    expect(frog_jump(10, 85, 30)).toEqual(3);
    expect(frog_jump(10, 69, 30)).toEqual(2);
})