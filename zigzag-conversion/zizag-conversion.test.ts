import { convert } from './zigzag-conversion';

describe(convert, () => {
    test('Example 1', () => {
        expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    });
    test('Example 2', () => {
        expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    });
    test('Example 3', () => {
        expect(convert('A', 1)).toBe('A');
    });
});
