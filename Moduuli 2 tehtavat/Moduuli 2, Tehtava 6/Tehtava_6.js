// Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters. Write a main program
// that rolls the dice until the result is 6. The main program
// should print out the result of each roll in an unordered list (<ul>). (2p)

function diceRoll() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

let roll;

while (roll !== 6) {
  roll = diceRoll();

  let listItem = document.createElement('li');
  listItem.textContent = `Rolled: ${roll}`;

  document.querySelector('ul').appendChild(listItem);
}




