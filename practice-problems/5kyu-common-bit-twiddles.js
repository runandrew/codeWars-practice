// Common bit twiddles

function isEven(num) {
    return !getBit(num, 0);
}

function isOdd(num) {
    return getBit(num, 0);
}

function halfAndFloor(num) {
    return num >> 1;
}

function isPowerOfTwo(num) {
    return num & (num - 1);
}

function truncate(num) {
    return num | 0;
}

function abs(num) {
    const mask = 1 << 31;
    return (num ^ (num >> 31)) + (num >>> 31);
}

function nthPowerOfTwo(power) {
    return 1 << power;
}

function getBit(num, location) {
    const mask = 1 << location;
    const output = num & mask;
    return output > 0;
}

function toggleBit(num, location) {
    const mask = 1 << location;

}
