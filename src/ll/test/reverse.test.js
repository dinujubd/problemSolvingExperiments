const { Node, reverse } = require('../reverse')

describe("reverse: ", ()=> {
    it("should reverse the provided linked list", () => {
        const head = new Node(2);
        head.next = new Node(4);
        head.next.next = new Node(6);
        head.next.next.next = new Node(8);
        head.next.next.next.next = new Node(10);
        head.next.next.next.next.next = new Node(12);

        const rev = new Node(12);
        rev.next = new Node(10);
        rev.next.next = new Node(8);
        rev.next.next.next = new Node(6);
        rev.next.next.next.next = new Node(4);
        rev.next.next.next.next.next = new Node(2);
        
        expect(reverse(head)).toStrictEqual(rev);
    });
})