// Write a program that prompts for user's name and then greets the user.
// Print the result to the HTML document: Hello, Name! (2p)

const name = prompt('Type your name.');

document.querySelector('#target').innerHTML = 'Hello, ' + name + '!';