// Next bigger number with the same digits

function nextBigger(n) {
    debugger;
    const numStrArray = n.toString().split('');
    let switchPoint = -1;
    let switchPointNum;

    // Mark point where number is lower
    for (let i = numStrArray.length - 2; i >= 0; i--) {
        let a = numStrArray[i];
        let b = numStrArray[i + 1];
        if (!isBigger(a, b)) {
            switchPoint = i;
            switchPointNum = a;
            break;
        }
    }

    if (switchPoint === -1) return -1;

    // Find points that are higher than the switchPoint's number
    const arrAfterSwitch = numStrArray.slice(switchPoint + 1);
    const numsAboveSwitch = arrAfterSwitch.filter(strNum => isBigger(strNum, switchPointNum) && strNum !== switchPointNum).sort(sortAsc);

    // Find the lowest of those points and place it at the switchPoint's index
    const numToReplaceSwitchPoint = numsAboveSwitch.shift();
    const indexOfNumToReplaceSwitchPoint = arrAfterSwitch.indexOf(numToReplaceSwitchPoint);
    // Take out the number to replace the switchpoint from the rest of the array
    arrAfterSwitch.splice(indexOfNumToReplaceSwitchPoint, 1);
    // add the switchPoint num to the numsAboveSwitch array
    arrAfterSwitch.push(switchPointNum);

    // Sort the rest of the numbers in ascending order
    const sortedNumsAfterSwitch = arrAfterSwitch.sort(sortAsc);

    // // swap switchPoint with the next num
    // const numsToBeSwapped = numStrArray.slice(switchPoint, switchPoint + 2);
    // const numStrArraySwapped = [...numStrArray];
    // numStrArraySwapped.splice(switchPoint, 2, numsToBeSwapped[1], numsToBeSwapped[0]);
    //
    // const subArrayToBeSorted = numStrArraySwapped.slice(switchPoint + 1);
    // const subArraySorted = subArrayToBeSorted.sort(sortAsc);
    const finalArray = [...numStrArray.slice(0, switchPoint), numToReplaceSwitchPoint, ...sortedNumsAfterSwitch];
    return Number(finalArray.join(''));
}

function isBigger(a, b) {
    return +a >= +b;
}

function sortAsc(a, b) {
    return +a - +b;
}
