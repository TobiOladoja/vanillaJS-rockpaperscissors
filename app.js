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
  console.log('computer Choice is: ' + computerChoice);
  console.log('user Choice is: ' + userChoice);
}

theGame('c');

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
