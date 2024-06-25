type ThreeSumArray = [number, number, number];
type TwoSumArray = [number, number];

const setOrCreate = (memo: Map<number, Set<number>>, num: number, num2: number): void => {
    if (!memo.has(num)) {
        memo.set(num, new Set([num2]));
    } else {
        memo.get(num)!.add(num2);
    }
};

const find2Sum = (
    availableNums: Set<number>,
    target: number,
    memoized2Sums: Map<number, Set<number>>,
    indexMap: Map<number, Set<number>>
): TwoSumArray[] => {
    const required2SumTarget = Array.from(availableNums.values()).reduce((targetMap, cur) => {
        targetMap.set(cur, target - cur);
        return targetMap;
    }, new Map<number, number>());
    const result: TwoSumArray[] = [];
    for (const num of availableNums.values()) {
        if (
            /**
             * If we require a number that isn't even present, then the current number can never achieve the 2 sum needed
             */
            !availableNums.has(required2SumTarget.get(num)!) ||
            /**
             * Reduce iterations by not having to re-calculate the inverse. So if we have 1,2,3, with target 4, we already hit (1,3) on index 0,
             * why bother asking if (3,1) exists. Additionally, if we previously already generated this 2 sum (accounting for the additional pair of
             * 2 sums functionally generated by the external 3 sum) we can skip it.)
             */
            (memoized2Sums.has(num) && memoized2Sums.get(num)!.has(required2SumTarget.get(num)!)) ||
            /**
             * handle special case where the required num to sum to the current num is itself since we cannot get a 2 sum
             * that satisfies the external 3 sum requirements where target is itself and another instance doesn't exist.
             * Ergo if target = 0, nums = 0, 1,-1, and num = 0 we cannot say (0,0) is a valid 2sum since we don't have another 0 in the array
             */
            (num === required2SumTarget.get(num) && indexMap.get(num)!.size < 2) ||
            /**
             * Likewise, even if there *are* 2 instances that would generate a valid 2sum, if the target matches the current num, then we cannot
             * consume both instances of the number since the target is going to be used for the 3 sum (only really possible with 0 as the target)
             *
             * So we need to guard against (0,0,0) coming out of something like (-1,0,1,0)
             */
            (num === target && target === 0 && indexMap.get(num)!.size < 3) ||
            /**
             * Handle special case where the needed element to achieve a two sum is the inverse of the target and
             * only one instance exists, since that instance is actually claimed by the greater 3 sum array that will be
             * constructed from this 2 sum array.
             */
            ((num === -target || required2SumTarget.get(num) === -target) && indexMap.get(-target)!.size === 1)
        ) {
            continue;
        }

        result.push([num, required2SumTarget.get(num)!]);
        /**
         * Memoize the permutations of the 2sum for this 3sum so that we do not accidentally generate duplicate 2sums
         * for the additional 2 sums computable from the 3 sum.
         *
         * e.g. if we generated the following 2 sums for num = 2
         *
         * - (-1,-1)
         * - (-2, 0)
         *
         * then additionally we also have effectively generated
         *
         * - (2, -1)
         * - (2, -2)
         * - (2, 0)
         *
         * Since those 2 sums would appear in other permutations of 2sum when passing the 2, -1, -2, or 0.
         */
        setOrCreate(memoized2Sums, required2SumTarget.get(num)!, -target);
        setOrCreate(memoized2Sums, num, -target);
        setOrCreate(memoized2Sums, -target, required2SumTarget.get(num)!);
        setOrCreate(memoized2Sums, -target, num);
        setOrCreate(memoized2Sums, num, required2SumTarget.get(num)!);
        setOrCreate(memoized2Sums, required2SumTarget.get(num)!, num);
    }
    return result;
};
function threeSum(nums: number[]): number[][] {
    /**
     * Collect the indices of each number, since we will be using the set of numbers where possible to reduce iteration time
     */
    const indexMap = nums.reduce((acc, cur, index) => {
        setOrCreate(acc, cur, index);
        return acc;
    }, new Map<number, Set<number>>());
    /**
     * Sort the numbers because once we begin iterating over theme, we can shortcircuit based on whet
     */
    const uniqueNumbers = new Set(nums);
    const sums: ThreeSumArray[] = [];
    const memoized2Sums = new Map<number, Set<number>>();
    /**
     * Reduce operations by iterating only over unique numbers
     */
    for (const num of uniqueNumbers) {
        // Find the 2 sums that cumulatively add up to the inverse of the current number, so we can add the current number
        // and achieve 0
        const twoSumsForInversedNum = find2Sum(uniqueNumbers, -num, memoized2Sums, indexMap);

        // if no valid 2 sums were found, then we can skip some execution steps
        if (!twoSumsForInversedNum.length) {
            continue;
        }

        /**
         * Rather than a .map, we do a `.push` on `.forEach` to mutate the arrays in place, adding the target num to the
         * end for O(1) insertion.
         */
        twoSumsForInversedNum.forEach(twosum => twosum.push(num));
        sums.push(...(twoSumsForInversedNum as unknown as ThreeSumArray[]));
    }

    return sums;
}

export { threeSum };
