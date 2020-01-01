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

function keepScore(round, playerScore, computerScore) {
    let outcomePrint = document.createElement("p");
    outcomePrint.textContent = round;
    results.appendChild(outcomePrint);
    if(round.includes('win')) {
        playerScore++;
    } else if(round.includes('lose')) {
        computerScore++;
    } else {
        playerScore;
        computerScore;
    }
    scores = [playerScore, computerScore];
    return scores;
}

function finalScore(winner, pScore, cScore) {
    if(pScore === 3) {
        winner.textContent = 'You win the game! Congratulations!';
        return 1;
    } else if(cScore === 3) {
        winner.textContent = 'You lost the game. Better luck next time!';
        return 2;
    } else {
        return 0;
    }
}

function game() {
    const container = document.querySelector("#container");
    const results = document.querySelector("#results");

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    
    let pScore = document.createElement("h2");
    let cScore = document.createElement("h2");
    let winner = document.createElement("h2");
    pScore.textContent = "Player:    " + playerScore;
    cScore.textContent = "Computer:  " + computerScore;
    results.appendChild(winner);
    results.appendChild(pScore);
    results.appendChild(cScore);
    
    let rockBtn = document.querySelector("button.rock");
    let paperBtn = document.querySelector("button.paper");
    let scissorsBtn = document.querySelector("button.scissors");

    rockBtn.addEventListener('click', () => {
        let outcome = playRound('rock', computerPlay());
        let score = keepScore(outcome, playerScore, computerScore);
        // Updates game() scores and HTML since this cannot be done in keepScore() due to scope
        pScore.textContent = "Player:    " + score[0];
        cScore.textContent = "Computer:  " + score[1];
        playerScore = score[0];
        computerScore = score[1];
        if (playerScore < 3 || computerScore < 3) finalScore(winner, score[0], score[1]);
    })
    paperBtn.addEventListener('click', () => {
        let outcome = playRound('paper', computerPlay());
        let score = keepScore(outcome, playerScore, computerScore);
        // Updates game() scores and HTML since this cannot be done in keepScore() due to scope
        pScore.textContent = "Player:    " + score[0];
        cScore.textContent = "Computer:  " + score[1];
        playerScore = score[0];
        computerScore = score[1];
        if (playerScore < 3 || computerScore < 3) finalScore(winner, score[0], score[1]);
    })
    scissorsBtn.addEventListener('click', () => {
        let outcome = playRound('scissors', computerPlay());
        let score = keepScore(outcome, playerScore, computerScore);
        // Updates game() scores and HTML since this cannot be done in keepScore() due to scope
        pScore.textContent = "Player:    " + score[0];
        cScore.textContent = "Computer:  " + score[1];
        playerScore = score[0];
        computerScore = score[1];
        if (playerScore < 3 || computerScore < 3) finalScore(winner, score[0], score[1]);
    })
}
game();