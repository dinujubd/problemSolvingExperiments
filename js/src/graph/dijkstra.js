const dijkstra_lazy = (g, n, s, e) => {
    let vis = Array.from({ length: n }).fill(false);
    let prev = Array.from({ length: n }).fill(null);
    let dist = Array.from({ length: n }).fill(Number.MAX_VALUE);
    let pq = [];

    dist[s] = 0
    pq.push([s, 0])

    while (pq.length > 0) {

        let ind2 = pq.findIndex(y => y[1] === Math.min(...pq.map(x => x[1])));
        let ind = pq[ind2][0]

        pq.splice(ind2, 1);

        vis[ind] = true;

        g[ind].forEach(edge => {
            if (!vis[edge.to]) {

                let newDist = dist[ind] === Number.MAX_VALUE ? edge.cost : dist[ind] + edge.cost

                if (newDist < dist[edge.to]) {
                    dist[edge.to] = newDist;
                    prev[edge.to] = ind
                    pq.push([edge.to, dist[edge.to]])
                }

            }
        });

        if (ind === e) {
            return [dist, prev];
        }
    }

    return null;

}

const find_shortest_path = (g, n, s, e) => {
    const [dist, prev] = dijkstra_lazy(g, n, s, e)

    const path = [];

    if (dist[e] === Number.MAX_VALUE) return path;

    for (let at = e; at != null; at = prev[at]) {
        path.unshift(at)
    }

    return path;

}

// console.log(solution([
// [{ to: 1, cost: 4 }, { to: 2, cost: 1 }],
//     [{ to: 3, cost: 1 }],
//     [{ to: 1, cost: 2 }, { to: 3, cost: 5 }],
//     [{ to: 4, cost: 3 }],
//     [],
// ], 5, 0, 4));

module.exports = find_shortest_path
