const maxSum = function (arr) {
    let max = arr[0];
    let max_so_far = arr[0];
    let max_found_here = 0;

    for (let i = 1; i < arr.length; i++) {
        max_so_far = Math.max(arr[i], max_so_far + arr[i]);

        if (max_so_far > max) {
            max_found_here = i;
            max = max_so_far;
        }
    }

    // Find out the list from
    let tmpMax = max;
    let i = max_found_here;

    while (tmpMax > 0) {
        tmpMax -= arr[i];
        if(tmpMax != 0) {
            i--;
        }
    }

    return [max, arr.slice(i, max_found_here + 1)];
}


module.exports = maxSum