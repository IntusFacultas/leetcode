import { ListNode } from './ListNode';

function removeNthFromEnd(head: ListNode | null, nFromTheEnd: number): ListNode | null {
    if (!head) {
        return null;
    }
    const nodes = [];
    let current: ListNode | null = head!;
    while (current) {
        nodes.push(current);
        current = current.next;
    }
    const indexOfPreviousNode = nodes.length - nFromTheEnd - 1;
    const indexOfNodeToRemove = nodes.length - nFromTheEnd;
    if (indexOfPreviousNode < 0) {
        return head.next;
    }
    const previousNode = nodes[indexOfPreviousNode];
    const nodeToRemove = nodes[indexOfNodeToRemove];
    if (!nodeToRemove.next) {
        previousNode.next = null;
    } else {
        previousNode.next = nodeToRemove.next;
    }
    return head;
}

export { removeNthFromEnd };
