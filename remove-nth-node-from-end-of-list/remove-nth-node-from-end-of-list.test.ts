import { ListNode } from './ListNode';
import { removeNthFromEnd } from './remove-nth-node-from-end-of-list';

describe(removeNthFromEnd, () => {
    test('Example 1', () => {
        const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        let result = removeNthFromEnd(list, 2);
        let index = 0;
        const expected = [1, 2, 3, 5];
        while (result) {
            expect(result.val).toEqual(expected[index++]);
            result = result.next;
        }
    });
    test('Example 2', () => {
        let result = removeNthFromEnd(new ListNode(1, new ListNode(2)), 1);
        let index = 0;
        const expected = [1];
        while (result) {
            expect(result.val).toEqual(expected[index++]);
            result = result.next;
        }
    });
});
