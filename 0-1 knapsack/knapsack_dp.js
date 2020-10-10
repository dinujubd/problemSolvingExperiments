const knapsack = (weights, values, W, i, dp) => {

    if (!dp) dp = Array.from({ length: weights.length }).map(_ => Array.from({ length: W + 1 }))

    if (i === -1 || W === 0) return 0;

    if (dp[i][W]) return dp[i][W]

    if (weights[i] <= W) {
        return dp[i][W] = Math.max(values[i] + knapsack(weights, values, W - weights[i], i - 1, dp), knapsack(weights, values, W, i - 1, dp))
    }

    return dp[i][W] = knapsack(weights, values, W, i - 1, dp);
}

module.exports = knapsack
