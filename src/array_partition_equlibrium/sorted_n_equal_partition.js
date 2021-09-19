const sorted_n_equal_partition = (arr, n) => {
  // O(n)
  const prefix_sum = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i] + arr[i - 1];
    }
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

  if (totalSum % n != 0) return false;

  return Array(totalSum / n).reduce(
    (p, c) => p && binary_search(arr, totalSum / (c + 1)),
    true
  );
};

module.exports = sorted_n_equal_partition;
