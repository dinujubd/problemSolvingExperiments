const sort = (arr) => {
    let i = 0;

    while (i < arr.length) {
        let j = arr[i] - 1;
        if (arr[i] !== arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        } else {
            i++
        }
    }
    return arr
}

console.log(sort([4, 1, 3, 5, 2]))

module.exports = sort
