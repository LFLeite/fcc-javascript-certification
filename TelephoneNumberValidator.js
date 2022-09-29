function telephoneCheck(str) {
    const regexPatterns = [
        // no parentheses
        /^1? ?\d{3}[- ]?\d{3}[- ]?\d{4}$/,
        // with parentheses
        /^1? ?[(]\d{3}[)][- ]?\d{3}[- ]?\d{4}$/
    ]

    return regexPatterns.some((pattern) => pattern.test(str));
}