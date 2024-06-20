import { ListNode } from './ListNode';
import { addTwoNumbers } from './add-two-numbers';

describe(addTwoNumbers, () => {
    const constructList = (arr: number[]): ListNode | null => {
        if (arr.length === 0) {
            return null;
        }
        const list = new ListNode(arr[0]);
        let current = list;
        for (const num of arr.slice(1)) {
            current.next = new ListNode(num);
            current = current.next;
        }
        return list;
    };

    test('Example 1', () => {
        expect(addTwoNumbers(constructList([2, 4, 3]), constructList([5, 6, 4]))).toEqual(constructList([7, 0, 8]));
    });
    test('Example 2', () => {
        expect(addTwoNumbers(constructList([0]), constructList([0]))).toEqual(constructList([0]));
    });
    test('Example 3', () => {
        expect(addTwoNumbers(constructList([9, 9, 9, 9, 9, 9, 9]), constructList([9, 9, 9, 9]))).toEqual(
            constructList([8, 9, 9, 9, 0, 0, 0, 1])
        );
    });
});
