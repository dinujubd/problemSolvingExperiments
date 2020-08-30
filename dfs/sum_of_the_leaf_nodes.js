const sumOfLeaf = (graph) =>
    graph.children == null || graph.children.length === 0
        ? graph.val
        : graph.children.map(sumOfLeaf).reduce((a, b) => a + b, 0)


const solution = () => {
    const graph = {
        val: 0,
        children: [{
            val: 1,
            children: [{
                val: 3,
                children: [
                    {
                        val: 5
                    }
                ]
            }]
        }, {
            val: 2,
            children: [{
                val: 3
            }]
        }]
    }

    return sumOfLeaf(graph);
}

module.exports = solution;