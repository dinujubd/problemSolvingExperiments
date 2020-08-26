
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

module.exports = permutation