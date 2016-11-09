// The old switcheroo
"use strict";

// let vowel2index = function(str) {
//     const splitArr = str.split("");
//     console.log(splitArr);
//     const regex = /[aeiou]/i;
//     let regexedArr = splitArr.map(function(letter, index) {
//         if (regex.test(letter)) {
//             return index + 1;
//         } else {
//             return letter;
//         }
//     });
//     return regexedArr.join("");
//     // let match;
//     // while((match = regex.exec(str)) !== null) {
//     //     console.log(match.index);
//     //     str[match.index] = match.index;
//     // }
//     //return str;
// };

let vowel2index = function(str) {
    return str.replace(/[aeiou]/gi, function(match, index) {return index + 1});
}

console.log(vowel2index("Tomorrow is going to be raining"));
//vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
