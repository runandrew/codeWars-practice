"use strict";
// Vowell count
let getCount = function(str) {
    return (str.match(/[aeiou]/gi) || []).length;
};

console.log(getCount('dg'));
