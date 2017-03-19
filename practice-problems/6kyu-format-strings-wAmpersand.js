// Format a string of names

const list = (names) => {
  names.map(nameObj => nameObj.name);

  const nonAmp = names.slice(0, -2);

  return nonAmp.map(name => name + ',').join(' ') + names.slice(-2).join(' & ');
}
