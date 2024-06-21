function isPalindrome(x: number): boolean {
    const stringified = String(x);
    return stringified === stringified.split('').reverse().join('');
}

export { isPalindrome };
