function isPalindrome(s: string): boolean {
    const sanitized = s.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    if (!sanitized.length) {
        return true;
    }
    let left = 0;
    let right = sanitized.length - 1;
    while (left <= right) {
        if (sanitized[left] !== sanitized[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

export { isPalindrome };
