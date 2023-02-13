const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equals");
const display = document.querySelector("#display");
const clear = document.querySelector(".clear");

let a = "";
let b = "";
let calculationOperator = "";
let firstNumber = true;
let result = "";


function add(a,b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function divide(a, b){
    return Math.round(Number(a) / Number(b) * 100) / 100;
}

function power(a, b){
    return Number(a) ** Number(b);
}

function operate(operator, a, b){
    switch (operator){
        case "+":
            return add(a, b);
            break;
        case "-": 
            return subtract(a, b);
            break;
        case "/": 
            return divide(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "^":
            return power(a, b);
        default: 
            console.log("Incorrect operator");
    }
}

// adding String together to get the number the user wished for
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(firstNumber){
            a += number.textContent;
            display.textContent = a;
        } else {
            b += number.textContent;
            display.textContent = `${calculationOperator}${b}`;
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        firstNumber = false;
        calculationOperator = operator.textContent;
    });
});

equal.addEventListener("click", () => {
    result = operate(calculationOperator, a, b);
    display.textContent = result;
})

clear.addEventListener("click", () => {
    a = b = result = "";
    firstNumber = true;
    display.textContent = "";
});