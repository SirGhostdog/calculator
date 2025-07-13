function mathAdd(a,b) {
    return a + b
}
function mathSubtract(a, b){
    return a - b
}
function mathDivide(a,b) {
    return a / b
}
function mathMultiply(a,b) {
    return a * b
}

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const zero = document.querySelector("#zero")
const add = document.querySelector("#plus")
const subtract = document.querySelector("#minus")
const multiply = document.querySelector("#times")
const divide = document.querySelector("#from")
const equals = document.querySelector("#equal")
const clr = document.querySelector("#clear")
const dlt = document.querySelector("#delete")
const calcbuttons = document.querySelectorAll(".calcbutton")

let firstNumber = []
let operator;
let secondNumber = []

one.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(1)
    } else {secondNumber.push(1)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
two.addEventListener("click", () => {
     if (operator == undefined) {
        firstNumber.push(2)
    } else {secondNumber.push(2)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
three.addEventListener("click", () => {
     if (operator == undefined) {
        firstNumber.push(3)
    } else {secondNumber.push(3)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
four.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(4)
    } else {secondNumber.push(4)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
five.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(5)
    } else {secondNumber.push(5)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
six.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(6)
    } else {secondNumber.push(6)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
seven.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(7)
    } else {secondNumber.push(7)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
eight.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(8)
    } else {secondNumber.push(8)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
nine.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(9)
    } else {secondNumber.push(9)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
zero.addEventListener("click", () => {
    if (operator == undefined) {
        firstNumber.push(1)
    } else {secondNumber.push(1)}
    
    console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
add.addEventListener("click", () => {
 operator = "+"
 console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
subtract.addEventListener("click", () => {
 operator = "-"
 console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
multiply.addEventListener("click", () => {
 operator = "*"
 console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
divide.addEventListener("click", () => {
 operator = "/"
 console.log(`Math: ${firstNumber} ${operator} ${secondNumber}`)
})
clr.addEventListener("click", () => {
 
})
dlt.addEventListener("click", () => {

})
equals.addEventListener("click", () => {

})





function operate(math) {

}