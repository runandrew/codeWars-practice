const decodeMorse = (code) => {
  // Separate the sentence into words
  const codeWords = code.trim().split('   ');

  // For each word, translate it
  return codeWords.map(word => translateMorseWord(word)).join(' ');
};

const translateMorseWord = (code) => {
  const codeLetters = code.split(' ');

  return codeLetters.map(letter => MORSE_CODE[letter]).join('');
}
