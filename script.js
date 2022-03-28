// Computer randomly returns 'rock', 'paper' or 'scissors'.
function computerPlay() {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let randomElement = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return randomElement
}

// One round function with conditions of winning or loosing.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "No one wins.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer wins."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player wins."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player wins."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player wins."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins."
    }
}

// Looping playRound() five times and reports a winner or looser at the end.
function game() {
    for (i = 0; i < 5; i++) {
        i = playRound(playerSelection, computerSelection);
    }

}


let playerSelection = prompt("Type rock, paper or scissors: ").toLowerCase();
const computerSelection = computerPlay();
console.log(game())