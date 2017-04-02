// Sum of Pairs

// const sum_pairs = (arr, num) => {
//     // let leftIndex = 0;
//     // let rightIndex = 1;
//
//     const store = [];
//     let maxIndex = arr.length;
//
//     for (let leftIndex = 0; leftIndex < maxIndex; leftIndex++) {
//         for (let rightIndex = leftIndex + 1; rightIndex < maxIndex; rightIndex++) {
//             if (arr[leftIndex] + arr[rightIndex] === num) {
//                 maxIndex = rightIndex;
//                 store.push([leftIndex, rightIndex]);
//             }
//         }
//     }
//
//     // Find smallest right index
//     const smallestRightIndex = store.reduce((prev, curr, i) => {
//         return prev[0] > curr[1] ? [curr[1], i] : prev;
//     }, [Infinity, -1]);
//
//
//     const smallestIndices = store[smallestRightIndex[1]];
//
//     if (smallestIndices) return [arr[smallestIndices[0]], arr[smallestIndices[1]]];
//     else return;
// };
// sum_pairs([1, 4, 8, 7, 3, 15], 8);

// Linked list
class Node {
  constructor(val) {
    this.value = val;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(val) {
    const newNode = new Node(val);
    const formerHead = this.head;
    this.head = newNode;

    if (formerHead) {
      formerHead.previous = newNode;
      newNode.next = formerHead;
    }

    if (!this.tail) this.tail = newNode;
  }

  addToTail(val) {
    const newNode = new Node(val);
    const formerTail = this.tail;
    this.tail = newNode;

    if (formerTail) {
      formerTail.next = newNode;
      newNode.previous = formerTail;
    }

    if (!this.head) this.head = this.tail;
  }

  removeTail() {
    const removedTail = this.tail;

    if (!removedTail) return;

    if (removedTail.previous) {
      this.tail = removedTail.previous;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return removedTail.value;
  }

  search(comparator) {
    let currentNode = this.head;

    if (typeof comparator === 'string') {
      const comparatorString = comparator;
      comparator = function(elementValue) {
        return comparatorString === elementValue;
      };
    }

    while (currentNode !== null) {
      if (comparator(currentNode.value)) return currentNode.value;
      currentNode = currentNode.next;
    }

    return null;
  }

  size() {
    let i = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      i++;
      currentNode = currentNode.next;
    }

    return i;
  }
}


// Hash table
class HashNode {
  constructor(key, val) {
    this.value = val;
    this.key = key;
  }
}

class HashTable {
  constructor(numBuck) {
    this.numBuckets = numBuck;
    this.buckets = new Array(numBuck);
  }

  set(key, val) {
    if (typeof key !== 'string') throw new TypeError('Keys must be strings');
    let hash = HashTable.hash(key);
    if (!this.buckets[hash]) this.buckets[hash] = new LinkedList();
    this.buckets[hash].addToTail(new HashNode(key, val));
  }

  get(key) {
    let hash = this.hash(key);
    return this.buckets[hash].search(node => node.key === key).value;
  }

  getAll(key) {
    const indices = [];
    const hash = HashTable.hash(key);
    if (!this.buckets[hash]) return [];
    let currentNode = this.buckets[hash].head;
    if (currentNode) {
      while (currentNode !== null) {
        indices.push(currentNode.value.value);
        currentNode = currentNode.next;
      }
    }
    return indices;
  }

  hasKey(key) {
    let hash = this.hash(key);
    return Boolean(this.buckets[hash].search(node => node.key === key));
  }

  static hash(input) {
    return input;
  }
}

// const sum_pairs = (arr, num) => {
//
//     // Create HashTable
//     const hashTable = new HashTable(Math.abs(num));
//
//     // Insert arr elements into the hash table
//     arr.forEach((element, index) => {
//         const diff = num - element;
//         if (element <= num) hashTable.set(diff.toString(), index);
//     });
//
//     let lowestPair = [arr.length, arr.length];
//     for (let i = 0; i < arr.length && i < lowestPair[1]; i++) {
//         debugger;
//         // if (arr[i] > num) break;
//         let complimentIndices = hashTable.getAll((arr[i]).toString());
//         if (complimentIndices.length) {
//             let lowestIndex = complimentIndices[0];
//             let lowestIndexCount = 0;
//
//             while (i === lowestIndex) {
//                 lowestIndex = complimentIndices[++lowestIndexCount];
//             }
//
//             if (lowestIndex < lowestPair[1] && lowestIndex !== undefined) {
//                 lowestPair = [i, lowestIndex];
//             }
//         }
//     }
//
//     return arr[lowestPair[0]] !== undefined ? [arr[lowestPair[0]], arr[lowestPair[1]]] : undefined;
// };

const sum_pairs = (arr, num) => {
  // if (arr.length > 1000) return undefined; // Testing purposes only

  // Create HashTable
  const hashTable = new HashTable(arr.length);

  // Initialize the lowest pair to an out-of-bounds element
  let lowestPair = [arr.length, arr.length];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const diff = num - element;

    hashTable.set(diff.toString(), index); // Add element difference to hash table
    let complimentIndices = hashTable.getAll((arr[index]).toString()); // See if there are any current compliment indices to the current element

    //debugger; // For testing purposes only

    if (complimentIndices.length) { // If there are compliments that exist in the table
      let lowestIndex = complimentIndices[0]; // Set the lowest index to the first element
      let lowestIndexCounter = 0; // Initialize a counter

      while (index === lowestIndex) { // If the current index happens to be the same as the lowestIndex, move to the next complimentary index
        lowestIndex = complimentIndices[++lowestIndexCounter];
      }

      if (lowestIndex !== undefined) { // If a lowest index exists, set the lowest pair and break from the loop
        lowestPair = [lowestIndex, index];
        break;
      }
      // if (lowestIndex < lowestPair[1] && lowestIndex !== undefined) {
      //     let min = Math.min(index, lowestIndex);
      //     let max = Math.max(index, lowestIndex);
      //     lowestPair = [min, max];
      // }
    }
  }

  // console.log([arr[lowestPair[0]], arr[lowestPair[1]]]); // Test purposes only

  const lowestArrayValuePair = [arr[lowestPair[0]], arr[lowestPair[1]]];
  return lowestArrayValuePair[0] !== undefined ? lowestArrayValuePair : undefined;
};

// console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8));
// console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6));
// console.log(sum_pairs([1,2,3,4,1,0], 2));
// console.log(sum_pairs([0,2,0], 0));
// console.log(sum_pairs([1,-2,3,0,-6,1], -6));
const blankArr = new Array(5000000).fill(0);
// Pair at end
const finalArrEnd = [...blankArr, 4, 6];

// Pair at front
const finalArrFront = [4, 6, ...blankArr];

const start = new Date();
console.log(sum_pairs(finalArrEnd, 10));
const end = new Date();

const timeDiff = end - start;
console.log(`Completion time: ${timeDiff / 1000}`);
