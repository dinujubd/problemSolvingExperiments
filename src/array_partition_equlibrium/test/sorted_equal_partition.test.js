const sorted_equal_partition = require("../sorted_equal_partition");

describe("Equal partition in sorted", () => {
  it("should find a partition", () => {
    expect(sorted_equal_partition([1, 2, 3, 4, 2])).toBe(true);
  });

  it("should not find a partition", () => {
    expect(sorted_equal_partition([1, 999, 998, 2])).toBe(true);
  });

  it("should not find a partition", () => {
    expect(sorted_equal_partition([])).toBe(false);
  });

  it("should not find a partition", () => {
    expect(sorted_equal_partition([5])).toBe(false);
  });

  it("should not find a partition", () => {
    expect(sorted_equal_partition([1, 2])).toBe(false);
  });
});
