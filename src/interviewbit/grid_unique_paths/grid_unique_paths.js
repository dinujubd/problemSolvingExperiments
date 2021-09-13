const grid_unique_paths = function(a, b, i = 0, j = 0, dp) {
    if(!dp) dp = new Array(a).fill(Array(b));
    if(i + 1 === a && j + 1 === b) return 1;
    if(i === a || j === b) return 0;

    if(dp[i][j]) return dp[i][j];

    return dp[i][j] = grid_unique_paths(a, b, i, j+1) + grid_unique_paths(a, b, i+1, j);
}

module.exports = grid_unique_paths