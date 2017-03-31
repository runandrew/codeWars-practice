// Counting duplicates

const duplicateCount = (text) => {
  const firstOcc = new Set();
  const secondOrMoreOcc = new Set();
  const textSplit = text.toLowerCase().split('');

  textSplit.forEach(letter => {
    if (firstOcc.has(letter)) secondOrMoreOcc.add(letter);
    else (firstOcc.add(letter));
  });

  return secondOrMoreOcc.size;
};
