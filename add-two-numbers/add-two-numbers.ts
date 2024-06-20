import { ListNode } from './ListNode';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null || l2 === null) {
        return l1 ?? l2;
    }
    let current1: ListNode | null = l1;
    let current2: ListNode | null = l2;
    let currentOutputNode = new ListNode();
    const output = currentOutputNode;
    let carry = 0;
    while (current1 || current2) {
        const sum = (current1?.val ?? 0) + (current2?.val ?? 0) + carry;
        carry = Math.floor(sum / 10);
        currentOutputNode.val = sum % 10;
        current1 = current1?.next ?? null;
        current2 = current2?.next ?? null;
        /**
         * As long as another value is available, prepare the next node
         */
        if (current1 || current2 || carry) {
            currentOutputNode.next = new ListNode();
            currentOutputNode = currentOutputNode.next;
        }
    }
    if (carry) {
        currentOutputNode.val = carry;
    }
    return output;
}

export { addTwoNumbers };
