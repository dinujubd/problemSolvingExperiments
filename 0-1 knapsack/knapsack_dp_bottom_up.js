const knapsack = (weights, values, W) => {

    const N = weights.length;
    let dp = Array.from({ length: N + 1 }).map(Array.from({ length: W + 1 }))

    for (let i = 1; i <= N; i++) {
        for (let w = 1; w <= W; w++) {
            if (weights[i - 1] <= w) {
                dp[w][i] = Math.max(dp[w - weights[w]][i - 1] + values[i - 1], dp[w][i - 1])
            } else {
                dp[w][i] = dp[w][i - 1]
            }
        }
    }
    return dp[W][N]
}

module.exports = knapsack
