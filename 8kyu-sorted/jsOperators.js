
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

//try not to use eval but it worked here
function basicOp(operation, value1, value2) {
    return eval(`${value1}${operation}${value2}`);
}

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '*': return value1 * value2;
        case '-': return value1 - value2;
        case '/': return value1 / value2;
    }
}


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}


function basicOp(o, v1, v2) {
    if (o === '+') return v1 + v2;
    if (o === '-') return v1 - v2;
    if (o === '/') return v1 / v2;
    if (o === '*') return v1 * v2;
}