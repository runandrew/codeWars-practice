// You're a square

/*
You just have to check if your number of building blocks is a perfect square.
*/

var isSquare = function(n) {
  // if <=0, return false
  // if the square root has a remainder, return false
  // else, return true
  if (n < 0) {
    return false;
  } else if (n === 0) {
    return true;
  } else if (Math.sqrt(n) % Math.floor(Math.sqrt(n)) !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isSquare(0));


// Alternative
function isSquare(n) {
  return Math.square(n) % 1 === 0;
}
