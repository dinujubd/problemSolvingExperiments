const tape_equilibrium = require('../lesson 3-Time Complexity/tape_equilibrium')

test("tape_equilibrium should return correct result", () => {
    expect(tape_equilibrium([-5, 100])).toEqual(105);
    expect(tape_equilibrium([5, 100])).toEqual(95);
    expect(tape_equilibrium([-5, 100])).toEqual(105);
    expect(tape_equilibrium([3, 1, 2, 4, 3])).toEqual(1);
})