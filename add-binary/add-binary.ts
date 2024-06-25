function addBinary(a: string, b: string): string {
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    let carry = 0;
    let output = '';
    while (aIndex >= 0 && bIndex >= 0) {
        if (a[aIndex] === b[bIndex] && a[aIndex] === '1') {
            if (carry === 1) {
                output = `1${output}`;
                carry = 1;
            } else {
                output = `0${output}`;
                carry = 1;
            }
        } else if (a[aIndex] === b[bIndex] && a[aIndex] === '0') {
            if (carry === 1) {
                output = `1${output}`;
                carry = 0;
            } else {
                output = `0${output}`;
            }
        } else if (a[aIndex] === '1' || b[bIndex] === '1') {
            if (carry === 1) {
                output = `0${output}`;
                carry = 1;
            } else {
                output = `1${output}`;
            }
        } else {
            if (carry === 1) {
                output = `1${output}`;
                carry = 0;
            } else {
                output = `0${output}`;
            }
        }
        aIndex--;
        bIndex--;
    }
    if (aIndex === bIndex && aIndex === 0) {
        if (carry === 1) {
            output = `1${output}`;
        }
        return output;
    }
    let maxIndex = Math.max(aIndex, bIndex);
    const maxString = aIndex > bIndex ? a : b;
    while (maxIndex >= 0) {
        if (maxString[maxIndex] === '1') {
            if (carry === 1) {
                output = `0${output}`;
                carry = 1;
            } else {
                output = `1${output}`;
            }
        } else if (maxString[maxIndex] === '0') {
            if (carry === 1) {
                output = `1${output}`;
                carry = 0;
            } else {
                output = `0${output}`;
            }
        }
        maxIndex--;
    }
    if (carry === 1) {
        output = `1${output}`;
    }
    return output;
}

export { addBinary };
