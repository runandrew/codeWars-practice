// Double Char

function doubleChar(string) {
  // split the string into individual characters
  string = string.split("");
  // loop through each element and double the characters
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i] + string[i];
  }
  // join the array
  return string.join("");
}


// ALternative solution
function doubleCharAlt(string) {
  return string.replace(/(.)/g, "$1$1");
}
