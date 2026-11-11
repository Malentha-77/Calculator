const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function calculate(operation) {
    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);

    if (operation === "add") {
        const result = firstNumber + secondNumber;

        console.log(result);
        document.getElementById("result").textContent = result;
    }
}
