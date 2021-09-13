const binary_tree_level_order = function (root) {
    if (!root) return root;
    const res = [];
    const q = [root];

    while (q.length) {
        let items = q.length;
        const tmp = [];
        while (items) {
            const cur = q.shift();
            tmp.push(cur.value);

            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)

            items--;
        }

        res.push(tmp)
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