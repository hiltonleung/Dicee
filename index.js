var randNum1 = Math.ceil(Math.random()*6);
var randNum2 = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src", "images/dice".concat(randNum1, ".png"));
document.querySelector(".img2").setAttribute("src", "images/dice".concat(randNum2, ".png"));

if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randNum1 < randNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
