const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equals");
const display = document.querySelector("#display");
const clear = document.querySelector(".clear");
const comma = document.querySelector(".comma");

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
    return Number(a) / Number(b);
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
        
        if (b !== ""){
            a = operate(calculationOperator, a, b);
            display.textContent = Math.round(a * 100) / 100;
            b = "";
        }
        calculationOperator = operator.textContent;
    });
});

equal.addEventListener("click", () => {
    if (a == ""){
        return;
    } else if (b == ""){
        display.textContent = a;
        return;
    }
    if (calculationOperator == "/" && b == "0"){
        display.textContent = "Divinding by zero is not possible";
        a = "";
        b = "";
        firstNumber = true;
    } else {
        result = operate(calculationOperator, a, b);
        display.textContent = Math.round(result * 100)/ 100;
        a = result;
        b = "";
    }
})

clear.addEventListener("click", () => {
    a = b = result = "";
    firstNumber = true;
    display.textContent = "";
});

comma.addEventListener("click", () => {
    if (firstNumber){
        if (a == ""){
            a += "0.";
        } else {
            a += ".";
        }
        display.textContent = a;
    } else {
        if (b == ""){
            b += "0.";
        } else {
            b += ".";
        }
        display.textContent = b;
    }
});