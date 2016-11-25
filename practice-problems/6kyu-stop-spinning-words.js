function spinWords(str) {
    const words = str.split(' ');
    return words.map((word) => {
        if (word.length > 4) {
            return word.split('').reverse().join('');
        } else {
            return word;
        }
    }).join(' ');
}
