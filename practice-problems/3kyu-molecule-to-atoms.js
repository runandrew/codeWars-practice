// Molecule to Atoms

// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}
//
// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}
//
// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

class ParserMolecule {
    constructor(expression) {
        this.expressionTBP = expression.split('');
        this.openParen = {
            '(': true,
            '[': true,
            '{': true
        };
    }

    get() {
        return this.expressionTBP.shift();
    }

    peek() {
        return this.expressionTBP[0] || '';
    }

    static combineMolecules(prev, next) {
        Object.keys(next).forEach(el => {
            if (prev[el]) prev[el] += next[el];
            else prev[el] = next[el];
        });
        return prev;
    }

    static multiplyMolecule(molecule, multiplier) {
        Object.keys(molecule).forEach(el => {
            molecule[el] *= multiplier;
        });
        return molecule;
    }

    number() {
        let result = '';
        while (/[\d\.]/.test(this.peek())) {
            result += this.get();
        }
        return +result;
    }

    molecule() {
        let result = this.get();
        let output = {};
        while (/([a-z])/.test(this.peek())) {
            result += this.get();
        }
        output[result] = 1;
        return output;
    }

    factor() {
        if (/([A-Z])/.test(this.peek())) {
            return this.molecule();
        } else if (this.openParen[this.peek()]) {
            this.get();
            let expVal = this.expression();
            this.get();
            if (/[\d]/.test(this.peek())) {
                const multiplier = this.number();
                expVal = ParserMolecule.multiplyMolecule(expVal, multiplier);
            }
            return expVal;
        }
    }

    expression() {
        let result = this.factor();
        while (/([A-Z([{\d])/.test(this.peek())) {
            if (/[\d]/.test(this.peek())) {
                const multiplier = this.number();
                result = ParserMolecule.multiplyMolecule(result, multiplier);
            } else {
                const newFact = this.expression();
                result = ParserMolecule.combineMolecules(result, newFact);
            }
        }
        return result;
    }

}

function parseMolecule(expr) {
    const parser = new ParserMolecule(expr);
    console.log(parser);
    return parser.expression();
}

console.log(parseMolecule('K4[ON(SO3)2]2'));

// Molecule (Number)
// (Molecule)
// O, Mg, H

// Factor
// if [Molecule] return this.molecule
// if [Open bracket]
  // this.get();
  // temp = this.expression;
  // this.get();
  // return temp;


// Expression
// let result = this.factor();
// while(this.peek() === [CapitalLetter/OpenParen or Number]) {
  // if number
    // multiplier = this.number();
    // result += multiplyMolecule(result, multiplier) }
  // if letter/openParen
    // result += this.factor
// return result;


// K4[ON(SO3)2]2
//
