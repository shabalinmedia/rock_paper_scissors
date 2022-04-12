const buttons = document.querySelectorAll('button');
let computerScore = 0;
let userScore = 0;
// Click to buttons returns "rock", "paper" or "scissors" and runs playRound().
let playerSelection = buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});


// Computer randomly returns 'rock', 'paper' or 'scissors'.
function computerPlay() {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let randomElement = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return randomElement;
}


// One round function with conditions of winning or loosing.
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    console.log = function(message) {
        document.getElementById('status').innerHTML = message;
    };

    document.getElementById('userScore').innerHTML = `Your score is: ${userScore}`;
    document.getElementById('computerScore').innerHTML = `Computer score is: ${computerScore}`;
    game();
    
    if (playerSelection === computerSelection) {
        console.log("No one wins.")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        console.log("Computer wins.")   
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore +=1;
        console.log("Player wins.")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore +=1;
        console.log("Player wins.")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        console.log("Computer wins.")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore +=1;
        console.log("Player wins.")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        console.log("Computer wins.") 
    }    
}

function game() {
    if (userScore === 5) {
        alert("You Won!");
        window.location.reload();
    }
    else if (computerScore === 5) {
        alert("You Lost!");
        window.location.reload();
    }
}



