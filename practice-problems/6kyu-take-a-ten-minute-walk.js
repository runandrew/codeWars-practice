// Take a ten minute walk

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
*/

function isValidWalk(string) {
  // see if the string is 10 letters long, if not - false
  // loop through the string
  // if n, add one to vertical
  // if s, subtract one from vertical
  // if w, add one to horizontal
  // if e, subtract one from horizontal
  // check if vertical and horizontal are both 0, if so - true
  if (string.length !== 10) {
    return false;
  }
  var vert = 0;
  var horiz = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "n") {
      vert++;
    } else if (string[i] === "s") {
      vert--;
    } else if (string[i] === "w") {
      horiz++;
    } else {
      horiz--;
    }
  }
  if (vert === 0 && horiz === 0) {
    return true;
  } else {
    return false;
  }
}
