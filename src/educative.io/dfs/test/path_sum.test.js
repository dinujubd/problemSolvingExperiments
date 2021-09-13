const { TreeNode, has_path } = require('../path_sum')

describe('has_path', () => {
    it('Should work', () => {
        const root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);

        expect(has_path(root, 23)).toBe(true);
        expect(has_path(root, 16)).toBe(false);
    });
})