// Is my friend cheating?

function removeNb(num) {
    // find the sum
    // loop through each number
    // calculate what the opposite number is
        // if it's between 1 and n, and isn't the current num, add those numbers

    const sum = (num * (num + 1)) / 2;
    const output = [];

    for (let a = 1; a <= num; a++) {
        let b = (sum - a) / (a + 1);
        if (Number.isInteger(b) && b >= 1 && b <= num && b !== a) output.push([a, b]);
    }

    return output;
}
