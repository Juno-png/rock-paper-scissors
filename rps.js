let playerScore = 0;
let computerScore = 0;
let draws = 0;

//Computer choice
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
        return 'rock'
    case 1:
        return 'paper'
    case 2:
        return 'scissors'
  }
}

//Plays one round of RPS
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return draw;
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
        return playerWinRound;
  } else {
    return computerWinRound;
  }
}

//Specifies round win/game win messages
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins best of 5! Congratulations!"
let computerWin = "Computer wins best of 5! Congratulations!"


//For loop that plays multiple rounds
for (let i = 0; i < 1000; i++) {
  let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
  const computerSelection = getComputerChoice();
  let roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
  gameScore(roundResult);
  console.log("Your score is " + playerScore);
  console.log("The computer's score is " + computerScore);

  if (playerScore === 3 || computerScore === 3) {
    break;
  }
}


//Keeps score and prints out correct messages based on score
function gameScore(result) {

  if (result === playerWinRound) {
    playerScore++;
  } else if (result === draw) {
    draws++;
  } else {
    computerScore++;
  }


  if (playerScore == 3) {
    console.log(playerWin);
    return;
  } else if (computerScore == 3) {
    console.log(computerWin);
  }
}