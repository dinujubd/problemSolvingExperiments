const single_number = function(nums = []) {
  return nums.reduce((a,c) => a ^ c);
}

module.exports = single_number