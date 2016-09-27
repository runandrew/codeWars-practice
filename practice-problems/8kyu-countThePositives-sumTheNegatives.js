// Count the positives and sum the negatives

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:
*/

function countPositivesSumNegatives(array) {

  // if array is empty, return empty
  if (array == [] || array == null || array == undefined || array == "") {
    return [];
  }

  var negSum = 0;
  var posCounter = 0;
  for (var i = 0; i < array.length; i++) {
    // if positive
    //  add 1 to counter
    if (array[i] > 0) {
      posCounter++;
    } else {
      // if negatives
      //  add to sum
      negSum += array[i];
    }
  }

  return [posCounter, negSum];
}

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

console.log(countPositivesSumNegatives(testData));
