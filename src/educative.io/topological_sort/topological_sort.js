const topoligical_sort = function (vertices, edges) {
    let sortOrder = [];
    if (vertices <= 0) return [];

    const inDegree = Array(vertices).fill(0)
    const adjList = Array(vertices).fill(0).map(() => Array());

    // 1: Create inDegrees from edge list

    edges.forEach(edge => {
        const [from, to] = edge;
        adjList[from].push(to);
        inDegree[to]++;
    });

    // 2: Pick edges which has in degree 0

    const sources = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i);
        }
    }

    // 3: Do BFS and keep decreasing in degree of dependents of a source. once deps becomes 0, push it to source

    while (sources.length > 0) {
        const vertex = sources.shift();
        sortOrder.push(vertex);
        adjList[vertex].forEach(to => {
            inDegree[to]--;
            if (inDegree[to] === 0) {
                sources.push(to);
            }
        })
    }
    
    // 4. Detect cycle
    if (sortOrder.length !== vertices) {
        return [];
    }

    return sortOrder;

}

module.exports = topoligical_sort