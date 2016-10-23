// Sum all the arrays
var arraySum = function(arr) {
    if (!Array.isArray(arr[0]) && typeof arr[0] !== "number") {
        arr[0] = 0;
    }
    if (Array.isArray(arr[0])) {
        arr[0] = arraySum(arr[0]);
    }
    if (arr.length === 1) {
        return arr[0];
    }
    return arr.shift() + arraySum(arr);
};
