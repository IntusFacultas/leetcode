import { longestPalindrome } from './longest-palindromic-substring';

describe(longestPalindrome, () => {
    test('Example 1', () => {
        expect(longestPalindrome('babad')).toBe('bab');
    });
    test('Example 2', () => {
        expect(longestPalindrome('cbbd')).toBe('bb');
    });
    test('Example 3', () => {
        expect(longestPalindrome('aaaa')).toBe('aaaa');
    });
    test('Example 4', () => {
        expect(longestPalindrome('aaaaa')).toBe('aaaaa');
    });
    test('Example 5', () => {
        expect(longestPalindrome('baaaaab')).toBe('baaaaab');
    });
    test('Example 6', () => {
        expect(longestPalindrome('abaaaaab')).toBe('baaaaab');
    });
    test('Example 7', () => {
        expect(
            longestPalindrome(
                'vckpzcfezppubykyxvwhbwvgezvannjnnxgaqvesrhdsgngcbbdpqeodzmqbkrwekakrukwxhqjeacxhkixruwshgwkjthmtqumvqcvhhoavarlwhpzbbniqrswvyhtfquioooejsbnxdnjrfhzpdrljcuenzjpzkyrgpxrbtchnzmdkekhmuqpoljvrpndzmogeuxjotdsyrrudligpgwcblaimqdqsgmjrbvyonugzsbkdhawmewiaccuvfnpftcjdjuljekiaipknorknwyx'
            )
        ).toStrictEqual('nnjnn');
    });
});
