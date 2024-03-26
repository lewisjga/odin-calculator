const numPadWrapper = document.getElementById('number-pad');
const opPadWrapper = document.getElementById('operator-pad');
const padButtons = document.querySelectorAll('.pad-button');
let display = document.getElementById('calc-display');
let workingValue = '';
let storedValue = 0;
let operator = '';
let solution = 0;

padButtons.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.textContent);
        calcFill(el.textContent, el.classList)
    })
});

function calcFill (value, type) {
    if(type.contains("num")){
        workingValue += value;
        display.textContent = workingValue;
        console.log(workingValue);
    } else if(type.contains("operator")){
        if(workingValue != 0) {
            storedValue = workingValue;
        }
        workingValue = '';
        operator = value;
    } else if(type.contains("equals")){
        if(!storedValue){
            solution = workingValue;
            console.log(`var solution is ${solution}`);
            display.textContent = solution;
            calcClear(1);
        } else {
            solution = calcSolve(storedValue, workingValue, operator);
            console.log(`var solution is ${solution}`);
            display.textContent = solution;
            calcClear(1);
        }
    } else if(type.contains("clear")){
        calcClear(2);
        console.log('Clear selected');
    }
}

function calcSolve(a, b, sign) {
    a = Number(a);
    b = Number(b);
    switch(sign) {
        case '*':
            return (a*b).toFixed(0);
        case '/':
            return(a/b).toFixed(0);
        case '+':
            return(a+b);
        case '-':
            return(a-b);
    }
}

function calcClear(option) {
    switch(option){
        case 1:
            workingValue = ''
            storedValue = solution;
            operator = '';
            break;
        case 2:
            workingValue = ''
            storedValue = 0;
            operator = '';
            display.textContent = 0; 
            break;
        default:
            console.log('Something is wrong...');
    }
}