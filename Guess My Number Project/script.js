"use strict";
console.log(document.querySelector(".message").textContent);
function displayText(className, message) {
  document.querySelector(className).textContent = message;
}

  


// document.querySelector('.message').textContent = `🎉Correct Number!`;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = '?';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
let score = 20;
let highScore = 0;
let correctNumber = Math.trunc(Math.random() * 20) + 1;
displayText(".number", "?");
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayText(".message", "🚨Invalid Number");
  } else if (guess === correctNumber) {
    displayText(`.message`, `⭐Correct Number`);
    displayText(".number", correctNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      displayText(highScore);
    }
  } else if (guess !== correctNumber) {
    
    if (score > 1) {
displayText(".message", guess > correctNumber ? `Too high` : `Too low`);
      score--;
      displayText(".score", score);
    } else {
      displayText(".message", "You lost the game");
      displayText(".score", 0);
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  displayText(".score", (score = 20));
  document.querySelector(".guess").value = null;
  displayText(".message", "Start guessing");
  document.querySelector("body").style.backgroundColor = "#222";
  //   document.querySelector("number").style.width = "15 rem";
  displayText(".number", "?");
  correctNumber = numberCalc();
  document.querySelector(".number").style.width = "15rem";
});
