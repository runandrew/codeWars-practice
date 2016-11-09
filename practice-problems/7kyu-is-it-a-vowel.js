// Is it a vowel?

String.prototype.vowel = function() {
    const regex = /^[aeiou]$/i;
    console.log(this);
    return regex.test(this);

};

console.log('a'.vowel());
