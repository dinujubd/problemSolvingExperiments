const ceiling = function (data, key) {
    let start = 0, end = data.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (data[mid] === key) {
            return data[mid];
        } else if (data[mid] < key) {
            start = mid + 1;
        } else if (data[mid] > key) {
            end = mid - 1;
        }    
    }

    return data[start];
}

module.exports = ceiling