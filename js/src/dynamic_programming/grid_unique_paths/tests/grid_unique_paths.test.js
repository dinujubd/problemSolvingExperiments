const grid_unique_paths = require('../grid_unique_paths')

describe('grid_unique_paths', () => {
    it('should return the number of paths correctly', () => {
        expect(grid_unique_paths(2 , 2)).toBe(2);
        expect(grid_unique_paths(3 , 3)).toBe(6);
        expect(grid_unique_paths(3 , 2)).toBe(3);
        expect(grid_unique_paths(3 , 7)).toBe(28);
    });
});