const {TreeNode, binary_tree_level_reverse_order} = require('../binary_tree_level_reverse_order')

describe('binary_tree_level_reverse_order', () => {
    it('Should work', () => {
        const root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5);
        const result = binary_tree_level_reverse_order(root);
        expect(result).toStrictEqual([[9, 10, 5], [7, 1], [12]]);
    });
})