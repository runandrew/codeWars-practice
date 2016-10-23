// Sum squares of numbers in list that may contain more lists
var SumSquares = function(arr) {
    function square(base) {return Math.pow(base, 2);}
    var first;
    if (Array.isArray(arr[0])) {
        first = SumSquares(arr[0]);
    } else {
        first = square(arr[0]);
    }
    if (arr.length === 1) {
        return first;
    }
    return first + SumSquares(arr.slice(1));
};

// Using reduce
var SumSquares = function(arr) {
    return arr.reduce(function(prev, curr) {
        if (Array.isArray(curr)) {
            return prev + SumSquares(curr);
        }
        return prev + Math.pow(curr, 2);
    },0);
};
