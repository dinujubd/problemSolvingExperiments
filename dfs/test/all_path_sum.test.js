const { TreeNode, find_paths } = require('../all_path_sum');

describe("find_paths: ", ()=> {
    it("Shold find all the paths with given sum", ()=> {
        var root = new TreeNode(12)
        root.left = new TreeNode(7)
        root.right = new TreeNode(1)
        root.left.left = new TreeNode(4)
        root.right.left = new TreeNode(10)
        root.right.right = new TreeNode(5)

        expect(find_paths(root, 23)).toStrictEqual([[12,7,4],[12,1,10]])
    })
});