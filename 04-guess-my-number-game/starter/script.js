'use strict';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

function setMessage(text) {
  messageEl.textContent = text;
}

function setNumber(value) {
  numberEl.textContent = value;
}

function setScore(value) {
  scoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
  guessEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessEl.value = '';
}

//GAME STATEMENT
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('Secret Number:', secretNumber);

let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  disablePlay(false);
  setBackground('');
}

renderInitialUI();

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }

  setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener('click', function () {
  guessEl.focus();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New secret number is:', secretNumber);
  document.querySelector('.message').textContent = ' Start Guessing....';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener('click', function () {
  guessEl.focus();
});

// //basic game logic

//   if (!guess) {
//     document.querySelector('.message').textContent = 'Please input a number!';
//     return;
//   }

//   if (guess < 1 || guess > 20) {
//     document.querySelector('.message').textContent =
//       'Please Enter the Number between 1 and 20!';
//     return;
//   }

//   if (guess === secretNumber) {
//     console.log('Your guess is correct');
//     document.querySelector('.message').textContent = 'Correct Number!';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.message').textContent = '🎉 Game Over!';
//     document.querySelector('.guess').value = '';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//     document.querySelector('.message').textContent = 'WOW! You Have Won!';
//     document.querySelector('.guess').disabled = true;
//     document.querySelector('.check').disabled = true;
//     document.body.style.backgroundColor = 'green';
//   } else if (guess > secretNumber) {
//     console.log('Too high!');
//     document.querySelector('.message').textContent = 'Too high!!!';
//     score--;
//     document.querySelector('.score').textContent = score;

//     if (score < 1) {
//       document.querySelector('.message').textContent =
//         'You have Lost! Bleh! ;>';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.guess').disabled = true;
//       document.querySelector('.check').disabled = true;
//       document.querySelector('.message').textContent = 'GAME OVERRRR!!';
//     }
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too low!!!!';
//     score--;
//     document.querySelector('.score').textContent = score;

//     if (score < 1) {
//       document.querySelector('.message').textContent =
//         'You have Lost! Bleh! ;>';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.guess').disabled = true;
//       document.querySelector('.check').disabled = true;
//       document.body.style.backgroundColor = 'red';
//       document.querySelector('.message').textContent = '💀 Game Over!';
//       document.querySelector('.guess').value = '';
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log('New secret number is:', secretNumber);
//   document.querySelector('.message').textContent = ' Start Guessing';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.guess').value = '';
//   document.querySelector('.guess').disabled = false;
//   document.querySelector('.check').disabled = false;
//   document.body.style.backgroundColor = '';
// });
