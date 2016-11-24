// Hit Count

const counterEffect = function(hitCount) {
    return hitCount.split('').map((counter) => { // Split the string into elements, then map each element
        counter = +counter; // Cast the string as a number
        const array = []; // Start a new array to be pushed to for each count
        for (let i = 0; i <= counter; i++) { // Count from 0 to the number count
            array.push(i);
        }
        return array; // Return the 0-number array
    });
};
