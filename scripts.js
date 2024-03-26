const numPadWrapper = document.getElementById('number-pad');
const opPadWrapper = document.getElementById('operator-pad');
const padButtons = document.querySelectorAll('.pad-button');
let numA = '';
let numB = '';
let operator;
let display = document.getElementById('calc-display')

function operate(a,b,op){
    switch(op){
        case '*':
            display.textContent = `${a*b}`;
            calcClear(false);
            break;
        case '/':
            display.textContent = `${a/b}`;
            calcClear(false);
            break;
        case '+':
            display.textContent = `${a+b}`;
            calcClear(false);
            break;
        case '-':
            display.textContent = `${a-b}`;
            calcClear(false);
            break;
        default:
            console.log('What have you done');
            break;
    }
}

padButtons.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.textContent);
        clickChecker(el.textContent);
    })
});

function clickChecker(el) {
    switch (el) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            el = Number(el);
            calcStore(el);
            console.log(`Selected number: ${el}`);
            break;
        case '*':
        case '/':
        case '+':
        case '-':
            calcStore(el);
            console.log(`Selected operator: ${el}`);
            break;
        case 'C':
            calcClear(true);
            console.log('Cleared');
            break;
        case '=':
            if(numA && numB && operator){
                operate(numA, numB, operator);
                console.log('Calculating...');
            }
            break;
        default:
            break;
    }
}

function calcStore(value) {
    if(Number(value) && !operator) {
        numA += value;
        console.log(numA)
        display.textContent = `${numA}`;
    } else if (!operator) {
        if(!Number(value)) {
            console.log(`${value} is an operator`);
            operator = value;
        } else if (Number(value)) {
            console.log(`${value} is not an operator`);
        }
    } else {
        numB += value;
        console.log(numB);
        display.textContent = `${numB}`;
    }
}

function calcClear(state) {
    if(state) {
        numA = null;
        numB = null;
        operator = '';
        display.textContent = '0';
    } else if (!state) {
        numA = display.textContent;
        numB = null;
        operator = '';
    }
}