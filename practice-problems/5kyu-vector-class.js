// Vector class

function Vector(components) {
    this.components = components;
}

Vector.prototype.add = function(vB) {
    if (!Vector.isValid(this, vB)) throw new Error();
    const resultComponent = this.components.map((component, i) => {
        return component + vB.components[i];
    });

    return new Vector(resultComponent);
};

Vector.prototype.subtract = function(vB) {
    if (!Vector.isValid(this, vB)) throw new Error();
    const resultComponent = this.components.map((component, i) => {
        return component - vB.components[i];
    });

    return new Vector(resultComponent);
};

Vector.prototype.dot = function(vB) {
    if (!Vector.isValid(this, vB)) throw new Error();
    return this.components.reduce((previous, component, i) => {
        return previous + component * vB.components[i];
    }, 0);

};

Vector.prototype.norm = function() {
    return Math.sqrt(this.components.reduce((previous, component) => {
        return previous + Math.pow(component, 2);
    }, 0));
};

Vector.prototype.length = function() {
    return this.components.length;
};

Vector.prototype.equals = function(vB) {
    console.log(this, vB);
    if (!Vector.isValid(this, vB)) return false;
    for (let i = 0; i < this.components.length; i++) {
        if (this.components[i] !== vB.components[i]) return false;
    }
    return this;
};

Vector.prototype.toString = function() {
    return `(${this.components.join(',')})`;
};

Vector.isValid = function(vA, vB) {
    return vA.length() === vB.length();
};
