// Replace with alphabet position

const alphabetPosition = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lookup = {};
  alphabet.split('').forEach((letter, i) => {
    lookup[letter] = i + 1;
  });

  const converted = [];
  text.toLowerCase().split('').forEach(token => {
    if (lookup[token]) converted.push(lookup[token]);
  });

  return converted.join(' ');
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
