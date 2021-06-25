// Body and it's children

const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const script = document.createElement('script');
script.src = './index.js';
body.appendChild(script);

// Container: First block

const h1 = document.createElement('h1');
h1.textContent = `Rock, Paper, Scissors`;

const p = document.createElement('p');
p.textContent = `First to reach 5 wins!!!`;

// Container: Second Block - Rock, Paper & Scissors

const btns = document.createElement('div');
btns.classList.add('btns');

const rock = document.createElement('input');
rock.setAttribute('type', 'image');
rock.setAttribute('src', './resources/grock.png');
rock.setAttribute('alt', 'rock');
rock.setAttribute('value', 'Rock');

const paper = document.createElement('input');
paper.setAttribute('type', 'image');
paper.setAttribute('src', './resources/paper.png');
paper.setAttribute('alt', 'paper');
paper.setAttribute('value', 'Paper');

const scissors = document.createElement('input');
scissors.setAttribute('type', 'image');
scissors.setAttribute('src', './resources/scissors.png');
scissors.setAttribute('alt', 'scissors');
scissors.setAttribute('value', 'Scissors');

btns.appendChild(rock);
btns.appendChild(paper);
btns.appendChild(scissors);

// Container: Third Block - game scores display
const score = document.createElement('div');
score.classList.add('score');

const playerscore = document.createElement('p');
playerscore.textContent = `Player Score: `;

const playerscorevalue = document.createElement('span');
playerscorevalue.textContent = `0`;
playerscore.appendChild(playerscorevalue);

const computerscore = document.createElement('p');
computerscore.textContent = `Computer Score: `;

const computerscorevalue = document.createElement('span');
computerscorevalue.textContent = `0`;
computerscore.appendChild(computerscorevalue);

score.appendChild(playerscore);
score.appendChild(computerscore);

// Final block - display winner & restart again
const result = document.createElement('p');
result.classList.add('result');
result.textContent = `Let the games begin`;

container.appendChild(h1);
container.appendChild(p);
container.appendChild(btns);
container.appendChild(score);
container.appendChild(result);



