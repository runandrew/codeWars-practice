// Grasshopper - Summation

/*
Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.
*/

var summation = function(num) {
  // initialize total variable
  // loop through each
  // add to total variable

  var total = 0;
  for (var i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}
