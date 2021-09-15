const kth_smallest_number_1 = require("../kth-smallest-number-1");
const kth_smallest_number_2 = require("../kth-smallest-number-2");
const kth_smallest_number_3 = require("../kth-smallest-number-3");

describe("Kth Smallest Number: ", () => {
  it("Sol 1: should find exact match", () => {
    expect(kth_smallest_number_1([5, 2, 6, 3, 1, 9], 3)).toBe(3);
    expect(kth_smallest_number_1([1, 1, 1, 3, 1, 9], 3)).toBe(1);
  });

  it("Sol 2: should find exact match", () => {
    expect(kth_smallest_number_2([5, 2, 6, 3, 1, 9], 3)).toBe(3);
    expect(kth_smallest_number_2([1, 1, 1, 3, 1, 9], 3)).toBe(1);
  });

  it("Sol 3: should find exact match", () => {
    expect(kth_smallest_number_3([5, 2, 6, 3, 1, 9], 3)).toBe(3);
    expect(kth_smallest_number_3([1, 1, 1, 3, 1, 9], 3)).toBe(1);
  });
});
