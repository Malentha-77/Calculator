// Get the input and result elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultDisplay = document.getElementById("result");

// Perform the selected calculation
function calculate(operation) {
    if (num1.value === "" || num2.value === "") {
        resultDisplay.textContent = "Error: Please enter both numbers.";
        return;
    }

    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);
    let result;

    if (operation === "add") {
        result = firstNumber + secondNumber;
    } else if (operation === "subtract") {
        result = firstNumber - secondNumber;
    } else if (operation === "multiply") {
            result = firstNumber * secondNumber;
    } else if (operation === "divide") {
        // Prevent division by zero
        if (secondNumber === 0) {
            resultDisplay.textContent = "Error: Division by zero is not allowed.";
            return;
        } 

        result = firstNumber / secondNumber;
    } else {
        resultDisplay.textContent = "Error: Invalid operation.";
        return;
    }

    resultDisplay.textContent = result;

}

function clearCalculator() {
    num1.value = "";
    num2.value = "";
    resultDisplay.textContent = "";
}
