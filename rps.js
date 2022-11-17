let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();


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

console.log('NPC chose: ', computerSelection);

function getPlayerChoice () {
    let playerchoice = prompt('Choose your weapon')
    return playerchoice.toLowerCase()
}

console.log('player chose: ', playerSelection);

// play one round and declare winner or tie
function playRound(playerSelection, computerSelection) {

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        return 'You win! ' + playerSelection + ' beats ' + computerSelection
    } else if (playerSelection === computerSelection) {
        return 'tie'
    } else {
        return 'You lost! ' + computerSelection + ' beats ' + playerSelection
    }
}

console.log(playRound(playerSelection, computerSelection));