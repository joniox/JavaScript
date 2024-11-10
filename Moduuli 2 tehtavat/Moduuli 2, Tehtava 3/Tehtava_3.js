// Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse
// alphabetical order. (2p)

let dogs = [];

while (dogs.length < 6) {
    let input = prompt("Give a name of a dog:");
    if (input) {
        dogs.push(input);
    }
}

dogs.sort();

let listHtml = "<ul>";
for (let name of dogs) {
    listHtml += `<li>${name}</li>`;
}
listHtml += "</ul>";

document.body.innerHTML = listHtml;