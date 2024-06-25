import { romanToInt } from './roman-to-integer';

describe(romanToInt, () => {
    test('Example 1', () => {
        expect(romanToInt('III')).toBe(3);
    });
    test('Example 2', () => {
        expect(romanToInt('IV')).toBe(4);
    });
    test('Example 3', () => {
        expect(romanToInt('IX')).toBe(9);
    });
    test('Example 4', () => {
        expect(romanToInt('LVIII')).toBe(58);
    });
    test('Example 5', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });
});
