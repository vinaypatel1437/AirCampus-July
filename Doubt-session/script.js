let button = document.getElementsByClassName('value');
let myDiv = document.querySelector('div');
let operators = document.querySelectorAll('.operator');

let operator = ['+', '-'];

let sayHello = (e) => {
    let myValue = e.target.textContent;
    myDiv.innerText += myValue;
}

for(let i = 0; i < button.length; i++) {
    button[i].onclick = sayHello;
}
// console.log(operta)
for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', performOperations);
}

function performOperations (e) {
    console.log(e);
    let operatorr = e.target.textContent;
    switch(operatorr) {
        case '+' :
            if(myDiv.innerText === '') {
                alert("Div khali hai");
            }
            else {
                myDiv.innerText += operatorr;
            }
            break;
        case '-':
            if(myDiv.innerText === '') {
                alert("Div khali hai");
            }
            else {
                myDiv.innerText += operatorr;
            }
            break;
        case 'AC' :
            myDiv.innerHTML = '';
            break;
        case '=' :
            if(myDiv.innerText === '') {
                alert("Nothing to perform");
            } else {
                let myDataToPerform = myDiv.innerText;
                let op = '';
                for(let i = 0; i < operator.length; i++) {
                    op = myDataToPerform.includes(operator[i]) ? operator[i] : op;
                }
                let mySplittedData = myDataToPerform.split(op);
                let ans = performOperation(mySplittedData[0], mySplittedData[1], op);
                myDiv.innerText = ans;
            }
            break;
    }
}

function performOperation(firstVal, secondVal, op) {
    switch(op) {
        case '+':
            return Number(firstVal) + Number(secondVal);
            break;
        case '-':
            return Number(firstVal) - Number(secondVal);
            break;
    }
}