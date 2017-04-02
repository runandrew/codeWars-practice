// Title case

const titleCase = (title, minor) => {
  // Cache the minor words into a set
  if (!minor) minor = '';
  const minorArr = minor.toLowerCase().split(' ');
  const minorWords = new Set(minorArr);

  const titleArr = title.toLowerCase().split(' ');

  const titleArrTitleCase = titleArr.map((word, i) => {
    if (i === 0 || !minorWords.has(word)) return capitalizeWord(word);
    else return word;
  });

  return titleArrTitleCase.join(' ');
};

function capitalizeWord (word) {
  if (word.length < 1) return '';
  else return word[0].toUpperCase() + word.slice(1);
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
