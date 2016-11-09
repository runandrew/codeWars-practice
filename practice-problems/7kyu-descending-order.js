// Descending order
"use strict";

let descendingOrder = function(n) {
    return +n.toString().split("").sort().reverse().join("");
};
