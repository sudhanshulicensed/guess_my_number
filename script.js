'use strict';

let highscore = 0;
let secretNumber = Math.trunc(Math.random() *20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When guess is not a number or empty
  if(!guess) {
    console.log(displayMessage('No number ⛔'));
  } 
  // When guess is equal to the secretNumber
  else if (guess === secretNumber) {
    displayMessage("Correct Number 🎉")
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Highscore
    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
//When guess is wrong
  else if(guess !== secretNumber) {
      if(score > 1) {
        displayMessage(guess > secretNumber ? "Too High 📈" : "Too low 📉");
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage("💥 You lost the game !!");
        document.querySelector('.score').textContent = '0';
      }  
  }
}); 

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() *20) + 1;
  document.querySelector('.message').textContent= 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = " ";
  document.querySelector('body').style.backgroundColor = '#222';
})
