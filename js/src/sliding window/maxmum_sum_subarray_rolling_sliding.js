const max_sub_array_of_size_k = (k, arr) => {

    let windowSum = 0.0, windowStart = 0, max = Number.MIN_VALUE;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]

        if (windowEnd >= k - 1) {
            max = windowSum > max ? windowSum : max;

            windowSum -= arr[windowStart]
            windowStart += 1;
        }
    }

    return max;
};

const solution = () => console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]))

module.exports = solution


