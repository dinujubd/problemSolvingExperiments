const binary_tree_zigzag_traversal = function (root) {
    if (!root) return [];
    const result = [];
    const q = [root];
    let isOdd = true;

    while (q.length) {
        const curLevel = [];
        let levelLength = q.length;
        while (levelLength > 0) {
            const cur = q.shift();

            if (isOdd) {
                curLevel.push(cur.value);
            } else {
                curLevel.unshift(cur.value);
            }

            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)

            levelLength--;
        }
        result.push(curLevel);
        isOdd = !isOdd;
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


module.exports = { binary_tree_zigzag_traversal, TreeNode }