// Product of consecutive fibonacci numbers

function productFib(target) {

    const cache = new Map([
        [0, 0], [1, 1]
    ]);

    function fib(n) {
        if ( n < 0 ) { return 0; }
        else if (cache.has(n)) { return cache.get(n); }
        else {
            const ans = fib(n - 1) + fib(n - 2);
            cache.set(n, ans);
            return ans;
        }
    }

    let n = 0, product = 0, low = 0, high = 0;

    while (product < target) {
        low = fib(n - 1);
        high = fib(n);
        product = low * high;
        n++;
    }
    return [low, high, product === target];
}

console.log(productFib(4895));
