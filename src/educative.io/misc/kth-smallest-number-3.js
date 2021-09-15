const Heap = require("collections/heap");

const kth_smallest_number = function (nums, k) {
  const maxHeap = new Heap();

  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      maxHeap.push(nums[i]);
    } else {
      const curMax = maxHeap.peek();
      if (nums[i] <= curMax) {
        maxHeap.pop();
        maxHeap.push(nums[i]);
      }
    }
  }

  return maxHeap.peek();
};

module.exports = kth_smallest_number;
