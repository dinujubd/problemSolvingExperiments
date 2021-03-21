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


const find_cycle_start = function (head) {
    const lenOfCycle = find_cycle_length(head);
    let fast = head, slow = head;

    for(let i = 0; i<lenOfCycle; i++) {
        fast = fast.next;
    }
    
    while(slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}

module.exports = { Node, find_cycle_start }