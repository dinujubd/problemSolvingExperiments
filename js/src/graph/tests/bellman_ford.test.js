const bellman_ford = require('../bellman_ford')

describe('bellman_ford shortest path', () => {
    it('should find shortest distances from source', () => {
        const edges = [
            { from: 0, to: 1, cost: 4 },
            { from: 0, to: 2, cost: 1 },
            { from: 2, to: 1, cost: 2 },
            { from: 1, to: 3, cost: 1 },
            { from: 2, to: 3, cost: 5 },
        ]
        const dist = bellman_ford(edges, 4, 0)
        expect(dist[0]).toBe(0)
        expect(dist[1]).toBe(3)
        expect(dist[2]).toBe(1)
        expect(dist[3]).toBe(4)
    })

    it('should handle negative edge weights', () => {
        const edges = [
            { from: 0, to: 1, cost: 5 },
            { from: 1, to: 2, cost: -3 },
            { from: 0, to: 2, cost: 4 },
        ]
        const dist = bellman_ford(edges, 3, 0)
        expect(dist[0]).toBe(0)
        expect(dist[1]).toBe(5)
        expect(dist[2]).toBe(2)
    })

    it('should detect negative cycles', () => {
        const edges = [
            { from: 0, to: 1, cost: 1 },
            { from: 1, to: 2, cost: -1 },
            { from: 2, to: 0, cost: -1 },
        ]
        const dist = bellman_ford(edges, 3, 0)
        expect(dist[0]).toBe(Number.NEGATIVE_INFINITY)
        expect(dist[1]).toBe(Number.NEGATIVE_INFINITY)
        expect(dist[2]).toBe(Number.NEGATIVE_INFINITY)
    })
})
