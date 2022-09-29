function palindromeLoop(str) {
    const newStr = str.toLowerCase().match(/[a-z0-9]/g).join('');
    const len = Math.floor(newStr.length / 2);
    
    for (let i = 0; i < len; i++)
        if (newStr[i] != newStr[newStr.length - i - 1])
            return false;
        
    return true;
}

function palindromeArray(str) {
    const newStr = str.toLowerCase().match(/[a-z0-9]/g);
    const reverseStr = newStr.slice().reverse();

    return newStr.join('') == reverseStr.join('');
}