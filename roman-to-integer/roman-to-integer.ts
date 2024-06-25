function romanToInt(s: string): number {
    const ROMAN_TO_INTEGER = new Map<string, number>([
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000],
    ]);

    let sum = 0;
    for (let index = 0; index < s.length; index++) {
        if (ROMAN_TO_INTEGER.has(s[index] + s[index + 1])) {
            sum += ROMAN_TO_INTEGER.get(s[index] + s[index + 1])!;
            index++;
        } else {
            sum += ROMAN_TO_INTEGER.get(s[index])!;
        }
    }
    return sum;
}

export { romanToInt };
