// Did I finished my sudoku

function doneOrNot(board) {
    const falseReturn = 'Try again!';
    const trueReturn = 'Finished!';
    // check rows
    for (let i = 0; i < 9; i++) {
        if (!isRegionValid(board[i])) return falseReturn;
    }

    // check columns
    for (let col = 0; col < 9; col++) {
        const builtColumn = [];
        for (let row = 0; row < 9; row++) {
            builtColumn.push(board[row][col]);
        }
        if (!isRegionValid(builtColumn)) return falseReturn;
    }

    // check regions
    for (let row = 0; row <= 6; row += 3) {
        for (let col = 0; col <= 6; col += 3) {
            const builtRegion = regionBuilder([row, col], board);
            if (!isRegionValid(builtRegion)) return falseReturn;
        }
    }

    return trueReturn;
}

function isRegionValid(numArr) {
    const numSet = new Set();
    for (let i = 0; i < numArr.length; i++) {
        if (numSet.has(numArr[i])) return false;
        else numSet.add(numArr[i]);
    }

    return true;
}

function regionBuilder(topLeft, board) {
    const rowCoord = topLeft[0];
    const colCoord = topLeft[1];
    const builtColumn = [];
    for (let row = rowCoord; row <= rowCoord + 2; row++) {
        for (let col = colCoord; col <= colCoord + 2; col++) {
            builtColumn.push(board[row][col]);
        }
    }
    return builtColumn;
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]));
