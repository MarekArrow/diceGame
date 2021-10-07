function  diceGame (){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".dice1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins! &#10024";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "&#10024 Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";}
};
