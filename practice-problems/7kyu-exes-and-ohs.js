const XO = (string) => {
    const strArr = string.toLowerCase().split('');
    const letterBank = {};
    strArr.forEach(letter => {
        if (/[xo]/g.test(letter)) {
            if (letterBank[letter]) letterBank[letter]++;
            else letterBank[letter] = 1;
        }
    });

    if (letterBank.x === letterBank.o) return true;
    else return false;
};

const XO = (string) => {
    const x = string.match(/x/gi);
    const o = string.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
