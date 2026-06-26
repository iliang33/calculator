let num1;
let operator;
let num2;

export function add(num1, num2) {
    return num1 + num2;
}

export function subtract(num1, num2) {
    return num1 - num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

export function divide(num1, num2) {
    return num1 / num2;
}

export function operate(operator, num1, num2) {
    switch (operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    };
}

function display(item){
    const p = document.createElement("p");
    const display = document.querySelector(".display");

    p.textContent = item;

    display.appendChild(p);
    

}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const misc = document.querySelectorAll(".misc");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");


numbers.forEach((button) => {
    button.addEventListener("click", (event) => {
        display(event.target.textContent);
    });

});