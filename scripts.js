let numOne;
let numTwo;
let operator;

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