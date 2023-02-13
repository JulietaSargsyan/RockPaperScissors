const options = document.querySelectorAll('.options');
const userScore = document.querySelector('.score__user');
const computerScore = document.querySelector('.score__computer');
const restartBtn = document.querySelector('#restart-btn');
const winnerText = document.querySelector('#winnerSpan');
const userPick = document.querySelector('#user-choice');
const computerPick = document.querySelector('#computer-choice');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#close-btn');

const scores = {
    user: 0,
    computer: 0
}

function start(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice)
    console.log(playerChoice, computerChoice, winner);
    showWinner(winner, playerChoice, computerChoice);
    modal.style.display = 'flex';
}

function getComputerChoice() {
    const randomNum = Math.random()*10;
    if(randomNum < 3.4) {
        return 'rock'
    } else if(randomNum < 6.7) {
        return 'paper'
    }
    return 'scissors'
}

function getWinner(user, computer) {
    if(user === computer) {
        return 'draw'
    } else if(user === 'rock') {
        if(computer === 'paper') {
            return 'computer'
        } else {
            return 'user'
        }
    } else if(user === 'paper') {
        if(computer === 'scissors') {
            return 'computer'
        } else {
            return 'user'
        }
    } else if(user === 'scissors') {
        if(computer === 'rock') {
            return 'computer'
        } else {
            return 'user'
        }
    }
}

function showWinner(winner, user, computer) {
    userPick.src = `./img/${user}.png`;
    computerPick.src = `./img/${computer}.png`;

    if(winner === 'user') {
        scores.user++;
        winnerText.style.color = 'green';
    } else if(winner === 'computer') {
        scores.computer++;
        winnerText.style.color = 'red';
    }

    if(winner === 'draw') {
        winnerText.innerText = "It's a DRAW"
    } else {
        winnerText.innerText = `The winner is ${winner}`;
    }
    
    userScore.innerText = scores.user;
    computerScore.innerText = scores.computer;
   
}

options.forEach(option => option.addEventListener('click', start));

restartBtn.addEventListener('click', () => {
    scores.user = 0;
    scores.computer = 0;

    userScore.innerText = scores.user;
    computerScore.innerText = scores.computer;
})

closeBtn.addEventListener('click', () => modal.style.display = 'none');