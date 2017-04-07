// Simple Encryption #1 - Alternating Split

const encrypt = (text, n) => {
  let output = text;
  for (let i = 0; i < n; i++) {
    output = shuffle(output);
  }

  return output;
};

const decrypt = (text, n) => {
  let output = text;
  for (let i = 0; i < n; i++) {
    output = unshuffle(output);
  }

  return output;
};

function shuffle (text) {
  const front = [];
  const back = [];

  if (!text) return text;

  for (let i = 0; i < text.length; i++) {
    const nextChar = text.charAt(i);
    if (i % 2) front.push(nextChar);
    else back.push(nextChar);
  }

  return [...front, ...back].join('');
}

function unshuffle (text) {
  const midPoint = text && text.length && (text.length >> 1);
  let leftPoint = 0;
  let rightPoint = midPoint;
  const output = [];
  while (rightPoint <= text.length) {
    output.push(text.charAt(rightPoint));
    if (leftPoint < midPoint) output.push(text.charAt(leftPoint));

    leftPoint++;
    rightPoint++;
  }

  return output.join('');
}

console.log(encrypt('1234567', 1));
console.log(decrypt(encrypt('1234567', 1), 1));
