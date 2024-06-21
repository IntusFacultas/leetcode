import { myAtoi } from './string-to-integer-atoi';

describe(myAtoi, () => {
    test('Example 1', () => {
        expect(myAtoi('42')).toBe(42);
    });
    test('Example 2', () => {
        expect(myAtoi('   -42')).toBe(-42);
    });
    test('Example 3', () => {
        expect(myAtoi('4193 with words')).toBe(4193);
    });
    test('Example 4', () => {
        expect(myAtoi('words and 987')).toBe(0);
    });
    test('Example 5', () => {
        expect(myAtoi('-91283472332')).toBe(-2147483648);
    });
});
