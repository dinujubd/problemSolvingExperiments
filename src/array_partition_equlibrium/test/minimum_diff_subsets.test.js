const { minimum_diff_subarray_dp } = require("../minimum_diff_subsets");

describe("Equal partition in sorted", () => {
  it("should find a partition", () => {
    expect(minimum_diff_subarray_dp([1, 2, 3, 9])).toBe(3);
  });

  it("should not find a partition", () => {
    expect(minimum_diff_subarray_dp([1, 2, 7, 1, 5])).toBe(0);
  });

  it("should not find a partition", () => {
    expect(minimum_diff_subarray_dp([1, 3, 100, 4])).toBe(92);
  });
});
