// Write a function called concat(), which receives an array of strings
// as a parameter. The function returns a string formed by concatenating
// the elements of the array. (2p)
//
// Example: In a four-item array, there are items Johnny, DeeDee,
// Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
//
// Do not use array.join() function
//
// You can hardcode the array, no need for prompt().
//
// Print the result to HTML document.

const ramones = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(array) {
  return array.join(""); // Joins array elements into a single string with no separators
}

document.querySelector('#target').innerHTML = concat(ramones);

