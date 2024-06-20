import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

describe(lengthOfLongestSubstring, () => {
    test('Example 1', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });
    test('Example 2', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });
    test('Example 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });
    test('Example 4', () => {
        expect(lengthOfLongestSubstring('dvdf')).toBe(3);
    });
});
