function findOdd(arr) {
    let obj = {};
    arr.forEach(function(num) {
        obj[num] ? obj[num]++ : obj[num] = 1;
    });

    for(let key in obj) {
        if (obj[key] % 2 !== 0) {
            return +key;
        }
    }
    return null;
}

let arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
console.log(findOdd(arr));


//[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
// 5
