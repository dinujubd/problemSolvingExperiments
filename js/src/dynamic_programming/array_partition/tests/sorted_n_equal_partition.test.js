const sorted_equal_partition = require("../sorted_n_equal_partition");

describe("Equal partition in sorted", () => {
  it("should find a partition", () => {
    expect(sorted_equal_partition([1, 2, 3, 4, 2], 2)).toBe(true);
  });

  it("should find a partition", () => {
    expect(sorted_equal_partition([1, 1], 2)).toBe(true);
  });

  it("should find a partition", () => {
    expect(sorted_equal_partition([1, 1, 1], 3)).toBe(true);
  });

  it("should find a partition", () => {
    expect(sorted_equal_partition([1, 1, 2], 2)).toBe(true);
  });

  it("should find a partition", () => {
    expect(
      sorted_equal_partition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2)
    ).toBe(true);
  });

  it("should find a partition", () => {
    expect(
      sorted_equal_partition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3)
    ).toBe(true);
  });

  it("should find a partition", () => {
    expect(
      sorted_equal_partition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4)
    ).toBe(true);
  });

  it("should find a partition", () => {
    expect(
      sorted_equal_partition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 6)
    ).toBe(true);
  });

  it("should find a partition", () => {
    expect(
      sorted_equal_partition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 12)
    ).toBe(true);
  });

  it("should find a partition xxx", () => {
    expect(
      sorted_equal_partition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 8)
    ).toBe(false);
  });

  it("should not find a partition", () => {
    expect(sorted_equal_partition([1, 999, 998, 2], 2)).toBe(true);
  });
  it("should not find a partition", () => {
    expect(sorted_equal_partition([5], 1)).toBe(true);
  });
});
