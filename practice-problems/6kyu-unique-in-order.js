const uniqueInOrder = function(arr) {
    let lastEl = null;
    arr = Array.isArray(arr) ? arr : arr.split('');
    return arr.filter((el) => {
        let doesEqual = el === lastEl;
        lastEl = el;
        return !doesEqual;
    });
};
