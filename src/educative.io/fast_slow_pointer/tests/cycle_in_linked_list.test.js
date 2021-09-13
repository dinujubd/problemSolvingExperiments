const { Node, has_cycle } = require('../cycle_in_linked_list');
it("Maximum Subarray Should Be Calcualted Properly", () => {
   head = new Node(1)
   head.next = new Node(2)
   head.next.next = new Node(3)
   head.next.next.next = new Node(4)
   head.next.next.next.next = new Node(5)
   head.next.next.next.next.next = new Node(6)
   expect(has_cycle(head)).toBeFalsy();

   head.next.next.next.next.next.next = head.next.next

   expect(has_cycle(head)).toBeTruthy();

   head.next.next.next.next.next.next = head.next.next.next

   expect(has_cycle(head)).toBeTruthy();
});