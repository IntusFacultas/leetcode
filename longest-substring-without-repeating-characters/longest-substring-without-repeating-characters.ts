function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let right = 0;
    let max = 0;
    const characterLocations = new Map<string, number>();
    while (right < s.length) {
        const char = s[right];
        // check if current window already has character, indicating a repeat
        if (characterLocations.has(char)) {
            // if so, set left to the right past the first instance of the repeated character
            left = Math.max(left, characterLocations.get(char)! + 1);
        }
        characterLocations.set(char, right);
        // max is the length of the current window, else the current max
        max = Math.max(right - left + 1, max);
        right++;
    }
    return max;
}

export { lengthOfLongestSubstring };
