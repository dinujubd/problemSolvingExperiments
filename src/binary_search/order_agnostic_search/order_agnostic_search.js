const solution = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    let isAscending = arr[low] < arr[high];

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === target) return mid;

        if (isAscending) {
            if (target > arr[mid]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        } else {
            if (target < arr[mid]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1;

}
module.exports = solution