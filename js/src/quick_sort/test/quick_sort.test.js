const quick_sort = require("../quick_sort");

describe("quicksort: ", () => {
  it("should sort properly", () => {
    expect(quick_sort([4, 2, 3, 1, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
