// Duplicate Encoder

const duplicateEncode = function(word) {
    const letters = word.toLowerCase().split(''); // split the word into letters and lower the case
    const counterObj = {};
    letters.forEach((letter) => { // bin each letter in an object
        counterObj[letter] = counterObj[letter] ? counterObj[letter] + 1 : 1; // increase count each time
    });
    return letters.map((letter) => { // map the original letters array with the object
        if (counterObj[letter] > 1) { // if more than 1 count, replace with )
            return ')';
        } else {
            return '(';
        }
    }).join('');
};
