// Bit counting

const countBits = (num) => {
  const bin = num.toString(2);

  return bin.split('').reduce((prev, curr) => prev + +curr, 0);
};
