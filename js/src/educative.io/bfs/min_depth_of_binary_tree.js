class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_minimum_depth = function (root) {
    if (!root) return 0;
    let depth = 1;
    const q = [root];

    while (q.length) {
        let levelLength = q.length;
        while (levelLength > 0) {
            const cur = q.shift();
            if (cur.left === null && cur.right === null) return depth;

            if (cur.left != null) {
                q.push(cur.left);
            }
            if (cur.right != null) {
                q.push(cur.right);
            }
            levelLength--;
        }

        depth++;
    }
    return depth;
};

module.exports = { TreeNode, find_minimum_depth }
