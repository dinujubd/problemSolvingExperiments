const solution = (arr) => arr.filter((item, i) => !(i > 0 && arr[i - 1] === item));


module.exports = solution
