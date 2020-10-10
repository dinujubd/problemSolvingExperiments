const { pairOfTargettedSum, removeDuplicates } = require('../.')

test("pairOfTargettedSum should return correct value", () => {
    expect(pairOfTargettedSum([1, 2, 3, 4, 6], 6)).toEqual([1, 3]);
    expect(pairOfTargettedSum([2, 5, 9, 11], 11)).toEqual([0, 2]);
})

test("removeDuplicates should remove the remove the duplicates", () => {
    expect(removeDuplicates([1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5])).toEqual([1, 2, 3, 4, 5])
})