// Mumbling

function accum(s) {
  // initialize empty string
  // split string into separate letters
  // write a loop that goes through each letter
  // add the capital of the letter
  // inner loop - loop as many times as the first loops integer, each loop add the current lowercase letter

  var split = s.split("");
  var collect = [];

  for (var i = 0; i < split.length; i++) {
    var output = "";
    output += split[i].toUpperCase();
    for (var j = 0; j < i; j++) {
      output += split[i].toLowerCase();
    }
    collect.push(output);
  }
  return collect.join("-");
}
