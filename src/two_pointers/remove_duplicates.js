const removeDuplicates = function (arr) {
    let i = 1, j = 1;

    while (j < arr.length) {
        if (arr[i - 1] !== arr[j]) {
            arr[i] = arr[j];
            i += 1;
        }
        j += 1;
    }

    return arr.slice(0, i);

};

module.exports = removeDuplicates
