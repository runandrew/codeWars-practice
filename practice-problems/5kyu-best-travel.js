// Best travel

// https://gist.github.com/axelpale/3118596

function chooseBestSum (maxMi, towns, dist) {
  const possibleCombs = findCombinations(towns, dist);
  if (possibleCombs.length === 0) return null;
  let maxComb = null;

  for (let i = 0; i < possibleCombs.length; i++) {
    let distance = possibleCombs[i].reduce((prev, next) => prev + next, 0);
    if (distance === maxMi) return distance;
    if (distance > maxComb && distance < maxMi) maxComb = distance;
  }
  return maxComb;
}

function findCombinations (size, list) {
  if (size === 1) {
    return list.map(el => [el]);
  }

  if (size > list.length) {
    return [];
  }

  if (size === list.length) {
    return [list];
  }

  const combs = [];
  for (let i = 0; i < list.length - size + 1; i++) {
    const held = list[i];

    const tailcombs = findCombinations(size - 1, list.slice(i + 1));

    tailcombs.forEach(tailcomb => combs.push([held, ...tailcomb]));
  }

  return combs;
}
