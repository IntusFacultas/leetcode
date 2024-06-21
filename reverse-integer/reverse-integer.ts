function reverse(x: number): number {
    const reversed =
        x < 0
            ? parseInt(`-${String(x).substring(1).split('').reverse().join('')}`)
            : parseInt(String(x).split('').reverse().join(''));
    if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    return reversed;
}

export { reverse };
