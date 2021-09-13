const { find_cycle_start, Node } = require("../start_of_a_linked_list_cycle");

describe('find_cycle_start: ', () => {
    it('should find the starting of a linked list cycle', () => {
        const head = new Node(1)
        head.next = new Node(2)
        head.next.next = new Node(3)
        head.next.next.next = new Node(4)
        head.next.next.next.next = new Node(5)
        head.next.next.next.next.next = new Node(6)

        head.next.next.next.next.next.next = head.next.next
        expect(find_cycle_start(head).value).toBe(3)
        head.next.next.next.next.next.next = head.next.next.next
        expect(find_cycle_start(head).value).toBe(4)
        head.next.next.next.next.next.next = head;
        expect(find_cycle_start(head).value).toBe(1)  

    });
});