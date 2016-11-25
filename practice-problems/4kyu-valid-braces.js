// Valid Braces

const validBraces = function(braces) {
    const queue = [];
    const bracesToken = braces.split('');
    let status = false;
    const bracesMatch = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };

    while(bracesToken.length) {
        if ('({['.indexOf(peek()) !== -1) {
            queue.push(get());
        } else if (closingBracketDetermine()) {
            status = true;
        } else {
            return false;
        }
    }

    return status;

    function closingBracketDetermine() {
        let closingToken = get();
        let openingToken = queueGet();
        return closingToken === bracesMatch[openingToken];
    }

    function peek() {
        return bracesToken[0];
    }

    function get() {
        return bracesToken.shift();
    }

    function queueGet() {
        return queue.pop();
    }
};

console.log(validBraces('([{}])'));
