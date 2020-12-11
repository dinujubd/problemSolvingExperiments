const binaryGap = require('../lesson 1-Iteration/binary_gap')

test("binaryGap should return correct gap", () => {
    expect(binaryGap(0)).toEqual(0);
    expect(binaryGap(4)).toEqual(0);
    expect(binaryGap(9)).toEqual(2);
    expect(binaryGap(529)).toEqual(4);
})