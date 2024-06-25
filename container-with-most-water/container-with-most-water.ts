function maxArea(height: number[]): number {
    if (height.length === 2) {
        return Math.min(height[0], height[1]);
    }
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left !== right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}

export { maxArea };
