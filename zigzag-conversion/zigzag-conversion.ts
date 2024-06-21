function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }

    const rows = new Array(numRows).fill('');

    let currentRow = -1;
    let direction = 1;

    for (let index = 0; index < s.length; index++) {
        currentRow += direction;
        rows[currentRow] += s[index];

        if ((currentRow === numRows - 1 && direction === 1) || (currentRow === 0 && direction === -1)) {
            direction *= -1;
        }
    }

    return rows.join('');
}
export { convert };
