class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const find_cycle_length = function (head) {
    let fast = head.next, slow = head
    
    while(fast.next) {
        if(fast === slow) {
            break;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    let len = 1;
    
    while(true) {
        slow = slow.next;
        if(fast === slow) break;
        len++;
    }

    return len;
}

module.exports = { find_cycle_length, Node }