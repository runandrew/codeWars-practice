// Facts
// Dot - 1 time unit - 1
// Dash - 3 time units - 1
// Pause for dots - 1 time - 0
// Pause for letters - 3 time - 0
// Pause for words - 7 time - 0

// Parse the string into sets of 1's
// If the string length isn't divisible by 3, found the time unit
//   If not, found possible length
// If found a different length than what's already there, the lower is the time unit

const decodeBits = (bits) => {
  console.log(bits);

  const reg = /^0+|0+$/g;
  const cleanBits = bits.replace(reg, ''); // Trimmed from lead/trailing 0's
  const timeUnit = findTimeInt(cleanBits);

  const spaces = regexBuilder(0, 7, timeUnit, 'g');
  const charSep = regexBuilder(0, 3, timeUnit, 'g');
  const dotSep = regexBuilder(0, 1, timeUnit, 'g');
  const dash = regexBuilder(1, 3, timeUnit, 'g');
  const dot = regexBuilder(1, 1, timeUnit, 'g');

  const output = cleanBits.replace(spaces, '   ')
  .replace(charSep, ' ')
  .replace(dash, '-')
  .replace(dot, '.')
  .replace(dotSep, '');

  console.log(output);

  return output;
};

const regexBuilder = (state, length, timeUnit, flags) => {
  return new RegExp(`${state}{${length * timeUnit}}`, flags);
};

const findTimeInt = (bits) => {
  const reg = /0+/;
  const bitsSplitOn = bits.split(reg);
  let potentialLength = null;
  let timeUnit = null;

  while (bitsSplitOn.length) {
    let token = bitsSplitOn.pop();
    let currLength = token.length;

    if (currLength % 3) {
      timeUnit = currLength;
      break;
    }

    if (!potentialLength) potentialLength = currLength;

    if (potentialLength !== currLength) {
      timeUnit = Math.min(potentialLength, currLength);
      break;
    }
  }

  if (!timeUnit) {
    const reg1 = /1+/;
    const bitsSplitOn1 = bits.split(reg1); // 0's

    while (bitsSplitOn1.length) {
      let token = bitsSplitOn1.pop();
      let currLength = token.length;
      if (!currLength) continue;

      if (currLength < potentialLength) {
        timeUnit = currLength;
      }
    }
  }

  return timeUnit || potentialLength;
};

const decodeMorse = (code) => {
  // Separate the sentence into words
  const codeWords = code.trim().split('   ');

  // For each word, translate it
  return codeWords.map(word => translateMorseWord(word)).join(' ');
};

const translateMorseWord = (code) => {
  const codeLetters = code.split(' ');

  return codeLetters.map(letter => MORSE_CODE[letter]).join('');
};
