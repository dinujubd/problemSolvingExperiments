const findAllSubsets = (arr) => {
    const res = [[]];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const len = res.length;
        for (let j = 0; j < len; j++) {
            const subset = res[j];
            res.push([...subset, element])
        }
    }

    return res;
}

console.log(findAllSubsets([1, 2, 3]))

module.exports = findAllSubsets
