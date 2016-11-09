// Regex validate PIN code
"use strict";
let validatePIN = function(pin) {
    const regex = /^(\d{4}|\d{6})$/;
    return regex.test(pin);
};

console.log(validatePIN(1234567));
