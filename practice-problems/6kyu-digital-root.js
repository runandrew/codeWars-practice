
const digital_root = (num) => {
    const numStr = '' + num; // Convert the current number into a string
    if (numStr.length < 2) return +num; // Base case, if the number is a single number, return that number
    return digital_root(numStr.split('').reduce((prev, curr) => prev + Number(curr), 0)); // If not, split the number and add up it's digits and run the function again
};
