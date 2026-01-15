const find_shortest_path = require('../dijkstra')

describe('dijkstra shortest path', () => {
    it('should find the shortest path in a simple graph', () => {
        const graph = [
            [{ to: 1, cost: 4 }, { to: 2, cost: 1 }],
            [{ to: 3, cost: 1 }],
            [{ to: 1, cost: 2 }, { to: 3, cost: 5 }],
            [{ to: 4, cost: 3 }],
            [],
        ]
        const path = find_shortest_path(graph, 5, 0, 4)
        expect(path).toStrictEqual([0, 2, 1, 3, 4])
    })

    it('should find direct path when it is the shortest', () => {
        const graph = [
            [{ to: 1, cost: 1 }],
            [{ to: 2, cost: 1 }],
            [],
        ]
        const path = find_shortest_path(graph, 3, 0, 2)
        expect(path).toStrictEqual([0, 1, 2])
    })

    it('should return path with single node when start equals end', () => {
        const graph = [
            [{ to: 1, cost: 1 }],
            [],
        ]
        const path = find_shortest_path(graph, 2, 0, 0)
        expect(path).toStrictEqual([0])
    })
})
