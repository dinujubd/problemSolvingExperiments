const sorted_equilibrium_point = (arr) => {
  if (arr.length < 3) return false;

  // O(n)
  const prefix_sum = (arr) => {
    arr.forEach((_, i, arr_ref) => {
      if (i == 0) return;
      arr_ref[i] = arr_ref[i] + arr_ref[i - 1];
    });
  };

  prefix_sum(arr);

  var totalSum = arr[arr.length - 1];

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i] - arr[i - 1];
    const sumWithoutCurrentItem = totalSum - item;
    if (sumWithoutCurrentItem % 2 !== 0) continue;

    if (sumWithoutCurrentItem / 2 === arr[i - 1]) return true;
  }

  return false;
};

module.exports = sorted_equilibrium_point;
