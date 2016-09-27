// Bin to Decimal

function binToDec(number) {
  // create a summing variable
  var total = 0;
  // split the array into individual numbers
  number = number.split("");
  // convert the string into a number
  for (var i = 0; i < number.length; i++) {
    total += parseInt(number[i]) * Math.pow(2, (number.length - 1 - i));
  }
  // multiply that number by the current base exponent and add to sum
  return total;
}

test = "1001001";

console.log(binToDec(test));


// Alternative solution
function binToDecAlt(number) {
  return parseInt(number, 2);
}
