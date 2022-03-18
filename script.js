'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct secretNumber';
console.log(document.querySelector('.message').textContent);

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//button handling
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('no number');

    //players wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct number😍🎊';
    displayMessage('Correct number😍🎊');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when guess is too high
  else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '↗ too high' : '↙too low👍';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent =
      ('🧨🎃 OOMPs you lost the GAME');
      displayMessage('🧨🎃 OOMPs you lost the GAME');
      document.querySelector('.message').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing.......';
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(87, 38, 221';
  document.querySelector('.number').style.width = '22rem';
});
