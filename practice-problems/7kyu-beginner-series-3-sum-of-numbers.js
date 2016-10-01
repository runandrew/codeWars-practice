// Beginner series #3 Sum of numbers

/*
Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
*/

function GetSum(a, b) {
  // if a, b are equal, then return a
  // if a > b, then swap a/b
  // loop from a to b
  // create a running sum total
  // return the total
  var total = 0;
  if (a === b) {
    return a;
  } else if (a > b) {
    var tempA = a;
    a = b;
    b = tempA;
  }
  for (var i = a; i <= b; i++) {
    total += i;
  }
  return total;
}

// Alternative
function GetSum(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
