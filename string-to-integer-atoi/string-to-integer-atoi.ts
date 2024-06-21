function myAtoi(s: string): number {
    const int = parseInt(s.trim());
    if (isNaN(int)) {
        return 0;
    }
    if (int > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

    if (int < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }

    return int;
}

export { myAtoi };
