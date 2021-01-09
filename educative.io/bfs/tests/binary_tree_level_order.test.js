const { TreeNode, binary_tree_level_order } = require('../binary_tree_level_order')

describe('binary_tree_level_order', () => {
    it('Should work', () => {
        const root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        const result = binary_tree_level_order(root);
        expect(result).toStrictEqual([[12], [7, 1], [9, 10, 5]]);
    });
})