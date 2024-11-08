const init = (graph) => {
    let dist = [];
    let len = graph.length;

    for (let i = 0; i < len; i++) {
        dist[i] = [];
        for (let j = 0; j < len; j++) {
            dist[i][j] = i === j ? 0 : isFinite(graph[i][j]) ? graph[i][j] : Number.POSITIVE_INFINITY;
        }
    }

}

const getShortestPath = (graph) => {
    const dist = init(graph)
    const len = dist.length;

    for (let k = 0; k < len; k++) {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                dist[i, j] = Math.min(dist[i, j], dist[i, k] + dist[k, j])
            }
        }
    }
    return dist;
}

module.exports = getShortestPath
