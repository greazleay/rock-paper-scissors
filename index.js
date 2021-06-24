const playerSelects = document.querySelectorAll('input');
const result = document.querySelector('.result');
const playerscore = document.querySelector('.playerscore');
const computerscore = document.querySelector('.computerscore');
const button = document.querySelector('button');

function computerPlay() {
    let m = 1, n = 4;
    switch (Math.floor(Math.random() * (n - m) + m)) {
        case 1:
            return `Rock`
        case 2:
            return `Paper`
        case 3:
            return `Scissors`
    } ;
};

const gameSession = (e) => { playRound(e, computerPlay()) };

function playRound(playerBtn, computerSelect) {
    const playerSelect = playerBtn.target.value;
    
    switch (true) {
        case (playerSelect === "Rock" && computerSelect === 'Scissors'):
            result.textContent = `You Win! Rock crushes Scissors`;
            playerscore.textContent = parseInt(playerscore.textContent) + 1;
            break;
        case (playerSelect === "Rock" && computerSelect === 'Paper'):
            result.textContent = `You Lose! Paper beats Rock`;
            computerscore.textContent = parseInt(computerscore.textContent) + 1;
            break;
        case (playerSelect === "Paper" && computerSelect === 'Rock'):
            result.textContent = `You Win! Paper covers Rock`;
            playerscore.textContent = parseInt(playerscore.textContent) + 1;
            break;
        case (playerSelect === "Paper" && computerSelect === 'Scissors'):
            result.textContent = `You Lose! Scissors cuts Paper`;
            computerscore.textContent = parseInt(computerscore.textContent) + 1;
            break;
        case (playerSelect === "Scissors" && computerSelect === 'Paper'):
            result.textContent = `You Win! Scissors cuts Paper`;
            playerscore.textContent = parseInt(playerscore.textContent) + 1;
            break;
        case (playerSelect === "Scissors" && computerSelect === 'Rock'):
            result.textContent = `You Lose! Scissors can't crush Rock`;
            computerscore.textContent = parseInt(computerscore.textContent) + 1;
            break;
        default:
            result.textContent = `It's a tie`;
            break;
    }

    if (playerscore.textContent === "5" || computerscore.textContent === "5") {
        playerSelects.forEach(playerSelect => { playerSelect.removeEventListener('click', gameSession) });
        button.style.display = "inline-block";
    }
};

playerSelects.forEach(playerSelect => { playerSelect.addEventListener('click', gameSession) });

button.addEventListener('click', () => { location.reload() })



