// Sort and Star

/*

You will be given an array (s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have '***' between each of its letters.

*/

function twoSort(array) {
  if (array === null || array === undefined) {
    return "no array given";
  }
  array = array.sort();
  var firstOfArray = "";
  for (var i = 0; i < array[0].length - 1; i++) {
    firstOfArray += array[0].charAt(i) + "***";
  }
  return firstOfArray += array[0].charAt(array[0].length - 1);
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);


function twoSortAlt(array) {
  array = array.sort();
  return array[0].split('').join('***');
}
