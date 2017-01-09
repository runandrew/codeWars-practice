// Did you mean...?

class Dictionary {
    constructor(words) {
        this.words = words;
        debugger;
    }

    findMostSimilar(term) {
        const distances = this.words.map(word => {
            return {
                word: word,
                distance: Dictionary.editDistance(word, term)
            };
        });

        const sortedDistances = distances.sort((a, b) => {
            return a.distance - b.distance;
        });

        console.log(sortedDistances);

        return sortedDistances[0].word;
    }

    static editDistance(strX, strY) {
        // create a matrix, X.length x Y.length
        // fill in first row, first column
        // start at 1, 1 and work way until end
        // for each, find min of (TL+delta), L + 1, U + 1

        // Create matrix
        const matrix = [];
        for (let i = 0; i <= strX.length; i++) {
            matrix.push(Array(strY.length + 1));
        }

        // Fill in first row
        for (let i = 0; i <= strY.length; i++) {
            matrix[0][i] = i;
        }

        // Fill in first column
        for (let i = 0; i <= strX.length; i++) {
            matrix[i][0] = i;
        }

        // Fill in the rest of the matrix
        for (let x = 1; x <= strX.length; x++) {
            for (let y = 1; y <= strY.length; y++) {
                matrix[x][y] = Dictionary.minRoute(matrix, x, y, strX, strY);
            }
        }

        console.log(matrix);
        return matrix[strX.length][strY.length];
    }

    static minRoute(matrix, x, y, strX, strY) {
        // Look left
        const left = matrix[x][y - 1] + 1;
        // Look up
        const up = matrix[x - 1][y] + 1;
        // Look corner
        const delta = strX[x] === strY[y] ? 0 : 1;
        const corner = matrix[x - 1][y - 1] + delta;

        // Take the min of all three
        return Math.min(left, up, corner);
    }
}


const words =  ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'];
const term = 'strawbery';

const test = new Dictionary(words);
console.log(test.findMostSimilar('berry'));
