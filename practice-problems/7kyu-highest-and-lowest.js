// Highest and Lowest

function highAndLow(str) {
  // split the string into separate elements
  // loop through each number and convert to number in a new array
  // take max and min
  // add those to a new array as substrings

  var strSplit = str.split(" ");
  for (var i = 0; i < strSplit.length; i++) {
    strSplit[i] = parseInt(strSplit[i]);
  }
  return Math.max.apply(null, strSplit).toString() + " " + Math.min.apply(null, strSplit).toString();
}

console.log(highAndLow("1 -1"));
