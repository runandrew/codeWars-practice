// Calculator

function Calculator(expression) {
  this.expressionToParse = expression.replace(/\s+/g, '').split(''); // Tokenized version of expression
}

Calculator.prototype.get = function() {
  return this.expressionToParse.shift();
};

Calculator.prototype.peek = function() {
  return this.expressionToParse[0] || '';
};

Calculator.prototype.run = function() {
  return this.expression();
};

Calculator.prototype.number = function() {
  let result = '';
  while(/[\d\.]/.test(this.peek())) {
    result += this.get();
  }
  return Number(result);
};

Calculator.prototype.factor = function() {
  if (/[\d\.]/.test(this.peek())) {
    return this.number();
  } else if (this.peek() === '-') {
    this.get();
    return -1 * this.factor();
  } else if (this.peek() === '(') {
    this.get();
    const exprVal = this.expression();
    this.get();
    return exprVal;
  }
};

Calculator.prototype.term = function() {
  let result = this.factor();

  while(this.peek() === '*' || this.peek() === '/') {
    if(this.get() === '*') {
      result *= this.factor();
    } else {
      result /= this.factor();
    }
  }
  return result;
};

Calculator.prototype.expression = function() {
  let result = this.term();

  while(this.peek() === '+' || this.peek() === '-') {
    if (this.get() === '+') {
      result += this.term();
    } else {
      result -= this.term();
    }
  }

  return result;
};

const expression = "8*6 + 12 + (4+5)";
const calculator = new Calculator(expression);
console.log(calculator.expression());
