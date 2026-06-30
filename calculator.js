let num1 = "";
let operator = undefined;
let num2 = "";
let result = "";


export function add(num1, num2) {
    return Number((num1 + num2).toFixed(10));
}

export function subtract(num1, num2) {
    return Number((num1 - num2).toFixed(10));
}

export function multiply(num1, num2) {
    return Number((num1 * num2).toFixed(10));
}

export function divide(num1, num2) {
    let quotient = Number((num1 / num2).toFixed(10));
   
    if (!Number.isFinite(quotient)) {
        return "Error";
    } else {
        return quotient;
    }
}

export function operate(operator, num1, num2) {
    switch (operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    };
}

export function calculate() {
    return String(operate(operator, Number(num1), Number(num2)));

}
export function getNum1(){
    return num1;
}

export function getNum2(){
    return num2;
}

export function getOperator(){
    return operator;
}

export function getResult(){
    return result;
}

export function setNum1(num) {
    num1 = String(num);
}

export function setNum2(num) {
    num2 = String(num);
}

export function setOperator(op) {
    operator = op;
}

export function setResult(num) {
    result = String(num);
}

export function updateOperand(item){
    if (operator == undefined) {
        num1 += String(item);
    } else if (operator != undefined) {
        num2 += String(item);
    }
}

export function updateOperator(op){
    if (operator == undefined && num1 != "") {
        operator = op;
        return true;
    }
    return false;
}






