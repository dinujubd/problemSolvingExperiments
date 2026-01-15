const binomial_coefficient = (n, k) => {
    if (n === k || k === 0) return 1;
    return binomial_coefficient(n - 1, k - 1) + binomial_coefficient(n - 1, k)
}

const binomial_coefficient_dp = (n, k, mem) => {
    if (!mem) mem = Array.from({ length: n + 1 }).map(_ => Array.from({ length: k + 1 }).fill(0));
    if (n === k || k === 0) return 1;

    if (!mem[n][k] === 0) {
        return mem[n][k]
    }

    let res = binomial_coefficient(n - 1, k - 1, mem) + binomial_coefficient(n - 1, k, mem)
    mem[n][k] = res;
    return res;
}


const binomial_coefficient_dp_bottom_up = (n, k) => {

    let mem = Array.from({ length: n + 1 }).map(_ => Array.from({ length: k + 1 }).fill(0));

    mem.forEach(d => d[0] = 1)

    for (let i = 0; i <= k; i++) {
        mem[i][i] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            mem[i][j] = mem[i - 1][j] + mem[i - 1][j - 1]
        }
    }
    return mem[n][k]

}


module.exports = binomial_coefficient_dp_bottom_up
