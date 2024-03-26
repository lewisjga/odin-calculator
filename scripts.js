const numPadWrapper = document.getElementById('number-pad');
const opPadWrapper = document.getElementById('operator-pad');
const padButtons = document.querySelectorAll('.pad-button');
let numA = null;
let numB = null;
let operator;
let display = document.getElementById('calc-display')

function operate(a,b,op){
    switch(op){
        case '*':
            return(a*b);
        case '/':
            return(a/b);
        case '+':
            return(a+b);
        case '-':
            return(a-b);
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
            calcClear();
            console.log('Cleared');
            break;
        case '=':
            if(numA && numB && operator){
                operate(numA, numB, operator);
                console.log('Calculating...');
            } else if (numA){
                console.log('x = x, as it were');
                display.textContent = `${numA}`;
            }
            break;
        default:
            break;
    }
}

function calcStore(value) {
    if(value) {
        
    }
}