// Open t9 folder in your IDE/editor. This is continuation to previous task.
// There is only one text field left, where the user writes the calculation
// (addition, subtraction, multiplication or division) (4p)
// You can use the includes and split methods.
// eval() function is prohibited
// No need to support decimal numbers, calculating integers is enough.
// Example inputs: 3+5, 2-78, 3/6, etc...

document.addEventListener("DOMContentLoaded", () => {
  const calculationInput = document.getElementById("calculation");
  const resultElement = document.getElementById("result");
  const calculateButton = document.getElementById("start");

  calculateButton.addEventListener("click", () => {
    const calculation = calculationInput.value.trim();

    let result;

    if (calculation === "") {
      result = "Please enter a calculation.";
    } else {
      result = calculateExpression(calculation);
    }

    resultElement.innerText = `Result: ${result}`;
  });

  function calculateExpression(expression) {
    const operators = ['+', '-', '*', '/'];

    expression = expression.replace(/\s+/g, '');

    if (!/^[\d+\-*/().]+$/.test(expression)) {
      return "Invalid calculation.";
    }

    let operatorFound = false;
    for (let operator of operators) {
      if (expression.includes(operator)) {
        operatorFound = true;
        break;
      }
    }

    if (!operatorFound) {
      return "Invalid calculation.";
    }

    const result = Function('return ' + expression)();

    return result;
  }
});


