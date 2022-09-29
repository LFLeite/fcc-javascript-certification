function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let stringBuilder = '';

    for (let i =0; i < str.length; i++) {
        let char = str[i];

        if (alphabet.includes(char)) {
            const charIndex = alphabet.findIndex((c) => c == char);

            char = alphabet[charIndex+13] || alphabet[charIndex-13];
        }

        stringBuilder += char;
    }
    
    return stringBuilder;
}