const sorted_equal_partition = require("../sorted_equilibrium_point");

describe("Equal partition in sorted", () => {
  it("should find a partition", () => {
    expect(sorted_equal_partition([1, 2, 3, 3, 0])).toBe(true);
    expect(sorted_equal_partition([1, 2, 3, 777, 6])).toBe(true);
  });

  it("should not find a partition", () => {
    expect(sorted_equal_partition([1, 2, 3, 0])).toBe(false);
    expect(sorted_equal_partition([1, 2, 3, 777, 67])).toBe(false);
  });
});
