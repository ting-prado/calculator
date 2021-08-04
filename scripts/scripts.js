let operand1 = 0,
    operand2 = 0,
    answer = 0;

function operate(a, op, b) {
if(op == '+') {
    answer = add(a,b);
}
else if(op == '-') {
    answer = subtract(a,b);
}
else if(op == '*') {
    answer = multiply(a,b);
}
else if(op == '/') {
    answer = divide(a,b);
}
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

operate(2, '*', 7);
console.log(answer);