const kth_smallest_number = function (nums, k) {
  nums.sort((a, b) => a - b);
  return nums[k - 1];
};

module.exports = kth_smallest_number;
