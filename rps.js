let playerScore = 0
let npcScore = 0
let draws = 0

function resetGame() {
    //reset game
}

function startGame() {
// play the game until someone wins 5 times
    playRound();

    setWins();
}


// function that randomly returns computer choice
// TODO update the DOM with computerSelection
function getComputerChoice () {
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


// function that plays one round of rps, two parameters player choice, and computer choice

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerWin + 'rock beats scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWin + 'paper beats rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWin + 'scissors beats paper'
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return npcWin + 'rock beats scissors'
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return npcWin + 'paper beats rock'
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return npcWin + 'scissors beats paper'
    } else {
        return draw
    }     
}

let draw = 'Draw! no points!'
let playerWin = 'You win!'
let npcWin = 'You lose!'

// function that calls playRound to play a 5 round game that keeps score and outputs outcome

//for (let i = 0; i < 5; i++) {
    //let playerSelection = window.prompt('rock,paper, or scissors?').toLowerCase();

    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    game(roundResult);
//}

function checkWinner (result) {
    if ((result === playerWin + 'rock beats scissors') ||
        (result === playerWin + 'paper beats rock') ||
        (result === playerWin + 'scissors beats paper')) {
        playerScore++;
    } else if  ((result === npcWin + 'rock beats scissors') || 
                (result === npcWin + 'paper beats rock') || 
                (result === npcWin + 'scissors beats paper')) {
            npcScore++;
    } else {
        draws++;
    }    
}

(gameover());

function gameover() {
    if (playerScore === npcScore) {
    ('Draw! No winner');
    } else if (npcScore > playerScore) {
    ('NPC WINS! you suck (<.<)');
    } else {
    ('PLAYER WINS! (^.^)');
    }
    return 'GAMEOVER THANKS FOR PLAYING!'
}