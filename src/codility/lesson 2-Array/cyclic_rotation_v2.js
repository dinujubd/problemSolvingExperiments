const cyclicRotation_v2 = (A, K) => {
    if (A == null || A.length == 0 || K % A.length == 0)
        return A;

    const st = [];

    K = K % A.length;

    // keep the rest of the items to stack
    for (var i = 1; i <= K; i++) {
        st.unshift(A[A.length - i]);
    }

    // Move only once
    for (let i = A.length - K, j = 1; i > 0; i--, j++) {
        A[A.length - j] = A[i - 1];
    }

    // Fill rest back
    let x = 0;
    while (st.length != 0) {
        A[x] = st.shift();
        x++;
    }

    return A;
}

module.exports = cyclicRotation_v2