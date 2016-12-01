function isIsogram(str) {
    str = str.toLowerCase();
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (str.match(new RegExp(strArr[i], 'g')).length > 1) {
            return false;
        }
        console.log(i);
    }
    return true;
}


console.log(isIsogram('dotrelkd'));
