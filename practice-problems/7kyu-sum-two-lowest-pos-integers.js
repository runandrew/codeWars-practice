// Sum of the two smallest numbers

const sumTwoSmallestNumbers = (numsArr) => {
  const filteredArr = numsArr.filter(num => {
    return num >= 0;
  });

  const sortedArr = filteredArr.sort((a, b) => {
    return a - b;
  });

  if (sortedArr.length >= 2) {
    return sortedArr[0] + sortedArr[1];
  } else {
    return null;
  }
}

