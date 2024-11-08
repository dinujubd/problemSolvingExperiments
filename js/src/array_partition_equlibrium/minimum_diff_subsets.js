const minimum_diff_subarray = function (arr) {
  const minimum_diff_subarray_rec = (arr, curIndex, sum1, sum2) => {
    if (curIndex === arr.length) return Math.abs(sum1 - sum2);

    const diff1 = minimum_diff_subarray_rec(
      arr,
      curIndex + 1,
      sum1 + arr[curIndex],
      sum2
    );

    const diff2 = minimum_diff_subarray_rec(
      arr,
      curIndex + 1,
      sum1,
      sum2 + arr[curIndex]
    );

    return Math.min(diff1, diff2);
  };

  return minimum_diff_subarray_rec(arr, 0, 0, 0);
};

const minimum_diff_subarray_dp = function (arr) {
  const dp = [];

  const minimum_diff_subarray_rec = (arr, curIndex, sum1, sum2) => {
    if (curIndex === arr.length) return Math.abs(sum1 - sum2);

    dp[curIndex] = dp[curIndex] || [];

    if (dp[curIndex][sum1] != undefined) return dp[curIndex][sum1];

    const diff1 = minimum_diff_subarray_rec(
      arr,
      curIndex + 1,
      sum1 + arr[curIndex],
      sum2
    );

    const diff2 = minimum_diff_subarray_rec(
      arr,
      curIndex + 1,
      sum1,
      sum2 + arr[curIndex]
    );

    return (dp[curIndex][sum1] = Math.min(diff1, diff2));
  };

  return minimum_diff_subarray_rec(arr, 0, 0, 0);
};

module.exports = {
  minimum_diff_subarray,
  minimum_diff_subarray_dp,
};
