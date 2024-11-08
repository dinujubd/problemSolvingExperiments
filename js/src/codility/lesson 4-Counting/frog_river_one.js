module.exports = (X, A) => {
    let map = {};

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= X && !(A[i] in map)) {
            map[A[i]] = i;
        }
    }

    if (Object.keys(map).length < X) return -1

    return Math.max(...Object.values(map));
}