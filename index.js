const choices = ["rock", "paper", "scissors"];

function getComputerChoice (choices) {
    return Math.random(Math * 3);
}

function playRound (playerSelection, computerSelection) {

    // your code here
}

const playerSelection = prompt(message);
const computerSelection = getComputerChoice (choices);

console.log(playRound(playerSelection, computerSelection));


function game () {
    for (let i= 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    };
}
