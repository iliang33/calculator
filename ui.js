import {updateOperand, updateOperator, setNum1, setNum2, setOperator, setResult, calculate, getNum1, getNum2, getOperator, getResult} from "./calculator.js"


const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const misc = document.querySelectorAll(".misc");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const toggleButton = document.querySelector(".toggle");

function displayItem(item){
    const p = document.createElement("p");
    
    p.textContent = item;

    if (display) {
        display.appendChild(p);

    }
}

function clear(){
    if (display) {
        display.replaceChildren();
    }
    setNum1("");
    setOperator(undefined);
    setNum2("");
    setResult("");
}

function toggleTheme() {
    const root = document.documentElement; 
  	const newTheme = root.className === "dark" ? "light" : "dark"; 
  	const toggleIcon = document.querySelector("img");
    root.className = newTheme;

    if (newTheme == "dark") {
        toggleIcon.src = "./images/sun.png";
        toggleIcon.alt = "sun icon";
        toggleIcon.width = "40";

    } else {
        toggleIcon.src = "./images/moon.png";
        toggleIcon.alt = "moon icon";
        toggleIcon.width = "40";

    }
}

numbers.forEach((button) => {
    button.addEventListener("click", (event) => {
        let text = event.target.textContent;

        if (getResult() != "" && getOperator() == undefined) {
            clear();
        }

        displayItem(text);
        updateOperand(text)
    });

});

operators.forEach((button) => {
    button.addEventListener("click", (event) => {
        let text = event.target.textContent;
        if (updateOperator(text)) {
            displayItem(text);
        }

        if (getResult() != "") {
            setResult("");
        }

        if (getNum1() != "" && getNum2() != "" && getOperator() != undefined) {
            let answer = calculate();
            clear();
            displayItem(answer);
            setNum1(answer);
            setResult(answer);
            setOperator(text);
            displayItem(text);
        }
    });
});

if (clearButton) {
    clearButton.addEventListener("click", (event) => {
        clear();
    });
}

if (equalsButton) {
    equalsButton.addEventListener("click", (event) => {
        let answer = calculate();
        clear();
        displayItem(answer);
        setNum1(answer);
        setResult(answer);
    });
}

misc.forEach((button) => {
    if (button.textContent == ".") {
        button.addEventListener("click", () => {
            if (getResult() == "") {
                if (getOperator() == undefined) {
                    if (!getNum1().includes(".")) {
                        updateOperand(".");
                        displayItem(".");
                    }
                } else {
                    if (!getNum2().includes(".")) {
                        updateOperand(".");
                        displayItem(".");
                    }
                }
            }
        });
    } else if (button.textContent == "+/-") {
        button.addEventListener("click", () => {
            if (getResult() == "") {
                if (getOperator() == undefined) {
                    if (getNum1() == "") {
                        updateOperand("-");
                        displayItem("-");
                    }
                } else {
                    if (getNum2() == "") {
                        updateOperand("-");
                        displayItem("-");
                    }
                }
            }
        });
    }
});

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        toggleTheme();
    });
}