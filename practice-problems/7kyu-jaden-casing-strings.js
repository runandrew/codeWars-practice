// Jayden Casing Strings

/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/

function toJadenCase(string) {
  // split the array up into separate words
  // loop through each word
  // split into separate letters
  // capitalize the first
  // reassemble word and set it to the array
  // put the array back together into a sentence

  sepWords = string.split(" ");
  for (var i = 0; i < sepWords.length; i++) {
    var sepLetters = sepWords[i].split("");
    sepLetters[0] = sepLetters[0].toUpperCase();
    sepWords[i] = sepLetters.join("");
  }
  return sepWords.join(" ");
}

// Alternative
String.prototype.toJadenCase = function () {
  return this.split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
