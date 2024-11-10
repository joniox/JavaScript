// Write a voting program as described below for small-scale meeting use. (8p)
//
// The program asks for the number of candidates.
//
// Then the program asks for the names of the candidates: 'Name for candidate 1
//
// Store the candidates' names and initial vote count in objects like this:
//
// The program asks for the number of voters.
//
// The program asks each voter in turn who they will vote for.
//
// Voter shoud enter candidate name. If the voter enters an empty
// value instead of the voting number, it will be interpreted as an empty vote.
//
// The program announces the name of the winner and the results by printing it to the console:

let candidates = [];
let emptyVotes = 0;

let input = prompt("Give the number of candidates:");
let numberOfCandidates = Number(input);

if (!isNaN(numberOfCandidates) && numberOfCandidates > 0) {
    for (let i = 0; i < numberOfCandidates; i++) {
        let candidateName = prompt(`Enter the name of candidate ${i + 1}:`);
        candidates.push({ name: candidateName, votes: 0 });
    }

    alert("List of candidates and their initial vote count:");
    console.log(candidates);
    for (let i = 0; i < candidates.length; i++) {
        alert(`${i + 1}. ${candidates[i].name}: ${candidates[i].votes} votes`);
    }
}

let numberOfVotersInput = prompt("Give the number of voters:");
let numberOfVoters = Number(numberOfVotersInput);

if (!isNaN(numberOfVoters) && numberOfVoters > 0) {
    for (let i = 0; i < numberOfVoters; i++) {
        let voterVote = prompt(`Voter ${i + 1}, choose a candidate by name or leave it blank for an empty vote:`);

        let validVote = false;

        if (voterVote.trim() === "") {
            emptyVotes++;
            alert("This vote has been recorded as an empty vote.");
        } else {
            for (let j = 0; j < candidates.length; j++) {
                if (candidates[j].name.toLowerCase() === voterVote.toLowerCase()) {
                    candidates[j].votes++;
                    validVote = true;
                    alert(`Vote for ${voterVote} has been recorded.`);
                    break;
                }
            }

            if (!validVote) {
                alert("Invalid candidate name. This vote will be recorded as empty.");
                emptyVotes++;
            }
        }
    }

    alert("Final vote counts:");
    for (let i = 0; i < candidates.length; i++) {
        alert(`${i + 1}. ${candidates[i].name}: ${candidates[i].votes} votes`);
    }

    let winner = candidates.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);
    console.log(`\nThe winner is: ${winner.name} with ${winner.votes} votes!`);
    console.log(`Total empty votes: ${emptyVotes}`);

    console.log("\nFinal vote counts:");
    candidates.forEach((candidate, index) => {
        console.log(`${index + 1}. ${candidate.name}: ${candidate.votes} votes`);
    });
    console.log(`Empty votes: ${emptyVotes}`);
}
