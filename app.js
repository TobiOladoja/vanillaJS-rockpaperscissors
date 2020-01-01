const userScore = 0;
const computerScore = 0;

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

function theGame(userChoice) {
  // User choice is now random as we've passed getComputerChoice
  const computerChoice = getComputerChoice();
  switch (
    userChoice + computerChoice // First three cases is when user wins. case 'user\computer'
  ) {
    // User wins
    case 'rp':
    case 'pr':
    case 'sp':
      console.log('User wins');
      break;
    //   User loses
    case 'rp':
    case 'ps':
    case 'sr':
      console.log('User loses');
      break;
    //   User draws
    case 'rr':
    case 'pp':
    case 'ss':
      console.log("You've drawn with the computer");
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
