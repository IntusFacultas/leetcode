function longestCommonPrefix(strs: string[]): string {
    let prefixLength = 0;
    let endOfPrefixFound = false;
    while (!endOfPrefixFound) {
        if (strs.some(str => str.length <= prefixLength)) {
            endOfPrefixFound = true;
        } else if (strs.every(str => str[prefixLength] === strs[0][prefixLength])) {
            prefixLength++;
        } else {
            endOfPrefixFound = true;
        }
    }
    return strs[0].substring(0, prefixLength);
}

export { longestCommonPrefix };
