const addUndirectedEdge = (tree, from, to) => {
    let f = tree[from];
    let t = tree[to];

    f.push(to);
    t.push(from);
}


const findTreeCenters = (tree) => {
    const n = tree.length;
    let degree = Array.from({ length: n }).fill(0);

    let leaves = [];

    for (let i = 0; i < n; i++) {
        let edges = tree[i];
        degree[i] = edges.length;
        if (degree[i] <= 1) {
            leaves.push(i);
            degree[i] = 0;
        }
    }

    let processedLeafs = leaves.length;

    while (processedLeafs < n) {
        let newLeaves = [];

        leaves.forEach(node => {
            tree[node].forEach(neighbor => {
                if (--degree[neighbor] == 1) {
                    newLeaves.push(neighbor);
                }
            })

            degree[node] = 0;
        })
        processedLeafs += newLeaves.length;
        leaves = newLeaves;
    }

    return leaves;
}

const graph = Array.from({ length: 10 }).map(x => [])

addUndirectedEdge(graph, 0, 1);
addUndirectedEdge(graph, 2, 1);
addUndirectedEdge(graph, 2, 3);
addUndirectedEdge(graph, 3, 4);
addUndirectedEdge(graph, 5, 3);
addUndirectedEdge(graph, 9, 3);
addUndirectedEdge(graph, 2, 6);
addUndirectedEdge(graph, 6, 7);
addUndirectedEdge(graph, 6, 8);


findTreeCenters(graph)


module.exports = findTreeCenters
