const findEvenIndex = (arr) => {

    // Establish sums
    let left = 0;
    let right = arr.reduce((prev, current) => prev + current, 0); // Right starts out as the sum of the whole array

    for (let i = 0; i < arr.length; i++) { // Go through each element and adjust left/right
        left += arr[i - 1] || 0;
        right -= arr[i];

        if (left === right) return i; // If they are equal, return the index
    }
    return -1; // If none are found, return -1
};
