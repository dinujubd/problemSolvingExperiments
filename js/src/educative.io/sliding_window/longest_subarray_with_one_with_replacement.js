const longest_subarray_with_one_with_replacement = function (arr, k) {
    if (!arr || k > arr.length) return 0;
    let minWindow = 0, frequency = 0, maxLen = 0;

    for (let maxWindow = 0; maxWindow < arr.length; maxWindow++) {
        const cur = arr[maxWindow];
        if (cur === 1) {
            frequency++;
        }

        while (maxWindow - minWindow + 1 - frequency > k) {
            if (arr[minWindow] === 1)
                frequency--;

            minWindow++;
        }

        maxLen = Math.max(maxLen, maxWindow - minWindow + 1);
    }

    return maxLen;
}

module.exports = longest_subarray_with_one_with_replacement