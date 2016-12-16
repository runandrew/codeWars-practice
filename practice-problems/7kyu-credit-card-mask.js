
const maskify = (num) => {
    const numArr = num.split('');
    return numArr.fill('#', 0, -4).join('');
};
