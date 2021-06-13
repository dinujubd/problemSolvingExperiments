const order_agnostic_binary_search = function (arr, key) {
    let start = 0;
    let end = arr.length - 1;

    const asc = arr[start] < arr[end];

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (key === arr[mid]) return mid;

        if (asc) {
            if (key < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (key > arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return -1;
}

module.exports = order_agnostic_binary_search