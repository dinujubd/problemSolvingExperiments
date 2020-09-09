
const findCenters = (g) => {
    let n = g.length;
    let degree = Array.from({ length: n }).fill(0);
    let leaves = [];

    for (let i = 0; i < g.length; i++) {
        degree[i] = g[i].length

        if (degree[i] <= 1) {
            leaves.push(i)
            degree[i] = 0
        }
    }

    let count = leaves.length;

    while (count < n) {
        let new_leaves = [];

        leaves.forEach(node => {
            g[node].forEach(neighbor => {
                degree[neighbor] = degree[neighbor] - 1
                if (degree[neighbor] === 1) {
                    new_leaves.push(neighbor);
                }
            })
            degree[node] = 1
        });
        count += new_leaves.length;
        leaves = new_leaves;
    }

    return leaves;

}

const addUndirectedEdge = (tree, from, to) => {
    let f = tree[from];
    let t = tree[to];

    f.push(to);
    t.push(from);
}


const findTreeCenters = (treeEdgeArr) => {
    const tree = Array.from({ length: 9 }).map(x => [])

    treeEdgeArr.forEach(x => addUndirectedEdge(tree, x[0], x[1]))

    const n = tree.length;
    let degree = Array.from({ length: n }).fill(0);

    // Find all leaf nodes
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

    // Remove leaf nodes and decrease the degree of each node adding new leaf nodes progressively
    // until only the centers remain.
    while (processedLeafs < n) {
        let newLeaves = [];
        for (let node in leaves) {
            for (let  neighbor in tree[node]) {
                if (--degree[neighbor] == 1) {
                    newLeaves.push(neighbor);
                }
            }
            degree[node] = 0;
        }
        processedLeafs += newLeaves.length;
        leaves = newLeaves;
    }

    return leaves;
}

//findCenters()

module.exports = findTreeCenters
