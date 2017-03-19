// Are they the same?

const comp = (arrA, arrB) => {
  // If the array sizes are diff, then return false
  if (!arrA || !arrB || arrA.length !== arrB.length) return false;

  // Hash the elements in arr b
  // Loop through each in arr a, then subtract from the hash every time
  // If trying to access and the value is 0, then return false

  const bHash = new Map();

  arrB.forEach(el => {
    if (bHash.has(el)) {
      let currCount = bHash.get(el);
      bHash.set(el, currCount + 1);
    } else {
      bHash.set(el, 1);
    }
  });


  for (let i = 0; i < arrA.length; i++) {
    let el = arrA[i];
    let square = el * el;

    if (bHash.get(el)) {
      let currCount = bHash.get(el);
      bHash.set(el, currCount - 1);
    } else {
      return false;
    }
  }

  return true;
}
