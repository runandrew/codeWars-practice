// Count by X

function countBy(x, n) {
  var z = [];

  for (var i = 1; i <= n; i++) { // create a loop that runs n times
    z[i - 1] = i*x; // for each loop add a number to an array of i*x
  }
  return z;// return the array
}

// Alternative solution
function countBy(x, n) {
  var z = [];
  for (var i = 1; i <= n; i++) {
    z.push(i*x);
  }
  return z;
}
