import { isPalindrome } from './valid-palindrome';

describe(isPalindrome, () => {
    test('Example 1', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });
    test('Example 2', () => {
        expect(isPalindrome('race a car')).toBe(false);
    });
    test('Example 3', () => {
        expect(isPalindrome(' ')).toBe(true);
    });
});
