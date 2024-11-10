// Write a program that prompts the user for numbers. When the user enters
// one of the numbers he previously entered, the program will announce
// that the number has already been given and stops its operation
// and then prints all the given numbers to the console in ascending order. (2p)

let numbers = [];

while (true) {
  let input = prompt("Give a number:");

  let num = parseInt(input);

  if (numbers.includes(num)) {
    alert("Number has already been given");
    break
  }
  else {
    numbers.push(num);
  }
}

numbers.sort((a, b) => a - b);
console.log(numbers)
