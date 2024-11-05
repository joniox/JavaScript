// Write a program that prompts for three integers. The program prints the sum,
// product and average of the numbers to the HTML document. (3p)
//
// remember to convert strings to numbers when adding them together.

const firstNumber = Number(prompt('Give first number:'));
const secondNumber = Number(prompt('Give second number:'));
const thirdNumber = Number(prompt('Give third number:'));

const sum = firstNumber + secondNumber + thirdNumber;
const product = firstNumber * secondNumber * thirdNumber;
const average = sum / 3;

document.querySelector('#target').innerHTML = `
  Sum of the three numbers is ${sum}.<br>
  Product of the three numbers is ${product}.<br>
  Average of the three numbers is ${average}.
`;
