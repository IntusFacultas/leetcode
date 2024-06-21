/**
 * Credit to https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2471/Very-concise-O(log(min(MN)))-iterative-solution-with-detailed-explanation
 * for explaining the intuition behind this solution.
 *
 * The intuition to consider is that the median of a sorted array guarantees that all values in the lower half are less
 * than all values in the upper half. So we can use binary search to find the median by attempting a cut in both arrays
 * that bisects the values in the two arrays, and then verifying that the values bisected result in the property of the median.
 *
 * The use of the doubling of the lengths is the main intuition that I still don't fully grasp. I understand that the reasoning for it
 * is that the median's relationship to the introduced "imaginary positions" is the same as the median's relationship to the actual
 * values in the array, and I understand that by introducing the imaginary positions, you are able to coerce all arrays of even or odd length
 * into arrays of even length since the imaginary positions convert an array of N length to 2N + 1 length, which is odd, and since we have two
 * arrays, you end up with 2N + 1 + 2M + 1 = 2N + 2M + 2 length which is guaranteed to be even. However the conversion of the imaginary positions into actual
 * valid indexes eludes me still.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]) {
    if (nums1.length < nums2.length) {
        /**
         * Code is easier if we require the array passed to nums2 to be shorter, since we don't have to check for out of bounds
         * exceptions
         */
        return findMedianSortedArrays(nums2, nums1);
    }

    let lowerPointer = 0;
    let higherPointer = nums2.length * 2;
    while (lowerPointer <= higherPointer) {
        const cutPosition2 = Math.floor((lowerPointer + higherPointer) / 2);
        const cutPosition1 = nums1.length + nums2.length - cutPosition2;

        /**
         * We guard against invalid cuts by leveraging negative and positive infinity to indicate an effectively empty array
         */
        const lowerValueOfMedian1 =
            cutPosition1 == 0 ? Number.NEGATIVE_INFINITY : nums1[Math.floor((cutPosition1 - 1) / 2)];
        const lowerValueOfMedian2 =
            cutPosition2 == 0 ? Number.NEGATIVE_INFINITY : nums2[Math.floor((cutPosition2 - 1) / 2)];
        const upperValueOfMedian1 =
            cutPosition1 == nums1.length * 2 ? Number.POSITIVE_INFINITY : nums1[Math.floor(cutPosition1 / 2)];
        const upperValueOfMedian2 =
            cutPosition2 == nums2.length * 2 ? Number.POSITIVE_INFINITY : nums2[Math.floor(cutPosition2 / 2)];

        /**
         * First array's lower half is too big; need to move cut position 1 to the left however cut position 1 is
         * computed from cut position 2 so we need to move cut position 2 to the right in order to move cut position 1 to the left
         **/
        if (lowerValueOfMedian1 > upperValueOfMedian2) {
            lowerPointer = cutPosition2 + 1;
        } else if (lowerValueOfMedian2 > upperValueOfMedian1) {
            /**
             * Second array's lower half is too alrge, so we need to move cut position 2 to the left
             */
            higherPointer = cutPosition2 - 1; // A2's lower half too big; need to move C2 left.
        } else
        /**
         * We've found the cut point where all values in the lower half are less than all values in the upper half,
         * so we can compute the median directly
         */
            return (
                (Math.max(lowerValueOfMedian1, lowerValueOfMedian2) +
                    Math.min(upperValueOfMedian1, upperValueOfMedian2)) /
                2
            );
    }
    return -1;
}

export { findMedianSortedArrays };
