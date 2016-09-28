// Convert number to reveresed array of digits

function digitize(n) {
  // convert number to a string
  // split the string into separate elements
  // reverse the order of elements
  // return array

  var strN = n.toString();
  var strNSplit = strN.split("");
  var nRev = [];
  for (var i = 0; i < strNSplit.length; i++) {
    nRev[i] = parseInt(strNSplit[strNSplit.length - 1 - i]);
  }
  return nRev;
}

console.log(digitize(35231));


// Alternative solution
function digitize(n) {
  return (n + '').split('').map(Number).reverse();
}
