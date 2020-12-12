const oddOccurances = require('../lesson 2-Array/odd_occurances')

test("oddOccurances should return correct gap", () => {
    expect(oddOccurances([1, 2, 3, 4, 3, 2, 1])).toEqual(4);
    expect(oddOccurances([1, 2, 3, 3, 2, 1, 5])).toEqual(5);
})