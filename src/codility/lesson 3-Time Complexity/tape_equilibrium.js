

module.exports = (A) => {
    const sum = A.reduce((prev, cur) => prev + cur, 0)
    let ls = 0;
    let rs = sum - ls;
    let minDiff = Number.POSITIVE_INFINITY;

    for (let i = 0; i < A.length - 1; i++) {
        ls += A[i];
        rs -= A[i];
        minDiff = Math.min(minDiff, Math.abs(rs - ls));
    }

    return minDiff;
}