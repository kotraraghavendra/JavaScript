var input1Element=document.querySelector('#first-number');
var input2Element=document.querySelector('#second-number');
var buttonElement=document.querySelector('#button')
var enterButtonElement=document.querySelector('#enter');
var resultElement=document.querySelector('#result');
var addElement=document.querySelector('#sum');
var subtractElement=document.querySelector('#subtract');
var multiplyElement=document.querySelector('#multiply');
var divisionElement=document.querySelector('#division');
var buttonValue='';

addElement.addEventListener('click', add);
subtractElement.addEventListener('click' , subtract);
multiplyElement.addEventListener('click' , multiply);
divisionElement.addEventListener('click' , division);

function add(){
    buttonValue=buttonElement.innerText='+';
}

function subtract(){
    buttonValue=buttonElement.innerText='-';
}

function multiply() {
    buttonValue=buttonElement.innerText='*';
}

function division() {
    buttonValue=buttonElement.innerText='/';
}

enterButtonElement.addEventListener('click', function () {
    var num1=parseInt(input1Element.value);
    var num2=parseInt(input2Element.value);
    var result=0;
    switch(buttonValue){
        case '+':
            result=num1 + num2;
            break;
        case '-':
            result=num1 - num2;
            break;
        case '*':
            result=num1 * num2;
            break;
        case '/':
            result=num1 / num2;
            break;
        default :
            result=num1 + num2;

    }
    resultElement.value=result;
})


