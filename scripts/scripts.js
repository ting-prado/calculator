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

const display = document.querySelector('#display');
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', inputNumber);
});
window.addEventListener('keydown', inputNumber);

function inputNumber(e) {
    if(display.textContent.length < 19 ){
        if(this.id == 'num1' || e.key == 1) {
            display.textContent += '1';
        }
        else if(this.id == 'num2' || e.key == 2) {
            display.textContent += '2';
        }
        else if(this.id == 'num3' || e.key == 3) {
            display.textContent += '3';
        }
        else if(this.id == 'num4' || e.key == 4) {
            display.textContent += '4';
        }
        else if(this.id == 'num5' || e.key == 5) {
            display.textContent += '5';
        }
        else if(this.id == 'num6' || e.key == 6) {
            display.textContent += '6';
        }
        else if(this.id == 'num7' || e.key == 7) {
            display.textContent += '7';
        }
        else if(this.id == 'num8' || e.key == 8) {
            display.textContent += '8';
        }
        else if(this.id == 'num9' || e.key == 9) {
            display.textContent += '9';
        }
        else if(this.id == 'num0' || e.key == 0) {
            display.textContent += '0';
        }
        else if(this.id == 'dec' || e.key == '.') {
            if(display.textContent.includes('.') == false && display.textContent.length>0){
                display.textContent += '.';
            }
        }
    }
    if(this.id == 'add' || e.key == '+') {
        display.textContent += '+';
    }
    else if(this.id == 'sub' || e.key == '-') {
        display.textContent += '-';
    }
    else if(this.id == 'mul' || e.key == '*') {
        display.textContent += '*';
    }
    else if(this.id == 'div' || e.key == '%' || e.key == '/') {
        display.textContent += '/';
    }
    else if(this.id == 'del' || e.key == 'Backspace') {
        display.textContent = display.textContent.slice(0, -1);
    }
    else if(this.id == 'clear' || e.key == '' || e.key == 'c' || e.key == 'C') {
        display.textContent = "";
    }
}