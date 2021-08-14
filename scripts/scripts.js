let operand1 = "",
    operand2 = "",
    answer = "",
    operation = "";

const botDisplay = document.querySelector('#bot-display');
const topDisplay = document.querySelector('#top-display');
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', inputNumber);
});
window.addEventListener('keydown', inputNumber);
window.addEventListener('keydown', addEffect);

function operate(a, op, b) {
if(op == '+') {
    let sum = add(a,b);
    if(sum.length>15){
        return sum.toFixed(4);
    }
    else{
        return sum;
    }
}
else if(op == '-') {
    let difference = subtract(a,b);
    if(difference.length>15){
        return difference.toFixed(4);
    }
    else{
        return difference;
    }
}
else if(op == '*') {
    let product = multiply(a,b);
        if(product.length>15){
            return product.toFixed(4);
        }
        else{
            return product;
        }
}
else if(op == '/') {
    let quotient = divide(a,b);
        if(quotient.length>15){
            return quotient.toFixed(4);
        }
        else{
            return quotient;
        }
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
    if(b==0){
        return 'UNDEFINED';
    }
    else{
        return a/b;
    }
}

function inputNumber(e) {
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
        else if(this.id == 'num0' || e.code == 'Digit0') {
            botDisplay.textContent += '0';
        }
        else if(this.id == 'dec' || e.key == '.') {
            if(botDisplay.textContent.includes('.') == false && botDisplay.textContent.length>0){
                botDisplay.textContent += '.';
            }
        }
    if((botDisplay.textContent[0] == '-' && botDisplay.textContent.includes('+') == false && botDisplay.textContent.includes('*') == false && botDisplay.textContent.includes('/') == false) ||
        (botDisplay.textContent.includes('e+') == true) || (botDisplay.textContent.includes('e-') == true) ||
        (botDisplay.textContent.includes('+') == false && botDisplay.textContent.includes('-') == false && botDisplay.textContent.includes('*') == false && botDisplay.textContent.includes('/') == false)){
        if((this.id == 'add' || e.key == '+') && botDisplay.textContent != "") {
            operand1 = Number(botDisplay.textContent);
            if(operand1[operand1.length-1] == '.'){
                topDisplay.textContent = `${operand1}0 +`
            }
            else {
                topDisplay.textContent = `${operand1} +`
            }
            botDisplay.textContent = "";
        }
        else if((this.id == 'sub' || e.key == '-') && botDisplay.textContent != "") {
            operand1 = botDisplay.textContent;
            if(operand1[operand1.length-1] == '.'){
                topDisplay.textContent = `${operand1}0 -`
            }
            else {
                topDisplay.textContent = `${operand1} -`
            }
            botDisplay.textContent = "";
        }
        else if((this.id == 'mul' || e.key == '*') && botDisplay.textContent != "") {
            operand1 = botDisplay.textContent;
            if(operand1[operand1.length-1] == '.'){
                topDisplay.textContent = `${operand1}0 *`
            }
            else {
                topDisplay.textContent = `${operand1} *`
            }
            botDisplay.textContent = "";
        }
        else if((this.id == 'div' || e.key == '%' || e.key == '/') && botDisplay.textContent != "") {
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
    }
    else if(this.id == 'clear' || e.key == 'c' || e.key == 'C') {
        botDisplay.textContent = "";
        topDisplay.textContent = "";
        operand1 = "",
        operand2 = "",
        answer = "",
        operation= "";
    }
    else if(this.id == 'posneg' || e.code == 'Space') {
        if(botDisplay.textContent[0] == '-'){
            let newDisp = botDisplay.textContent.slice(1,botDisplay.textContent.length);
            botDisplay.textContent = newDisp;
        }
        else{
            let newDisp = `-${botDisplay.textContent}`;
            botDisplay.textContent = newDisp;
        }
    }
    else if(this.id == 'equal' || e.key == 'Enter' || e.key == '=') {
        operand2 = Number(botDisplay.textContent);
        operation = topDisplay.textContent[topDisplay.textContent.length-1];
        if(operand1 != "" && operand2 != "") {
            answer = operate(operand1, operation, operand2);
            topDisplay.textContent = `${operand1} ${operation} ${operand2} =`;
            botDisplay.textContent = answer;
            operand1="";
            operand2="";
        }
        else return;
    }
}

function addEffect(e){
    let key;
    if(e.key == '1') {
        key = document.querySelector('#num1');
    }
    else if(e.key == '2') {
        key = document.querySelector('#num2');
    }
    else if(e.key == '3') {
        key = document.querySelector('#num3');
    }
    else if(e.key == '4') {
        key = document.querySelector('#num4');
    }
    else if(e.key == '5') {
        key = document.querySelector('#num5');
    }
    else if(e.key == '6') {
        key = document.querySelector('#num6');
    }
    else if(e.key == '7') {
        key = document.querySelector('#num7');
    }
    else if(e.key == '8') {
        key = document.querySelector('#num8');
    }
    else if(e.key == '9') {
        key = document.querySelector('#num9');
    }
    else if(e.key == '0') {
        key = document.querySelector('#num0');
    }
    else if(e.key == 'Backspace') {
        key = document.querySelector('#del');
    }
    else if(e.key == '.') {
        key = document.querySelector('#dec');
    }
    else if(e.key == '+') {
        key = document.querySelector('#add');
    }
    else if(e.key == '-') {
        key = document.querySelector('#sub');
    }
    else if(e.key == '*') {
        key = document.querySelector('#mul');
    }
    else if(e.key == '/' || e.key == '%') {
        key = document.querySelector('#div');
    }
    else if(e.key == 'Enter' || e.key == '=') {
        key = document.querySelector('#equal');
    }
    else if(e.key == 'C' || e.key == 'c') {
        key = document.querySelector('#clear');
    }
    else if(e.code == 'Space') {
        key = document.querySelector('#posneg');
    }
    else return;
    key.classList.add('selected');
        setTimeout(function() {
            key.classList.remove('selected');
        }, 80);
}