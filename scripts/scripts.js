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

function inputNumber(e) {
    if(this.id == 'num1') {
        display.textContent += '1';
    }
    else if(this.id == 'num2') {
        display.textContent += '2';
    }
    else if(this.id == 'num3') {
        display.textContent += '3';
    }
    else if(this.id == 'num4') {
        display.textContent += '4';
    }
    else if(this.id == 'num5') {
        display.textContent += '5';
    }
    else if(this.id == 'num6') {
        display.textContent += '6';
    }
    else if(this.id == 'num7') {
        display.textContent += '7';
    }
    else if(this.id == 'num8') {
        display.textContent += '8';
    }
    else if(this.id == 'num9') {
        display.textContent += '9';
    }
    else if(this.id == 'num0') {
        display.textContent += '0';
    }
    else if(this.id == 'add') {
        display.textContent += '+';
    }
    else if(this.id == 'sub') {
        display.textContent += '-';
    }
    else if(this.id == 'mul') {
        display.textContent += '*';
    }
    else if(this.id == 'div') {
        display.textContent += '/';
    }
    else if(this.id == 'dec') {
        display.textContent += '.';
    }
    else if(this.id == 'del') {
        display.textContent = display.textContent.slice(0, -1);
    }
}