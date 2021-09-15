const kth_smallest_number = function (nums, k) {
  let prevLowest = Number.MIN_VALUE;
  let prevIndex = -1;

  for (let i = 0; i < k; i++) {
    let min = Number.MAX_VALUE;
    let found = -1;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === prevLowest && j > prevIndex) {
        prevIndex = j;
        min = nums[j];
        break;
      } else if (nums[j] < min && nums[j] > prevLowest) {
        min = Math.min(min, nums[j]);
        found = j;
      }
    }
    prevLowest = min;
    prevIndex = found;
  }

  return prevLowest;
};

module.exports = kth_smallest_number;
