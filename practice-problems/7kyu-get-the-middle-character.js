// Get the middle character

/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(str) {
  // turn the word into individual characters
  // if odd, return the middle characters
  // if even, return the two middle
  strChars = str.split("");
  if (strChars.length % 2 !== 0) {
    return strChars[Math.ceil(strChars.length/2) - 1];
  } else {
    return strChars[strChars.length/2 - 1] + strChars[strChars.length/2];
  }
}
