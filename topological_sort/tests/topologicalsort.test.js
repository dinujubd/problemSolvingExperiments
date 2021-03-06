const { toplogicalSort } = require('../.')

test('topolicalSort should sort graph topologically', () => {
    expect(toplogicalSort(
        7, [
        [6, 4],
        [6, 2],
        [5, 3],
        [5, 4],
        [3, 0],
        [3, 1],
        [3, 2],
        [4, 1],
    ])
    ).toEqual([5, 6, 3, 4, 0, 2, 1])
});