class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const has_cycle = function (head) {
    let fastPointer = head.next;
    let slowPointer = head;

    while(fastPointer.next !== null) {
        if(fastPointer === slowPointer) {
            return true;
        }
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    return false
}

module.exports = {
    Node,
    has_cycle
}