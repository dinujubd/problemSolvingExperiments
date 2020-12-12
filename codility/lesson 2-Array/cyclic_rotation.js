const cyclicRotation = (A, K) => {
    if (A == null || A.length == 0 || K % A.length == 0)
        return A;

    const ret = Array(A.length);

    K = K % A.length;

    // add last K elements
    for (let i = 1; i <= K; i++) {
        ret[K - i] = A[A.length - i]
    }

    // add rest of the elements
    for (let i = 0; i < A.length - K; i++) {
        ret[i + K] = A[i];
    }

    return ret;
}

module.exports = cyclicRotation