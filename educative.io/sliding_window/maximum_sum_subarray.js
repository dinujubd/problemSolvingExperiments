const max_sub_array_of_size_k = function (k, arr) {
    let sum = arr.filter((_, i) => i < k).reduce((p, c) => p + c);
    let max = sum;

    for (let i = 1; i < arr.length - k; i++) {
        sum = sum - arr[i - 1] + arr[i + k - 1];
        max = Math.max(sum, max);
    }

    return max;

};

module.exports = max_sub_array_of_size_k;