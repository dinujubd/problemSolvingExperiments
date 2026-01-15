const { TreeNode, binary_tree_level_average } = require('../binary_tree_level_average')

describe('binary_tree_level_average', () => {
    it('Should work', () => {
        const root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.left.right = new TreeNode(2);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        const result = binary_tree_level_average(root);
        expect(result).toStrictEqual([12, 4, 6.5]);
    });
})