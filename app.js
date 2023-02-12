function checkNumber(a, b){
    if (isNaN(a)|| isNaN(b)){
        console.log("Incorrect input");
        return false;
    }
    return true;
}

function add(a,b){
    if(checkNumber(a, b)){
        return Number(a) + Number(b);
    }
}

function subtract(a, b){
    if(checkNumber(a, b)){
        return Number(a) - Number(b);
    }
}

function multiply(a, b){
    if (checkNumber(a, b)){
        return Number(a) * Number(b);
    }
}

function divide(a, b){
    if (checkNumber(a, b)){
        return Math.round(Number(a) / Number(b) * 100) / 100;
    }
}