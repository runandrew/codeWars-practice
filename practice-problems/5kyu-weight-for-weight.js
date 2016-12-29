
function orderWeight(str) {
    const arr = str.split(' ');
    const arrObj = arr.map(strEl => {
        return {
            num: strNumToSum(strEl),
            str: strEl
        };
    });

    return arrObj.sort(objectSort).map(obj => obj.str).join(' ');
}

function strNumToSum(strNum) {
    return strNum.split('').reduce((prev, next) => {
        return prev + +next;
    }, 0);
}

function objectSort(first, second) {
    if (first.num < second.num) return -1;
    if (first.num > second.num) return 1;
    if (first.str < second.str) return -1;
    if (first.str > second.str) return 1;
    return 0;
}

console.log(strNumToSum('109'));
console.log(orderWeight('103 123 4444 99 2000'));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
