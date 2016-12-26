// Persistent bugger

const persistence = (numStart) => {
    var counter = 0;

    function recMultiplier(num) {
        const numStrArr = num.toString().split('');

        if (numStrArr.length === 1) {return counter;}
        else {
            counter++;
            const numMultiplied = numStrArr.reduce((prev, curr) => {
                return prev * +curr;
            }, 1);
            return recMultiplier(numMultiplied);
        }
    }

    return recMultiplier(numStart);
};
