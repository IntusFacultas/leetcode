function twoSum(nums: number[], target: number) {
    const lookup: Record<number, number> = {};
    for (const index in nums) {
        const num = nums[index];
        if (typeof lookup[num] === 'number') {
            return [lookup[num], index];
        }
        lookup[target - num] = Number(index);
    }
}

export { twoSum };
