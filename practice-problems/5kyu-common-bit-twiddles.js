// Common bit twiddles

function isEven(num) {

}

function getBit(num, location) {
    const mask = 1 << location;
    const output = num & mask;
    console.log(`output: ${output}, mask: ${mask}`);
    return output > 0;
}
