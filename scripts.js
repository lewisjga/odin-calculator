const numPadWrapper = document.getElementById('number-pad');
const opPadWrapper = document.getElementById('operator-pad');
const padButtons = document.querySelectorAll('.pad-button');
let display = document.getElementById('calc-display');

padButtons.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.textContent);
        calcFill(el.textContent, el.classList)
    })
});

function calcFill (value, type) {
    if(type.contains("num")){
        console.log('Number selected');
    } else if(type.contains("operator")){
        console.log('Operator selected');
    } else if(type.contains("equals")){
        console.log('Equals selected');
    } else if(type.contains("clear")){
        console.log('Clear selected');
    }
}