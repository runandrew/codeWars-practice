function digPow(n, p){
    const strArr = ("" + n).split("");
    const ans =  strArr.reduce(function(prev, num, index) {
        return prev + Math.pow(+num, p + index);
    }, 0) / n;
    return ans % 1 ? -1 : ans;
}
