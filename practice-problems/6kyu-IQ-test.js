// IQ test

function iqTest(string) {
  // split the string into separate elements
  // convert the string into a number with parseInt
  // bin the numbers into an even and odd array
  // determine which has a size of 1, and find the index of that in the original array
  stringSplit = string.split(" ");
  var odd = [];
  var even = [];
  for (var i = 0; i < stringSplit.length; i++) {
    if (parseInt(stringSplit[i]) % 2 === 0) {
      even.push(stringSplit[i]);
    } else {
      odd.push(stringSplit[i]);
    }
  }
  if (even.length === 1) {
    return stringSplit.indexOf(even[0]) + 1;
  } else {
    return stringSplit.indexOf(odd[0]) + 1;
  }
}
