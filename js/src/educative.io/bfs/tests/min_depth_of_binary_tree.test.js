const { TreeNode, find_minimum_depth } = require('../min_depth_of_binary_tree')

describe('binary_tree_level_order', () => {
    it('Should work', () => {
        var root = new TreeNode(12)
        root.left = new TreeNode(7)
        root.right = new TreeNode(1)
        root.right.left = new TreeNode(10)
        root.right.right = new TreeNode(5)

        expect(find_minimum_depth(root)).toStrictEqual(2);

        root.left.left = new TreeNode(9)
        root.right.left.left = new TreeNode(11)

        expect(find_minimum_depth(root)).toStrictEqual(3);

    });
})