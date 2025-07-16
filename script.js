function mathAdd(a,b) {
    return a + b
};
function mathSubtract(a, b){
    return a - b
};
function mathDivide(a,b) {
    if (b == 0) {
        return "NO! BAD!"
    } else {return Math.round((a / b) * 100)/100}
};
function mathMultiply(a,b) {
    return Math.round((a * b) * 100)/100}

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

    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
two.addEventListener("click", () => {
     if (operator == undefined) {
        firstNumber.push(2);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(2);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
three.addEventListener("click", () => {
     if (operator == undefined) {
        firstNumber.push(3);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(3);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
four.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(4);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(4);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
five.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(5);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(5);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
six.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(6);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(6);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
seven.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(7);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(7);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
eight.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(8);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(8);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
nine.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(9);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(9);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})
zero.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(0);
        singleFirst = Number(firstNumber.join(''));
    } else {secondNumber.push(0);
        singleSecond = Number(secondNumber.join(''));
    }
    
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})


add.addEventListener("click", () => {
    if (operator == undefined){
        operator = "+"
    } else {
    
        operate(singleFirst,singleSecond);
        operator = "+";
    }
 
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})

subtract.addEventListener("click", () => {
      if (operator == undefined){
        operator = "-"
    } else { 
        operate(singleFirst,singleSecond);
        operator = "-";
    }
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})

multiply.addEventListener("click", () => {
      if (operator == undefined){
        operator = "x"
    } else { 
        operate(singleFirst,singleSecond);
        operator = "x";
    }
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})

divide.addEventListener("click", () => {
      if (operator == undefined){
        operator = "/"
    } else {
         operate(singleFirst,singleSecond);
         operator = "/";
    }
    display.textContent = `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})


clr.addEventListener("click", () => {
firstNumber = []
singleFirst = firstNumber
operator = undefined
secondNumber = []
singleSecond = secondNumber
display.textContent = '\u00A0'
console.log(typeof(singleFirst))
})

dlt.addEventListener("click", () => {
    if (singleFirst !== 0 && operator != undefined && !singleSecond) {
      operator = undefined
    } else if ( singleSecond === 0 ) {
        let newFirst = firstNumber.slice(0,-1);
        firstNumber = newFirst
        singleFirst = Number(firstNumber.join(''));
    } else {
        let newSecond = secondNumber.slice(0,-1);
        secondNumber = newSecond
        singleSecond = Number(secondNumber.join(''));
    } 
    display.textContent =  `${singleFirst||''} ${operator||''} ${singleSecond||''}`
})


equals.addEventListener("click", () => {
    if (!singleSecond) {
        return false
    } else {
        operate(singleFirst,singleSecond)
    }
    
})

function operate(a,b){
    if (operator == "+") {
        display.textContent = mathAdd(a,b)
    } else if (operator == "-") {
       display.textContent = mathSubtract(a,b)
    } else if (operator == "x") {
        display.textContent = mathMultiply(a,b)
    } else if (operator == "/") {
        display.textContent = mathDivide(a,b)
    }
    firstNumber = Number(display.textContent)
    singleFirst = firstNumber
    operator = undefined
    secondNumber = []
    singleSecond = secondNumber
}