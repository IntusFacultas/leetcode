import { intToRoman } from './integer-to-roman';

describe(intToRoman, () => {
    test('Example 1', () => {
        expect(intToRoman(3)).toBe('III');
    });
    test('Example 2', () => {
        expect(intToRoman(4)).toBe('IV');
    });
    test('Example 3', () => {
        expect(intToRoman(9)).toBe('IX');
    });
    test('Example 4', () => {
        expect(intToRoman(58)).toBe('LVIII');
    });
    test('Example 5', () => {
        expect(intToRoman(1994)).toBe('MCMXCIV');
    });
    test('Example 6', () => {
        expect(intToRoman(3749)).toBe('MMMDCCXLIX');
    });
});
