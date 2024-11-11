// Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
// There are two input fields where user enters numbers.
// Based on the drop-down list, calculator performs addition, subtraction,
// multiplication or division of these two numbers.
// Use the value attribute of <option> elements to decide which operation
// the calculator needs to do.
// Example. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_value2
// Show the result in <p id="result"> when the button is clicked.

document.addEventListener("DOMContentLoaded", () => {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const operationSelect = document.getElementById("operation");
  const resultElement = document.getElementById("result");
  const calculateButton = document.getElementById("start");

  calculateButton.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
      resultElement.innerText = "Please enter valid numbers.";
      return;
    }

    let result;

    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "multi":
        result = num1 * num2;
        break;
      case "div":
        if (num2 === 0) {
          result = "Cannot divide by zero.";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Invalid operation.";
    }

    resultElement.innerText = `Result: ${result}`;
  });
});
