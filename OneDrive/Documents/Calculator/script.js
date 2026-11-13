const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function calculate(operation) {
    if (num1.value === "" || num2.value === "") {
        document.getElementById("result").textContent = "Error: Please enter both numbers.";
        return;
    }
    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);

    if (operation === "add") {
        const result = firstNumber + secondNumber;

        console.log(result);
        document.getElementById("result").textContent = result;
    }

    else if (operation === "subtract") {
        const result = firstNumber - secondNumber;

        console.log(result);
        document.getElementById("result").textContent = result;
    }

    else if (operation === "multiply") {
        const result = firstNumber * secondNumber;

        console.log(result);
        document.getElementById("result").textContent = result;
    }

    else if (operation === "divide") {

    if (secondNumber === 0) {
        document.getElementById("result").textContent = "Error: Division by zero is not allowed.";
    } else {
        const result = firstNumber / secondNumber;

        console.log(result);
        document.getElementById("result").textContent = result;
    }
}
} 
