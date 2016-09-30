// Return Negative

// Alternative
function makeNegative(num) {
  // if number is greater than or equal to 0, make Negative
  // if number is less than 0, return the number
  return (num >= 0) ? -num : num;
}

// Alternative
function makeNegative(num) {
  return -Math.abs(num);
}
