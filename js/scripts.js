var playerOne = 0;
var playerTwo = 0;
var currentScore=0
var playerOneScore = 0;
var playerTwoScore = 0;

function players(name){
  this.name;
  this.score=0;
}
function pickPlayer(){
  var player= [playerOne, playerTwo];
  return var player = Math.floor(Math.random());
}
function rollDice(){
  var numRolled = Math.floor(Math.random()*6)+1;
  currentScore += numRolled
}
function switchPlayer(){
  if (numRolled === 1) {
    alert("Sorry, you rolled a 1. You lose your current points and hold");
    disableHoldBtn();
  }
  else {
    alert("You have" +CurrentScore+ "points");
  }
}
