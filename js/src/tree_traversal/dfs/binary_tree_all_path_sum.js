class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_paths_rec = (allPaths, root, sum, current) => {

    if (root === null) return;
    current.push(root.value)
    if (root.left === null && root.right === null && sum === root.value) {
        allPaths.push([...current])
    } else {
        find_paths_rec(allPaths, root.left, sum - root.value, current);
        find_paths_rec(allPaths, root.right, sum - root.value, current);
    }

    current.pop(root.value)
}


const find_paths = function (root, sum) {
    allPaths = [];

    find_paths_rec(allPaths, root, sum, [])

    return allPaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)

module.exports = find_paths