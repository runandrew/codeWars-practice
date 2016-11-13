let ranks = function(arr) {
    arrCopy = arr.slice().sort(function(a, b) {
        return b - a;
    });
    let rank = 1;
    let rankObj = {};
    arrCopy.reduce(function(prev, curr, index) {
        if (prev !== curr) {
            rankObj[curr] = index + 1;
            rank = index + 1;
        } else {
            rankObj[curr] = rank;
        }
        return curr;
    }, arrCopy[0]);
    return arr.map(function(num) {
        return +rankObj[num];
    });
};

console.log(ranks([-1, 3, 3, 3, 5, 5]));
