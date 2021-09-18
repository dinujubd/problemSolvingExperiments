const quick_sort = function (nums) {
  const quick_sort_rec = (l, h) => {
    if (l < h) {
      const p = partition(l, h);

      quick_sort_rec(l, p);
      quick_sort_rec(p + 1, h);
    }

    return nums;
  };

  const partition = (l, h) => {
    let i = l,
      j = h,
      p = nums[l];

    while (i < j) {
      do {
        i++;
      } while (nums[i] <= p);

      do {
        j--;
      } while (nums[j] > p);

      if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    [nums[l], nums[j]] = [nums[j], nums[l]];

    return j;
  };

  return quick_sort_rec(0, nums.length - 1);
};

module.exports = quick_sort;
