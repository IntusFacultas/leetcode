import { findMedianSortedArrays } from './median-of-two-sorted-arrays';

describe(findMedianSortedArrays, () => {
    test('left empty, right odd', () => {
        expect(findMedianSortedArrays([], [2])).toBe(2.0);
    });
    test('left empty, right even', () => {
        expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
    });
    test('right empty, left even', () => {
        expect(findMedianSortedArrays([2], [])).toBe(2.0);
    });
    test('right empty, left odd', () => {
        expect(findMedianSortedArrays([2, 3], [])).toBe(2.5);
    });
    test('left contains only median', () => {
        expect(findMedianSortedArrays([2], [1, 3])).toBe(2.0);
    });
    test('serial computed median', () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    });
    test('interleaved computed median', () => {
        expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5);
    });
    test('left contains median', () => {
        expect(findMedianSortedArrays([1, 3, 5], [2, 4])).toBe(3.0);
    });
    test('right contains median', () => {
        expect(findMedianSortedArrays([1, 5], [2, 3, 4])).toBe(3.0);
    });
    test('left contained in right', () => {
        expect(findMedianSortedArrays([1, 2], [-1, 3])).toBe(1.5);
    });
    test('right contained in left', () => {
        expect(findMedianSortedArrays([-1, 3], [1, 2])).toBe(1.5);
    });
    test('encapsulation case', () => {
        expect(findMedianSortedArrays([1, 3, 5], [0, 6, 7, 8, 9])).toBe(5.5);
    });
});
