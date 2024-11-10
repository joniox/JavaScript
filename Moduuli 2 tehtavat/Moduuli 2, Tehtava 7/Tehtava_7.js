// Modify the function above so that it gets the number of sides on the
// dice as a parameter. With the modified function you can for example
// roll a 21-sided role-playing dice. The difference to the last exercise
// is that the dice rolling in the main program continues
// until the program gets the maximum number on the dice,
// which is asked from the user at the beginning. (2p)

let numberOfSides = parseInt(prompt('Give a number of sides on a dice:'));

function diceRoll() {
  let roll = Math.floor(Math.random() * numberOfSides) + 1;
  return roll;
}

let roll;

while (roll !== numberOfSides) {
  roll = diceRoll();

  let listItem = document.createElement('li');
  listItem.textContent = `Rolled: ${roll}`;

  document.querySelector('ul').appendChild(listItem);
}
