class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_paths_rec = function (allPaths, tmp = [], node, sum) {
    if (node === null) {
        return;
    }

    tmp.push(node.value);
    if (node.left == null && node.right == null && sum === node.value) {
        allPaths.push([...tmp]);
    } else {
        find_paths_rec(allPaths, tmp, node.left, sum - node.value);
        find_paths_rec(allPaths, tmp, node.right, sum - node.value);
    }

    tmp.pop();
}


const find_paths = function (root, sum) {
    allPaths = [];

    find_paths_rec(allPaths, [], root, sum);

    return allPaths;
};

module.exports = {
    TreeNode,
    find_paths,
}



