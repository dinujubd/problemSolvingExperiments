const { reverse, Node } = require("../reverse")

describe('reverse: ', () => {
    const head = new Node(2);
    head.next = new Node(4);
    head.next.next = new Node(6);
    head.next.next.next = new Node(8);
    head.next.next.next.next = new Node(10);

    it('should reverse linked list properly', () => {
        expect(reverse(head).get_list()).toStrictEqual("10 8 6 4 2 ")
    });
});