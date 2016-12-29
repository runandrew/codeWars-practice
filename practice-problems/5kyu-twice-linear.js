// Twice linear

const dblLinear = (index) => {
    let u = [1];
    const currentNums = new Set();
    currentNums.add(1);
    for (let i = 0; i < index; i++) {
        let yPot = y(u[i]);
        let zPot = z(u[i]);

        if (!currentNums.has(yPot)) {
            currentNums.add(yPot);
            insert(u, yPot, diff);
        } // insert
        if (!currentNums.has(zPot)) {
            currentNums.add(zPot);
            insert(u, zPot, diff);
        } // insert

    }
    return u[index];
};

function y(num) {
    return 2 * num + 1;
}

function z(num) {
    return 3 * num + 1;
}

function binarySearch(arr, el, compareFn) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = (min + max) >> 1;
        let cmp = compareFn(el, arr[mid]);

        if (cmp > 0) min = mid + 1; // Value is less than midpoint
        else if (cmp < 0) max = mid - 1; // Value is greater than midpoint
        else return mid; // Value is equal to midpoint
    }

    return -max - 1; // If none found, then send the negative of the insertion point
}

function diff(toBeFound, currentArrEl) {
    return toBeFound - currentArrEl;
}

function insert(arr, el, compareFn) {
    let location = -binarySearch(arr, el, compareFn);
    arr.splice(location, 0, el);
    return arr;
}

console.log(dblLinear(100));

// const output = [];
// for (let j = 0; j <= ; j++) {
//     let valueToPush = dblLinear(j);
//     output.push(valueToPush);
//     console.log(`j = ${j}, pushed: ${valueToPush}`);
// }
// console.log(output);
