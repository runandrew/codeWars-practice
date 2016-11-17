// Find the parity outlier

let findOutlier = function(int) {

    const even = [];
    const odd = [];

    int.forEach((num) => {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    });

    return even.length === 1 ? even[0] : odd[0];
};
