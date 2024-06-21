function longestPalindrome(s: string): string {
    if (s.length === 1) {
        return s;
    }
    if (s.length === 2) {
        return s[0] === s[1] ? s : s[0];
    }
    let currentCenterIndex = 0;
    let leftBound = -1;
    let rightBound = 1;
    let currentLongestSubstring = s[currentCenterIndex];
    let currentConsideredSubstring = s[currentCenterIndex];
    while (currentCenterIndex < s.length) {
        if (s[rightBound] === s[currentCenterIndex] && s[leftBound] !== s[rightBound]) {
            // handle a case like abba where currentCenterIndex = 1, currentConsideredSubstring = 'b'
            // Greedily consume repeated letters
            /**
             * In cases of repeated letter substrings, we are greedily consume them and recenter our center index
             * to the middle of them.
             */
            const repeatedLetter = s[rightBound];
            const startIndex = rightBound;
            while (s[rightBound] === repeatedLetter && rightBound < s.length) {
                currentConsideredSubstring = `${currentConsideredSubstring}${s[rightBound]}`;
                rightBound++;
            }
            currentCenterIndex = Math.floor((startIndex + rightBound) / 2);
        }
        while (s[leftBound] === s[rightBound] && leftBound >= 0 && rightBound < s.length) {
            currentConsideredSubstring = `${s[leftBound]}${currentConsideredSubstring}${s[rightBound]}`;
            leftBound = Math.max(leftBound - 1, -1);
            rightBound = Math.min(rightBound + 1, s.length);
        }
        if (currentConsideredSubstring.length > currentLongestSubstring.length) {
            currentLongestSubstring = currentConsideredSubstring;
        }
        currentCenterIndex++;
        leftBound = currentCenterIndex - 1;
        rightBound = currentCenterIndex + 1;
        currentConsideredSubstring = s[currentCenterIndex];
    }
    return currentLongestSubstring;
}

export { longestPalindrome };
