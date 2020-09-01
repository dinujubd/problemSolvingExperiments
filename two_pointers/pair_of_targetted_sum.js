const solution = (arr, k) => {

    let p1 = 0, p2 = arr.length - 1;

    while (p1 < p2) {
        let sum = arr[p1] + arr[p2];
        if (sum === k) return [p1, p2];

        if (sum > k) p2--;
        if (sum < k) p1++;
    }
}

const solution_hash_map = (arr, k) => {
    const map = {}

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(k-item in map) return [map[k-item], i]   
        map[item] = i;
    }

    return [-1, -1]
}

console.log(solution_hash_map([1, 2, 3, 4, 6], 6));
console.log(solution_hash_map([2, 5, 9, 11], 11));

module.exports = solution