class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    get_list() {
        let result = "";
        let temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        return result;
    }
};

// Step 1: hold the next item
// Step 2: Move current next to prev
// Step 3: Move prev to cur
// Step 4: Move cur to next
// Run until something in cur


const reverse = function (head) {
    let prev = null;
    let cur = head;

    while(cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
};

module.exports = {
    reverse,
    Node
};