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

const botDisplay = document.querySelector('#bot-display');
const topDisplay = document.querySelector('#top-display');
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', inputNumber);
});
window.addEventListener('keydown', inputNumber);

function inputNumber(e) {
    if(botDisplay.textContent.length < 18 ){
        if(this.id == 'num1' || e.key == 1) {
            botDisplay.textContent += '1';
        }
        else if(this.id == 'num2' || e.key == 2) {
            botDisplay.textContent += '2';
        }
        else if(this.id == 'num3' || e.key == 3) {
            botDisplay.textContent += '3';
        }
        else if(this.id == 'num4' || e.key == 4) {
            botDisplay.textContent += '4';
        }
        else if(this.id == 'num5' || e.key == 5) {
            botDisplay.textContent += '5';
        }
        else if(this.id == 'num6' || e.key == 6) {
            botDisplay.textContent += '6';
        }
        else if(this.id == 'num7' || e.key == 7) {
            botDisplay.textContent += '7';
        }
        else if(this.id == 'num8' || e.key == 8) {
            botDisplay.textContent += '8';
        }
        else if(this.id == 'num9' || e.key == 9) {
            botDisplay.textContent += '9';
        }
        else if(this.id == 'num0' || e.key == 0) {
            botDisplay.textContent += '0';
        }
        else if(this.id == 'dec' || e.key == '.') {
            if(botDisplay.textContent.includes('.') == false && botDisplay.textContent.length>0){
                botDisplay.textContent += '.';
            }
        }
    }
    if(botDisplay.textContent.includes('+') == false && botDisplay.textContent.includes('-') == false && botDisplay.textContent.includes('*') == false && botDisplay.textContent.includes('/') == false){
        if(this.id == 'add' || e.key == '+') {
            operand1 = botDisplay.textContent;
            if(operand1[operand1.length-1] == '.'){
                topDisplay.textContent = `${operand1}0 +`
            }
            else {
                topDisplay.textContent = `${operand1} +`
            }
            botDisplay.textContent = "";
        }
        else if(this.id == 'sub' || e.key == '-') {
            operand1 = botDisplay.textContent;
            if(operand1[operand1.length-1] == '.'){
                topDisplay.textContent = `${operand1}0 -`
            }
            else {
                topDisplay.textContent = `${operand1} -`
            }
            botDisplay.textContent = "";
        }
        else if(this.id == 'mul' || e.key == '*') {
            operand1 = botDisplay.textContent;
            if(operand1[operand1.length-1] == '.'){
                topDisplay.textContent = `${operand1}0 *`
            }
            else {
                topDisplay.textContent = `${operand1} *`
            }
            botDisplay.textContent = "";
        }
        else if(this.id == 'div' || e.key == '%' || e.key == '/') {
            operand1 = botDisplay.textContent;
            if(operand1[operand1.length-1] == '.'){
                topDisplay.textContent = `${operand1}0 /`
            }
            else {
                topDisplay.textContent = `${operand1} /`
            }
            botDisplay.textContent = "";
        }
    }
    if(this.id == 'del' || e.key == 'Backspace') {
        botDisplay.textContent = botDisplay.textContent.slice(0, -1);
        if(botDisplay.textContent == ""){
            botDisplay.textContent = topDisplay.textContent;
            topDisplay.textContent = "";
        }
    }
    else if(this.id == 'clear' || e.key == '' || e.key == 'c' || e.key == 'C') {
        botDisplay.textContent = "";
        topDisplay.textContent = "";
        operand1 = 0,
        operand2 = 2,
        answer = 0;
    }
}

function changeDisplays() {
    
}