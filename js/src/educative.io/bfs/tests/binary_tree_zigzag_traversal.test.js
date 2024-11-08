const { TreeNode, binary_tree_zigzag_traversal } = require('../binary_tree_zigzag_traversal')

describe('binary_tree_zigzag_traversal', () => {
    it('Should work', () => {
        const root = new TreeNode(12)
        root.left = new TreeNode(7)
        root.right = new TreeNode(1)
        root.left.left = new TreeNode(9)
        root.right.left = new TreeNode(10)
        root.right.right = new TreeNode(5)
        root.right.left.left = new TreeNode(20)
        root.right.left.right = new TreeNode(17)
        const result = binary_tree_zigzag_traversal(root);
        expect(result).toStrictEqual([[12], [1, 7], [9, 10, 5], [17, 20]]);
    });
})