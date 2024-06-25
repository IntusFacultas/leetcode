import { threeSum } from './3sum';

describe(threeSum, () => {
    test('Example 1', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
            expect.arrayContaining([-1, -1, 2]),
            expect.arrayContaining([-1, 0, 1]),
        ]);
    });
    test('Example 2 ', () => {
        expect(threeSum([1, 2, -2, -1])).toStrictEqual([]);
    });
    test('Example 3 ', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toStrictEqual(
            expect.arrayContaining([
                expect.arrayContaining([-4, 0, 4]),
                expect.arrayContaining([-4, 1, 3]),
                expect.arrayContaining([-3, -1, 4]),
                expect.arrayContaining([-3, 0, 3]),
                expect.arrayContaining([-3, 1, 2]),
                expect.arrayContaining([-2, -1, 3]),
                expect.arrayContaining([-2, 0, 2]),
                expect.arrayContaining([-1, -1, 2]),
                expect.arrayContaining([-1, 0, 1]),
            ])
        );
    });
    test('Example 4', () => {
        expect(threeSum([-1, 0, 1, 0])).toStrictEqual([[-1, 0, 1]]);
    });
    test('Example 5', () => {
        expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
    });
});
