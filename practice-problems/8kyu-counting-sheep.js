// Counting Sheep

function countSheeps(array) {
  var howMany = 0;
  // loop through each element in the array
  for (i = 0; i < array.length; i++) {
      if (array[i] === true) { // if the value is equal to true, add one to a counter variable
        howMany++;
      }
  }
  // return counter variable
  return howMany;
}


// Alternative solution
