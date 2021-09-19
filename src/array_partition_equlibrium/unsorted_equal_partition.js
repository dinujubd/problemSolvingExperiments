const unsorted_equal_partition = function (arr) {
  const sum = arr.reduce((p, c) => p + c, 0);

  if (sum % 2 != 0) return false;

  const unsorted_equal_partition_rec = (arr, target, curIndex) => {
    if (target === 0) return true;
    if (arr.length === 0 || curIndex >= arr.length) return false;

    if (arr[curIndex] <= target) {
      return (
        unsorted_equal_partition_rec(
          arr,
          target - arr[curIndex],
          curIndex + 1
        ) || unsorted_equal_partition_rec(arr, target, curIndex + 1)
      );
    }

    return unsorted_equal_partition_rec(arr, target, curIndex + 1);
  };

  return unsorted_equal_partition_rec(arr, sum / 2, 0);
};

const unsorted_equal_partition_dp = function (arr) {
  const sum = arr.reduce((p, c) => p + c, 0);

  if (sum % 2 != 0) return false;

  let dp = Array(arr.length).fill(Array(sum / 2));

  const unsorted_equal_partition_rec = (arr, target, curIndex) => {
    if (target === 0) return true;
    if (arr.length === 0 || curIndex >= arr.length) return false;

    dp[curIndex] = dp[curIndex] || [];

    if (dp[curIndex][target] !== undefined) return dp[curIndex][target];

    if (arr[curIndex] <= target) {
      if (
        unsorted_equal_partition_rec(
          arr,
          target - arr[curIndex],
          curIndex + 1
        ) ||
        unsorted_equal_partition_rec(arr, target, curIndex + 1)
      ) {
        return (dp[curIndex][target] = true);
      }
    }

    return (dp[curIndex][target] = unsorted_equal_partition_rec(
      arr,
      target,
      curIndex + 1
    ));
  };

  return unsorted_equal_partition_rec(arr, sum / 2, 0);
};

const unsorted_equal_partition_dp_bottom_up = function (arr) {
  const sum = arr.reduce((p, c) => p + c, 0);
  if (sum % 2 != 0) return false;

  const target = sum / 2;

  const dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = target; j > 0; j--) {
      if (j >= arr[i]) dp[j] = dp[j] || dp[j - arr[i]];
    }
  }

  return dp[target];
};

module.exports = {
  unsorted_equal_partition,
  unsorted_equal_partition_dp,
  unsorted_equal_partition_dp_bottom_up,
};
