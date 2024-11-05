// Write a program that rolls user defined number of dice and displays
// the sum of the results of the dice rolls.(2p)
//
// First, program asks the user for the number of dice rolls.
// Then the program throws a die as many times as the user defined.
// Print the sum of the results in the console or in the HTML document.

const diceRolls = Number(prompt('Give a number of dice rolls:'));

function rollDice(diceRolls) {
  const results = [];
  let sum = 0;

  for (let i = 0; i < diceRolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    results.push(roll);
    sum += roll;
  }

  document.getElementById('results').textContent = `Rolls: ${results.join(', ')}`;
  document.getElementById('sum').textContent = `Total Sum: ${sum}`;
}

rollDice(diceRolls);

