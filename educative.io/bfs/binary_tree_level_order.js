const binary_tree_level_order = function (root) {
    if (!root) return [];
    const q = [root];
    const res = [];

    while (q.length) {
        let curLen = q.length;
        const curLevel = [];
        while (curLen) {
            const cur = q.shift();
            curLevel.push(cur.value);
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
            curLen--;
        }
        res.push(curLevel);
    }

    return res;
};

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


module.exports = { binary_tree_level_order, TreeNode }