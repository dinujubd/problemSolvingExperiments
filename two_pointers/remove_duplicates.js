const solution = (arr) => arr.filter((item, i) => !(i > 0 && arr[i - 1] === item));

console.log(solution([1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5]))
module.exports = solution
