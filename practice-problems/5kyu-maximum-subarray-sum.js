// Maximum subarray sum

const maxSequence = (arr) => {
    let maxOverall = 0;
    let maxCurrent = 0;

    for (let i = 0; i < arr.length; i++) {
        maxCurrent += arr[i];
        if (maxCurrent < 0) maxCurrent = 0;
        if (maxCurrent > maxOverall) maxOverall = maxCurrent;
    }
    return maxOverall;
};

const arr = [ -47,
  40,
  -5,
  37,
  -13,
  11,
  -40,
  -41,
  -35,
  32,
  -36,
  -48,
  -15,
  45,
  47,
  -14,
  -13,
  -27,
  14,
  -39,
  48,
  44 ];
console.log(maxSequence(arr));

// 45+47-14-13-27+14-39+48+44
