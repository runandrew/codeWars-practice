// Merged string checker

// const isMerge = (str, part1, part2) => {
//     console.log(`str: ${str}, part1: ${part1}, part2: ${part2}`);
//     if (str.length === 0) return false;
//     const [strArr, part1Arr, part2Arr] = [str, part1, part2].map(str => str.split(''));
//
//     let part1Idx = 0;
//     let part2Idx = 0;
//     let strIdx = 0;
//     let foundFlagP1 = 1;
//     let foundFlagP2 = 1;
//     let prevFailed = 0;
//     let movement = 1;
//
//     debugger;
//
//     while (movement && prevFailed < 2 && strIdx <= strArr.length - 1 && (part1Idx <= part1Arr.length - 1 || part2Idx <= part2Arr.length - 1)) {
//         movement = 0;
//         while (foundFlagP1 && part1Idx <= part1Arr.length - 1) {
//             if (part1Arr[part1Idx] === strArr[strIdx]) {
//                 part1Idx++;
//                 strIdx++;
//                 foundFlagP1 = 1;
//                 prevFailed = 0;
//                 if (part1Idx > part1Arr.length - 1) {
//                     foundFlagP2 = 1;
//                     foundFlagP1 = 0;
//                     prevFailed = prevFailed ? 2 : 1;
//                 }
//                 movement++;
//             } else {
//                 foundFlagP1 = 0;
//                 foundFlagP2 = 1;
//                 prevFailed = prevFailed ? 2 : 1;
//             }
//         }
//
//        while (foundFlagP2 && part2Idx <= part2Arr.length - 1) {
//             if (part2Arr[part2Idx] === strArr[strIdx]) {
//                 part2Idx++;
//                 strIdx++;
//                 foundFlagP2 = 1;
//                 prevFailed = 0;
//                 if (part2Idx > part2Arr.length - 1) {
//                     foundFlagP1 = 1;
//                     foundFlagP2 = 0;
//                     prevFailed = prevFailed ? 2 : 1;
//                 }
//                 movement++;
//             } else {
//                 foundFlagP2 = 0;
//                 foundFlagP1 = 1;
//                 prevFailed = prevFailed ? 2 : 1;
//             }
//         }
//
//     }
//
//     return strIdx > strArr.length - 1 && part1Idx > part1Arr.length - 1 && part2Idx > part2Arr.length - 1;
// };


const isMerge = (str, part1, part2) => {
    console.log(`str: ${str}, part1: ${part1}, part2: ${part2}`);
    const [strArr, part1Arr, part2Arr] = [str, part1, part2].map(string => string.split(''));

    let part1Idx = 0;
    let part1ArrSize = part1Arr.length - 1;
    let part2Idx = 0;
    let part2ArrSize = part2Arr.length - 1;
    let strIdx = 0;
    let strArrSize = strArr.length - 1;
    let movement = 1;

    debugger;
    // switch between part1/2 if
    // there was movement on the last turn
    // strIdx < length - 1
    while (movement && strIdx <= strArrSize) {
        movement = 0;
        let totalMovement1, totalMovement2, part1IdxPot, part2IdxPot, strIdx1Pot, strIdx2Pot;

        [part1IdxPot, strIdx1Pot, totalMovement1] = partTester(part1Arr, part1ArrSize, part1Idx, strIdx);
        [part2IdxPot, strIdx2Pot, totalMovement2] = partTester(part2Arr, part2ArrSize, part2Idx, strIdx);

        movement = totalMovement1 + totalMovement2;
        if (movement) {
            if (totalMovement1 >= totalMovement2) {
                part1Idx++;
                strIdx++;
            } else {
                part2Idx++;
                strIdx++;
            }
        }
        // enter part1 if
            // part1 idx is not at over the length - 1
        // roll through the part1, end when either
            // at the end of string
            // doesn't find the next letter (but not at end of string)


    }


    function partTester(partArr, partArrSize, partIdx, strIdxRep) {
        let changed = 1;
        let totalMovement = 0;
        while (changed && partIdx <= partArrSize) {
            if (partArr[partIdx] === strArr[strIdxRep]) {
                strIdxRep++;
                partIdx++;
                totalMovement++;
            } else {
                changed = 0;
            }
        }
        return [partIdx, strIdxRep, totalMovement];
    }
    return strIdx > strArrSize && part1Idx > part1ArrSize && part2Idx > part2ArrSize;
};

// console.log(isMerge('codewars', 'code', 'wars'));
// console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(isMerge('codewars', 'code', 'war'));
// console.log(isMerge('codewars', 'code', 'wasr'));
// console.log(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'));
