// String cleaning

function stringClean(string) {

  //var splitString = string.split(); // split string into individual letters with split()
  var notAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // see if individual letter matches a number
  for (var i = 0; i < notAllowed.length; i++) {
    // console.log(string.split(notAllowed[i]));
    string = string.split(notAllowed[i]).join("");
  }

  return string;
}

// var notAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
test = "123456789";
console.log(stringClean(test));
// console.log(test.split(notAllowed[2]).join(""));

function stringClean(string) {
  return string.replace(/[0-9]/g, "");
}
