// Double cola

const whoIsNext = (names, total) => {
    const people = names.length;
    const nearestLowerLevel = Math.floor(Math.log2(total / people + 1) - 1);
    const peopleLowerLevel = nearestLowerLevel === -1 ? 0 : 5 * (Math.pow(2, nearestLowerLevel + 1) - 1);
    const peopleAboveLowerLevel = total - peopleLowerLevel;
    const nextPerson = Math.ceil(peopleAboveLowerLevel / Math.pow(2, nearestLowerLevel + 1)) - 1;
    const personIndex = nextPerson === -1 ? names.length - 1 : nextPerson;
    return names[personIndex];
};


const names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]
const r = 7230702951
res = "Sheldon"
console.log(whoIsNext(names, r));
