const knapsack = (weights, values, W, i) => {

    if (i === -1 || W === 0) return 0;

    if (weights[i] <= W) {
        return Math.max(weights[i] + knapsack(weights, values, W - weights[i], i - 1), knapsack(weights, values, W, i - 1))
    }

    return knapsack(weights, values, W, i - 1);
}

module.exports = knapsack
