let knapsack = (weights, values, W) => {
    const n = values.length;
    if (W <= 0 || n == 0 || weights.length != n) return 0;

    const dp = Array(values.length)
        .fill(0)
        .map(() => Array(W + 1).fill(0));

    for (let i = 0; i < n; i++) dp[i][0] = 0;

    for (let c = 0; c <= W; c++) {
        if (weights[0] <= c) dp[0][c] = values[0];
    }

    for (let i = 1; i < n; i++) {
        for (let c = 1; c <= W; c++) {
            let profitIncluded = 0, profitExcluded = 0;

            if (weights[i] <= c) profitIncluded = values[i] + dp[i - 1][c - weights[i]];

            profitExcluded = dp[i - 1][c];

            dp[i][c] = Math.max(profitIncluded, profitExcluded);
        }
    }

    return dp[n - 1][W];
}

module.exports = knapsack
