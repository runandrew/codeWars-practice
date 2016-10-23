// Tribonacci Sequence

function tribonacci(signature, n) {
  // if n <= 3, return the signature elements
  // create a loop of (n-3) runs, and sum the previous 3 numbers
  if (n <= 3) {
    return signature.slice(0, n);
  }

  for (var i = 3; i < n; i++) {
    signature.push(signature[i-1] + signature[i-2] + signature[i-3]);
  }
  return signature;
}

console.log(tribonacci([1,1,1],10));
