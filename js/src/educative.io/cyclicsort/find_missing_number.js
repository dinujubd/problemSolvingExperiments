const find = (arr) => {
    let i = 0;

    while (i < arr.length) {
        let j = arr[i];
        if (arr[i] < arr.length && arr[i] !== arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        } else {
            i++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != i)
            return i;
    }
    return arr.length;
}

module.exports = find
