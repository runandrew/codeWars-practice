// Directions reduction

let dirReduc = (dirArr) => {
    const oppDirec = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST'
    };

    function spliceArray(arr, startIndex, count) {
        const newArray = [...arr];
        newArray.splice(startIndex, count);
        return newArray;
    }

    function findNextToken(arr, currentTokenIndex) {
        return arr[currentTokenIndex + 1];
    }

    function findCurrentToken(arr, currentTokenIndex) {
        return arr[currentTokenIndex];
    }

    let newDirArr = spliceArray(dirArr, 0, 0);
    // let currentTokenIndex = 0;

    // Recursive solution
    function dirArrReduc(currArr) {
        for (let index = 0; index < currArr.length; index++) {
            let currentToken = findCurrentToken(currArr, index);
            let nextToken = findNextToken(currArr, index);

            if (oppDirec[currentToken] === nextToken) {
                return dirArrReduc(spliceArray(currArr, index, 2));
            }
        }
        return currArr;
    }

    // O(1) space solution
    // while (newDirArr[currentTokenIndex] !== undefined) {
    //     let currentToken = findCurrentToken(newDirArr, currentTokenIndex);
    //     let nextToken = findNextToken(newDirArr, currentTokenIndex);
    //
    //     if (oppDirec[currentToken] === nextToken) {
    //         newDirArr = spliceArray(newDirArr, currentTokenIndex, 2);
    //         currentTokenIndex = 0;
    //     } else {
    //         currentTokenIndex++;
    //     }
    // }

    return dirArrReduc(newDirArr);
};


// Tests
console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));//, ['WEST'])
// dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST'])
// dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), [])
