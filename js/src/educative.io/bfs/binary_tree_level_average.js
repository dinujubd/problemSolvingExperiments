const binary_tree_level_average = function (root) {
    if (!root) return [];
    const result = [];
    const q = [root];

    while (q.length) {
        let sum = 0;
        let levelLength = q.length;
        let by = q.length;
        while (levelLength > 0) {
            const cur = q.shift();
            sum += cur.value;
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
            levelLength--;
        }
        result.push(sum / by);
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


module.exports = { binary_tree_level_average, TreeNode }