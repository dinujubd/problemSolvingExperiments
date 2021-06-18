const knapsack = function(weights, profits, capacity, i) {
    if(i=== -1 || capacity <= 0) return 0;

    if(weights[i] <= capacity) {
        return Math.max(profits[i] + knapsack(weights, profits, capacity - weights[i], i - 1), knapsack(weights, profits, capacity, i - 1));
    }

    return knapsack(weights, profits, capacity, i - 1);
}

module.exports = knapsack