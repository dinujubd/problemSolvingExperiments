const bellman_ford = (edges, V, start) => {
    let dist = Array(V).fill(Number.POSITIVE_INFINITY)
    dist[start] = 0;

    // Relaxation
    for (let v = 0; v < V - 1; v++) {
        edges.forEach(edge => {
            if (dist[edge.from] + edge.cost < dist[edge.to])
                dist[edge.to] = dist[edge.from] + edge.cost
        });

    }

    // Negative Cycle
    for (let v = 0; v < V - 1; v++) {
        edges.forEach(edge => {
            if (dist[edge.from] + edge.cost < dist[edge.to])
                dist[edge.to] = Number.NEGATIVE_INFINITY
        });

    }

    return dist
}

module.exports = bellman_ford
