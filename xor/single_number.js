function find_single_number(arr) {
    return arr.reduce((prev, curr) => prev ^ curr, 0)
}


console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]));

module.exports = find_single_number