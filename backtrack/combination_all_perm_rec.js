const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const permutationRec = (res, arr, start) => {

    if (start >= arr.length) {
        res.push([...arr]);
    }

    for (let i = start; i < arr.length; i++) {
        swap(arr, i, start)
        permutationRec(res, arr, start + 1) // Start Remaining Values Permuation with already swapped values
        swap(arr, i, start)
    }

}

const permutation = (arr) => {
    const res = [];
    permutationRec(res, arr, 0);
    return res;
}

const combinationRecursion = (res, arr, tmp, lim, start) => {
    if (tmp.length === lim) {
        res.push(...permutation([...tmp]))
    }

    for (let i = start; i < arr.length; i++) {
        tmp.push(arr[i])
        combinationRecursion(res, arr, tmp, lim, i + 1) // i + 1 because we want to get the next combination
        tmp.pop(arr[i])
    }
}
const combination_all = (arr, lim) => {
    let res = [];
    combinationRecursion(res, arr, [], lim, 0);
    return res;
}

module.exports = combination_all