// Build a pile of cubes

const findNb = (total) => {
    let sum = 0;
    let level = 1;

    function recBlocks(level, sum) {
        sum += Math.pow(level, 3);
        if (sum > total) return -1;
        else if (sum === total) return level;
        else return recBlocks(level + 1, sum);
    }

    return recBlocks(level, sum);
};
