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
        computerScore += 1;
        return "Computer wins."    
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore +=1;
        return "Player wins."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore +=1;
        return "Player wins."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return "Computer wins."   
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore +=1;
        return "Player wins."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return "Computer wins."  
    }
}


// Looping playRound() five times.
function game() {
    while (commonScore < 5) {
        const playerSelection = prompt("Type rock, paper or scissors: ").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        commonScore++
        console.log(computerScore);
        console.log(userScore);
    } 
}


// Reports a winner or looser at the end.
function result() {
    game();
    if (computerScore > userScore) {
        console.log("Computer won!")
    } else if (computerScore < userScore) {
        console.log("Great! You won!")
    } else if (computerScore === userScore) {
        console.log("Nobody won...")
    }
}

let computerScore = 0;
let userScore = 0;
let commonScore = computerScore + userScore;

result()


