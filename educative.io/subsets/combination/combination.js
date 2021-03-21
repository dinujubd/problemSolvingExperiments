
const combinationRecursion = (res, arr, tmp, start) => { 
    if(tmp.length)
        res.push([...tmp])
    for (let i = start; i < arr.length; i++) {
        tmp.push(arr[i])
        combinationRecursion(res, arr, tmp, i + 1)
        tmp.pop(arr[i])
    }
}
const combination = (arr) => {
    let res = [];
    combinationRecursion(res, arr, [], 0);
    return res;
}


module.exports = combination