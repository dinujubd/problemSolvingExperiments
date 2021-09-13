class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const has_path = (root, sum) => {

    if(root === null) return false;

    if(!root.left && !root.right && root.value === sum) return true;

    return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value);
};


module.exports = {
    TreeNode,
    has_path
}