
const combinationRecursion = (res, arr, tmp, lim, start) => {
    if (tmp.length === lim && tmp.length) {
        res.push([...tmp])
    }

    for (let i = start; i < arr.length; i++) {
        tmp.push(arr[i])
        combinationRecursion(res, arr, tmp, lim, i + 1) // i + 1 because we want to get the next combination
        tmp.pop(arr[i])
    }
}
const combination = (arr, lim) => {
    let res = [];
    combinationRecursion(res, arr, [], lim, 0);
    return res;
}


module.exports = combination