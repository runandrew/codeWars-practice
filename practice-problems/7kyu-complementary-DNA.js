// Complementary DNA

function DNAStrand(dna) {
  // split the string into letters
  // create a new empty string for output
  // write logic for alternatives
  var dnaComp = "";
  var dnaSplit = dna.split("");
  for (var i = 0; i < dnaSplit.length; i++) {
    if (dnaSplit[i] === "A" || dnaSplit[i] === "T") {
      dnaComp += (dnaSplit[i] === "A" ? "T" : "A");
    } else {
      dnaComp += (dnaSplit[i] === "C" ? "G" : "C");
    }
  }
  return dnaComp;
}
