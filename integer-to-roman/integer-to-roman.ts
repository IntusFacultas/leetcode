function intToRoman(num: number): string {
    const stack: string[] = [];
    const buckets = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const DUPLICATABLE_BUCKETS = new Set([1, 10, 100, 1000]);
    const ROMAN_CHARACTERS: Record<number, string> = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    };
    let currentBucket = buckets.pop()!;
    while (num) {
        if (num >= currentBucket && DUPLICATABLE_BUCKETS.has(currentBucket)) {
            num -= currentBucket;
            stack.push(ROMAN_CHARACTERS[currentBucket]);
        } else if (num >= currentBucket) {
            num -= currentBucket;
            stack.push(ROMAN_CHARACTERS[currentBucket]);
            currentBucket = buckets.pop()!;
        } else {
            currentBucket = buckets.pop()!;
        }
    }
    return stack.join('');
}

export { intToRoman };
