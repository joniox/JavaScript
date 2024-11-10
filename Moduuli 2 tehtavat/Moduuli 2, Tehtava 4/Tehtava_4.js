// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from
// the largest to the smallest. (2p)

let numbers = [];

while (true) {
  let input = prompt("Give a number:");
  let num = parseInt(input);

  if (num === 0) break;

  numbers.push(num);
}

numbers.sort((a, b) => b - a);

console.log(numbers);

