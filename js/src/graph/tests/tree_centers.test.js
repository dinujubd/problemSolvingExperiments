const findTreeCenters = require('../tree_centers')

describe('find tree centers', () => {
    it('should find center of a simple tree', () => {
        const graph = [[], [], [], [], [], [], [], [], [], []]
        // Build tree: 0-1-2-3-4
        graph[0].push(1); graph[1].push(0)
        graph[1].push(2); graph[2].push(1)
        graph[2].push(3); graph[3].push(2)
        graph[3].push(4); graph[4].push(3)

        const centers = findTreeCenters(graph.slice(0, 5))
        expect(centers).toStrictEqual([2])
    })

    it('should find two centers for even path', () => {
        const graph = [[], [], [], []]
        // Build tree: 0-1-2-3
        graph[0].push(1); graph[1].push(0)
        graph[1].push(2); graph[2].push(1)
        graph[2].push(3); graph[3].push(2)

        const centers = findTreeCenters(graph)
        expect(centers.sort()).toStrictEqual([1, 2])
    })

    it('should handle single node', () => {
        const graph = [[]]
        const centers = findTreeCenters(graph)
        expect(centers).toStrictEqual([0])
    })

    it('should find center of a complex tree', () => {
        const graph = Array.from({ length: 10 }).map(() => [])
        // Build tree based on the example in the code
        graph[0].push(1); graph[1].push(0)
        graph[2].push(1); graph[1].push(2)
        graph[2].push(3); graph[3].push(2)
        graph[3].push(4); graph[4].push(3)
        graph[5].push(3); graph[3].push(5)
        graph[9].push(3); graph[3].push(9)
        graph[2].push(6); graph[6].push(2)
        graph[6].push(7); graph[7].push(6)
        graph[6].push(8); graph[8].push(6)

        const centers = findTreeCenters(graph)
        expect(centers).toContain(2) // Algorithm returns one of the centers
    })
})
