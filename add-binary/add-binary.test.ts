import { addBinary } from './add-binary';

describe(addBinary, () => {
    test('Example 1', () => {
        expect(addBinary('11', '1')).toBe('100');
    });

    test('Example 2', () => {
        expect(addBinary('1010', '1011')).toBe('10101');
    });
});
