// Give me a diamond

const diamond = (num) => {
  let output = '';
  if (!(num % 2) || num <= 0) return null;
  recDiamond(num, 1);
  function recDiamond (num, current) {
    output += makeStars(num, current);
    if (current === num) {
      return;
    } else {
      recDiamond(num, current + 2);
      output += makeStars(num, current);
      return;
    }
  }

  function makeStars (num, current) {
    let starStr = Array((num - current) / 2 + 1).join(' ') + Array(current + 1).join('*') + '\n';
    return starStr;
  }

  return output;
};

console.log(diamond(3));
 //   *
 //  ***
 // *****
 //  ***
 //   *
