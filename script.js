function mathAdd(a,b) {
    return a + b
};
function mathSubtract(a, b){
    return a - b
};
function mathDivide(a,b) {
    if (b == 0) {
        return "NO! BAD!"
    } else {return a / b}
};
function mathMultiply(a,b) {
    return a * b
};

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const add = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const multiply = document.querySelector("#times");
const divide = document.querySelector("#from");
const equals = document.querySelector("#equal");
const clr = document.querySelector("#clear");
const dlt = document.querySelector("#delete");
const container = document.querySelector("#container")
const display = document.querySelector("#calcdisplay")
const calcbuttons = document.querySelectorAll(".calcbutton");

let firstNumber = [];
let operator;
let secondNumber = [];
let singleFirst;
let singleSecond;




one.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(1);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(1);
        singleSecond = Number(secondNumber.join(''));
    }
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
two.addEventListener("click", () => {
     if (operator == undefined) {
        firstNumber.push(2);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(2);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
three.addEventListener("click", () => {
     if (operator == undefined) {
        firstNumber.push(3);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(3);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
four.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(4);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(4);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
five.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(5);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(5);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
six.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(6);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(6);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
seven.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(7);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(7);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
eight.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(8);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(8);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
nine.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(9);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(9);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
zero.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(0);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(0);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
add.addEventListener("click", () => {
    if (!firstNumber){
        return false
    } else {operator = "+"}
 
 display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
subtract.addEventListener("click", () => {
 operator = "-"
 display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
multiply.addEventListener("click", () => {
 operator = "*"
 display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
divide.addEventListener("click", () => {
 operator = "/"
 display.textContent = `Math: ${firstNumber} ${operator} ${secondNumber}`
})
clr.addEventListener("click", () => {
firstNumber = []
operator = undefined
secondNumber = []
console.log(firstNumber,secondNumber)
})
dlt.addEventListener("click", () => {

})

equals.addEventListener("click", () => {
    if (operator == "+") {
        display.textContent = mathAdd(singleFirst,singleSecond)
    } else if (operator == "-") {
       display.textContent = mathSubtract(singleFirst,singleSecond)
    } else if (operator == "*") {
        display.textContent = mathMultiply(singleFirst,singleSecond)
    } else if (operator == "/") {
        display.textContent = mathDivide(singleFirst,singleSecond)
    }
firstNumber = []
operator = undefined
secondNumber = []
})