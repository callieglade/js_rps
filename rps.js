function computerPlay() {
    let pick = Math.floor(Math.random() * 3);
    if(pick === 0) {
        return 'rock';
    } else if(pick === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    switch (player) {
        case 'rock': 
            if(computerSelection === 'rock') {return 'Its a draw. Go again';}
            if(computerSelection === 'paper') {return 'You lose! ' + computerSelection + ' beats ' + player;}
            if(computerSelection === 'scissors') {return 'You win! ' + player + ' beats ' + computerSelection;}
            break;
        case 'paper':
            if(computerSelection === 'rock') {return 'You win! ' + player + ' beats ' + computerSelection;}
            if(computerSelection === 'paper') {return 'Its a draw. Go again';}
            if(computerSelection === 'scissors') {return 'You lose! ' + computerSelection + ' beats ' + player;}
            break;
        case 'scissors':
            if(computerSelection === 'rock') {return 'You lose! ' + computerSelection + ' beats ' + player;}
            if(computerSelection === 'paper') {return 'You win! ' + player + ' beats ' + computerSelection;}
            if(computerSelection === 'scissors') {return 'Its a draw. Go again';}
            break;
        default: 
            return 'Invalid input. Try again';
    }
}

const container = document.querySelector("#container");
const results = document.querySelector("#results");

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = '';
    console.log('Welcome to Rock, Paper, Scissors!');
    
    let rockBtn = document.querySelector("button.rock");
    let paperBtn = document.querySelector("button.paper");
    let scissorsBtn = document.querySelector("button.scissors");

    rockBtn.addEventListener('click', () => {round = playRound('rock', computerPlay);} )
    paperBtn.addEventListener('click', () => {round = playRound('paper', computerPlay);} )
    scissorsBtn.addEventListener('click', () => {round = playRound('scissors', computerPlay);} )

    console.log(round);
    if(round.includes('win')) {
        playerScore++;
    } else if(round.includes('lose')) {
        computerScore++;
    } else {
        playerScore;
        computerScore;
    }
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);
    if(playerScore === 3) {
        console.log('You win the game! Congratulations!');
        console.log('FINAL SCORE');
        console.log('PLAYER: ' + playerScore + ' COMPUTER: ' + computerScore);
    } else {
        console.log('You lost the game. Better luck next time!');
        console.log('FINAL SCORE');
        console.log('PLAYER: ' + playerScore + ' COMPUTER: ' + computerScore);
    }
}
game();