// Array diff

const array_diff = (a, b) => {
  // Make a hash of values in b
  const bSet = new Set(b);
  return a.filter(val => {
    return !bSet.has(val);
  });
};
