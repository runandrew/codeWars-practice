// Number of trailing zeos

// 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
//             5*5            5               5              5         5

const zeros = (num) => {
    let count = 0;
    for (let i = 5; num / i >= 1; i *= 5) {
        count += Math.floor(num / i);
    }

    return count;
};
