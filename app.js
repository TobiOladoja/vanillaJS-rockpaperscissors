const userScore = 0;
const computerScore = 0;

let userScore_span = document.querySelector('#user-score');
let computerScore_span = document.querySelector('#computer-score');
let scoreBoard_div = document.querySelector('.scoreboard');
let result_div = document.querySelector('.result');
let rock_div = document.querySelector('#r');
let paper_div = document.querySelector('#p');
let scissors_div = document.querySelector('#s');

rock_div.addEventListener('click', function() {
  userScore_span.innerHTML++;
});
