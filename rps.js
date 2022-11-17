
// get computer to randomly pick rock(0), paper(1), or scissors(2)
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3)
    // make computer print the outcome of its choice
    switch (randomNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2: 
            return 'scissors'
    }
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie game!'
    } else {
        return 'not a tie game'
    }
        
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));