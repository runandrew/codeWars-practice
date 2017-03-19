// Find the divisors

const divisors = (int) => {
  const valid = [];
  for (let i = 2; i <= Math.floor(int / 2); i++) {
    if (!(int % i)) valid.push(i);
  }
  return valid.length ? valid : `${int} is prime`;
};
