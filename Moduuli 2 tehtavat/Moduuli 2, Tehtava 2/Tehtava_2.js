// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the
// web page in an ordered list (<ol>) in alphabetical order. (2p)

let participants = [];

let input = prompt("Give the number of participants:");
let numberOfParticipants = Number(input);

if (!isNaN(numberOfParticipants) && numberOfParticipants > 0) {
    for (let i = 0; i < numberOfParticipants; i++) {
        let participantName = prompt(`Enter the name of participant ${i + 1}:`);
        participants.push(participantName);
    }

participants.sort();

let listHtml = "<ul>";
for (let name of participants) {
    listHtml += `<li>${name}</li>`;
}
listHtml += "</ul>";

document.body.innerHTML = listHtml;
} else {
    console.log("Please enter a valid number of participants.");
}
