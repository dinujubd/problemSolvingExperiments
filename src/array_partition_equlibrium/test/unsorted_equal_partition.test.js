const {
  unsorted_equal_partition_dp_bottom_up,
} = require("../unsorted_equal_partition");

describe("Equal partition in sorted", () => {
  it("should find a partition", () => {
    expect(unsorted_equal_partition_dp_bottom_up([1, 2, 4, 2, 3])).toBe(true);
  });

  it("should not find a partition", () => {
    expect(unsorted_equal_partition_dp_bottom_up([1, 999, 2, 998])).toBe(true);
  });

  it("should not find a partition", () => {
    expect(unsorted_equal_partition_dp_bottom_up([5])).toBe(false);
  });

  it("should not find a partition", () => {
    expect(unsorted_equal_partition_dp_bottom_up([1, 2])).toBe(false);
  });
});
