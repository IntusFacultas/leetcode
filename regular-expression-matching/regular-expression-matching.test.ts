import { isMatch } from './regular-expression-matching';

describe(isMatch, () => {
    test('Example 1', () => {
        expect(isMatch('aa', 'a')).toBe(false);
    });
    test('Example 2', () => {
        expect(isMatch('aa', 'a*')).toBe(true);
    });
    test('Example 3', () => {
        expect(isMatch('ab', '.*')).toBe(true);
    });
    test('Example 4', () => {
        expect(isMatch('aab', 'c*a*b')).toBe(true);
    });
    test('Example 5', () => {
        expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false);
    });
    test('Example 6', () => {
        expect(isMatch('mississippi', 'mis*is*ip*.')).toBe(true);
    });
    test('Example 7', () => {
        expect(isMatch('aaa', 'a*a')).toBe(true);
    });
    test('Example 8', () => {
        expect(isMatch('abcd', 'd*')).toBe(false);
    });
    test('Example 9', () => {
        expect(isMatch('aaa', 'ab*a*c*a')).toBe(true);
    });
    test('Example 10', () => {
        expect(isMatch('ab', '.*c')).toBe(false);
    });
    test('Example 11', () => {
        expect(isMatch('a', 'ab*a')).toBe(false);
    });
    test('Example 12', () => {
        expect(isMatch('ab', '.*..')).toBe(true);
    });
});
