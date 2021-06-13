
const recursion_helper = (res, arr, tmp, start) => {
    res.push([...tmp]);

    for (let i = start; i < arr.length; i++) {
        tmp.push(arr[i]);
        recursion_helper(res, arr, tmp, i + 1);
        tmp.pop();
    }
}
const combination = (arr) => {
    let res = [];
    recursion_helper(res, arr, [], 0);
    return res;
}


module.exports = combination