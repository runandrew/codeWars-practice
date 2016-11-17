// Your order, please
"use strict";

const order = (words) => {
    if (words === "") {
        return "";
    }
    const wordsArr = words.split(" ");
    const regex = /\d/;
    const outputArr = [];
    wordsArr.forEach((word) => {
        let location = word.match(regex);
        outputArr[location - 1] = word;
    });
    return outputArr.join(" ");
};
