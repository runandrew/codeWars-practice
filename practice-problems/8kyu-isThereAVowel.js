// Is there a vowel in there?

function isVow(array) {

  var vowels = ["a", "e", "i", "o", "u"]; // test each vowel
  for (var j = 0; j < vowels.length; j++) {
    strVow = vowels[j];
    for (var i = 0; i < array.length; i++) { // loop through the array of numbers
      if (array[i] === strVow.charCodeAt(0)) { // evaluate if the number is equal to the unicode for a vowel - a e i o u
        array[i] = strVow; // if so change that value to the string of the vowel
      }
    }
  }
  return array;
}

strA = "a";
console.log(strA.charCodeAt());
console.log(isVow([97]));


function isVowAlt(array) {
  for (var i = 0; i < array.length; i++) {
    var char = String.fromCharCode(array[i]);
    if ('aeiou'.indexOf(char) !== -1) {
      array[i] = char;
    }
  }
}
