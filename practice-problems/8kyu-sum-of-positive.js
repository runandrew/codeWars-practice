// Sum of Positive

/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/

function positiveSum(array) {
  // Initiate a total sum variable
  // Loop through the array of numbers
  // If the number is positive, add to the running sum
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      total += array[i];
    }
  }
  return total;
}
