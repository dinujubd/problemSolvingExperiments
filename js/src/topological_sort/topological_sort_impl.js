const topologicalSort = (vertices, edges) => {
    const sortOrder = [];
    if (vertices.length <= 0) return sortOrder;

    const inDegree = Array(vertices).fill(0)
    const adjList = Array(vertices).fill(0).map(() => Array());

    edges.forEach(edge => {
        let [parent, child] = edge;
        adjList[parent].push(child);
        inDegree[child]++
    });

    const sources = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i);
        }
    }

    while (sources.length > 0) {
        let vertex = sources.shift();
        sortOrder.push(vertex);
        adjList[vertex].forEach(adj => {
            inDegree[adj]--;
            if (inDegree[adj] === 0) {
                sources.push(adj)
            }
        });
    }

    if (sortOrder.length !== vertices) {
        return [];
    }

    return sortOrder;
}

module.exports = topologicalSort
