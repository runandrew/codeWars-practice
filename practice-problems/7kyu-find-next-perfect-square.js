// Find the next perfect square

const findNextSquare = (sq) => {
  // Return the next square if sq if a perfect square, -1 otherwise

  // Take the square value and evaluate if it's a perfect square
  // If not, return -1
  // If so, increment the value and return the square of it

  const root = Math.pow(sq, 0.5);
  if (Number.isInteger(root)) return Math.pow(root + 1, 2);
  else return -1;
}
