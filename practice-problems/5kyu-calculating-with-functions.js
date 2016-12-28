// Calculating with functions


// seven(times(five())
// five() => 5;
// times(5) => function(7) { return 7 * 5 }

const numberLogic = (num) => {
    return (operation) => {
        if (operation) {
            return operation(num);
        } else {
            return num;
        }
    };
};

// Numbers
const zero = numberLogic(0);
const one = numberLogic(1);
const two = numberLogic(2);
const three = numberLogic(3);
const four = numberLogic(4);
const five = numberLogic(5);
const six = numberLogic(6);
const seven = numberLogic(7);
const eight = numberLogic(8);
const nine = numberLogic(9);

// Operations
const plus = (rightOp) => {
    return (leftOp) => {
        return leftOp + rightOp;
    };
};

const minus = (rightOp) => {
    return (leftOp) => {
        return leftOp - rightOp;
    };
};

const times = (rightOp) => {
    return (leftOp) => {
        return leftOp * rightOp;
    };
};

const dividedBy = (rightOp) => {
    return (leftOp) => {
        return leftOp / rightOp;
    };
};

console.log(one(plus(two())));
