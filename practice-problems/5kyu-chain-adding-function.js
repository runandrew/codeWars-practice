// const Adder = function() {
//     let sum = 0;
//     let self = this;
//
//     self.valueOf = function() { return sum; };
//     self.add = function(numLater) {
//         sum += numLater;
//         return self;
//     };
//
// };
//
// function add(num) {
//     const instance = new Adder();
//     return instance.add(num);
// }
//
// console.log(add(1).add(2).add(3));
//
// function createAdder() {
//     return {
//         sum: 0,
//         valueOf: function() { return this.sum; },
//         add: function(num) { this.sum += num; }
//     };
// }

function add(numFirst) {
    let sum = numFirst;

    function adder(num) {
        sum += num;
        return adder;
    }

    adder.valueOf = function() {
        return sum;
    };

    return adder;
}

console.log(add(2)(3)(19));

function add(num) {

    let fn = function (numLater) {
        return add(num + numLater);
    };

    fn.valueOf = function() {
        return num;
    };

    return fn;
}
