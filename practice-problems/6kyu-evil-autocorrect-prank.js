// Evil autocorrect prank
"use strict";

let autocorrect = function(input) {
    let regex = /\b(you+|u)\b/gi;
    return input.replace(regex, "your sister");
};

function autocorrect(input){
  return input.replace(/\b(you+|u)\b/gi, "your sister");
}

console.log(autocorrect("utube!"));
