// Length of a vector

function vectorLength(vector) {
  // a^2 + b^2 = c^2
  var x1 = vector[0][0];
  var x2 = vector[1][0];
  var y1 = vector[0][1];
  var y2 = vector[1][1];

  return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
}


var vector = [[0,0], [1, 1]];
console.log(vectorLength(vector));
