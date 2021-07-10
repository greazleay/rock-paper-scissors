//#1. Handles Computer play by returning rock, paper or scissors at random.

function computerPlay() {
    const computer = Math.floor((Math.random() * 3) + 1)
    switch (computer) {
        case 1:
            return `Rock`
        case 2:
            return `Paper`
        case 3:
            return `Scissors`
    } ;
};

//#2. Defines game play rules.

function playRound(playerBtn, computerSelect) {
    const playerSelect = playerBtn.target.value;
    
    switch (true) {
        case (playerSelect === "Rock" && computerSelect === 'Scissors'):
            result.textContent = `You Win! Rock crushes Scissors`;
            playerscorevalue.textContent = parseInt(playerscorevalue.textContent) + 1;
            break;
        case (playerSelect === "Rock" && computerSelect === 'Paper'):
            result.textContent = `You Lose! Paper beats Rock`;
            computerscorevalue.textContent = parseInt(computerscorevalue.textContent) + 1;
            break;
        case (playerSelect === "Paper" && computerSelect === 'Rock'):
            result.textContent = `You Win! Paper covers Rock`;
            playerscorevalue.textContent = parseInt(playerscorevalue.textContent) + 1;
            break;
        case (playerSelect === "Paper" && computerSelect === 'Scissors'):
            result.textContent = `You Lose! Scissors cuts Paper`;
            computerscorevalue.textContent = parseInt(computerscorevalue.textContent) + 1;
            break;
        case (playerSelect === "Scissors" && computerSelect === 'Paper'):
            result.textContent = `You Win! Scissors cuts Paper`;
            playerscorevalue.textContent = parseInt(playerscorevalue.textContent) + 1;
            break;
        case (playerSelect === "Scissors" && computerSelect === 'Rock'):
            result.textContent = `You Lose! Scissors can't crush Rock`;
            computerscorevalue.textContent = parseInt(computerscorevalue.textContent) + 1;
            break;
        default:
            result.textContent = `It's a tie`;
            break;
    }
    
    endGame()
};

//#3. Plays one round of the game.

const gameSession = (e) => { playRound(e, computerPlay()) };

//#4. Adds event listener to handle player selection

const playerSelects = document.querySelectorAll('input');
playerSelects.forEach(playerSelect => { playerSelect.addEventListener('click', gameSession) });

//#5. Ends the game session after player or computer scores 5.

function endGame() {
    if (playerscorevalue.textContent === "5" || computerscorevalue.textContent === "5") {
        playerSelects.forEach(playerSelect => { playerSelect.removeEventListener('click', gameSession) });

        const winner = document.createElement('p')
        container.appendChild(winner)
        switch (true) {
            case playerscorevalue.textContent === '5':
                winner.textContent = "You Won the game :) standing ovation for you!!!";
                winner.style.color = 'yellow';
                break;
            case computerscorevalue.textContent === '5':
                winner.textContent = "You lost the game, better luck next time";
                winner.style.color = 'red';
                break;
        }
        const button = document.createElement('button');
        button.textContent = `Play Again?`;
        container.appendChild(button);
        button.addEventListener('click', () => { location.reload() })
    }
}



