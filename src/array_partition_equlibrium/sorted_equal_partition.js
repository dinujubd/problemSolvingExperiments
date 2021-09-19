const sorted_equal_partition = (arr) => {
  // O(n)
  const prefix_sum = (arr) => {
    arr.forEach((_, i, arr_ref) => {
      if (i == 0) return;

      arr_ref[i] = arr_ref[i] + arr_ref[i - 1];
    });
  };

  // O(log(n))
  const binary_search = (arr, item) => {
    let i = 0,
      j = arr.length - 1;

    while (i < j) {
      if (arr[i] === item || arr[j] === item) return true;
      const mid = parseInt((j - i) / 2);
      if (arr[mid] === item) return true;

      if (arr[mid] > item) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }

    return false;
  };

  prefix_sum(arr);

  var totalSum = arr[arr.length - 1];

  if (totalSum % 2 === 1) return false;

  return binary_search(arr, totalSum / 2);
};

module.exports = sorted_equal_partition;
