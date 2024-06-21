import { isPalindrome } from './palindrome-number';

describe(isPalindrome, () => {
    it('should return true if the number is a palindrome', () => {
        expect(isPalindrome(121)).toBe(true);
        expect(isPalindrome(-121)).toBe(false);
        expect(isPalindrome(10)).toBe(false);
    });
});
