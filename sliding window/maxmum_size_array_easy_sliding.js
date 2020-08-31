const max_sub_array_of_size_k = (k, arr) => {

    let windowSum = 0.0, windowStart = 0;
    let result = [];

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]

        if (windowEnd >= k - 1) {
            result.push(windowSum / k);
            windowSum -= arr[windowStart]
            windowStart += 1;
        }
    }

    return result;
};

const solution = () => console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]))
solution();
module.exports = solution


