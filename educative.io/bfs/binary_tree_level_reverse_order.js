const binary_tree_level_reverse_order = function (root) {
    if (!root) return [];
    const result = [];
    const q = [root];

    while (q.length) {
        const curLevel = [];
        let levelLength = q.length;
        while (levelLength > 0) {
            const cur = q.shift();
            curLevel.push(cur.value);
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
            levelLength--;
        }
        result.unshift(curLevel);
    }

    return result;
};

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


module.exports = { binary_tree_level_reverse_order, TreeNode }