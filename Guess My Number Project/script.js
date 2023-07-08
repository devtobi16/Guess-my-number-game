"use strict";
console.log(document.querySelector(".message").textContent);
function displayText(className, message) {
  document.querySelector(className).textContent = message;
}
function numberCalc() {
  Math.trunc(Math.random() * 20) + 1;
}
/*Notes=> DOM stands for Document Object Model. It allows javascript to access 
html elements and styles to manipulate them. 
Note: DOM is not part of javascript. It is part of the web APIs that can
interact with JavaScript 
The differences between the "text Content" model and 'value' model are 
that the former is used for regular strings, while the latter is used 
for input values, and that 'value'can be used to set values in the input
field of the html
An event is something that happens on the page e.g a mouse click or a
key press. 
An event listener waits for an event to happen, and then reacts to
it.
The function in the event listener won't be called when the script is
executed, but only when the event happens.  <=Notes*/
// document.querySelector('.message').textContent = `🎉Correct Number!`;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = '?';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
let score = 20;
let highScore = 0;
let correctNumber = numberCalc();
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
    displayText(".message", guess > correctNumber ? `Too high` : `Too low`);
    if (score > 1) {
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
