let userScore = 0;
let computerScore = 0;

let userScore_span = document.querySelector('#user-score');
let computerScore_span = document.querySelector('#computer-score');
let scoreBoard_div = document.querySelector('.scoreboard');
let result_div = document.querySelector('.result');
let rock_div = document.querySelector('#r');
let paper_div = document.querySelector('#p');
let scissors_div = document.querySelector('#s');

function getComputerChoice() {
  // Math.random randomizes the choices of r(rock), p(paper) and s(scissors).
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  if (letter === 's') return 'Scissors';
}
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )} You win!`;
}
function lose() {}
function draw() {
  console.log('draw');
}

function theGame(userChoice) {
  // User choice is now random as we've passed getComputerChoice
  const computerChoice = getComputerChoice();
  switch (
    userChoice + computerChoice // First three cases is when user wins. case 'user\computer'
  ) {
    // User wins
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    //   User loses
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    //   User draws
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    theGame('r');
  });
  paper_div.addEventListener('click', function() {
    theGame('p');
  });
  scissors_div.addEventListener('click', function() {
    theGame('s');
  });
}

main();
