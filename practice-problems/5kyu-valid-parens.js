// Valide parens

function validParentheses(parens){
    const parensArr = parens.split('');
    const stack = [];
    for (let i = 0; i < parensArr.length; i++) {
        if (parensArr[i] === "(") stack.push(1);
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return !stack.length;
}
