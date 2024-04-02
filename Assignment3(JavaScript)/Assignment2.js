function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) console.log("division not possible");
    else {
        return a / b;
    }
}

var firstNumber = prompt('Enter First integer number');
var secondNumber = prompt('Enter Second integer number');

console.log("Multiplication of ", firstNumber, " and ", secondNumber, " is : ", multiply(firstNumber, secondNumber));

console.log("Division of ", firstNumber, " and ", secondNumber, " is : ", divide(firstNumber, secondNumber));