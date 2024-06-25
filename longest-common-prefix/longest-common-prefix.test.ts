import { longestCommonPrefix } from './longest-common-prefix';

describe(longestCommonPrefix, () => {
    test('Example 1', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    });
    test('Example 2', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    });
    test('Example 3', () => {
        expect(longestCommonPrefix(['ab', 'a'])).toBe('a');
    });
});
