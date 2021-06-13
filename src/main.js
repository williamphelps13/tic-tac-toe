// querySelectors
var headerPlayer1Wins = document.querySelector("#headerPlayer1Wins");
var imageTurns = document.querySelector("#imageTurns");
var gameBoard = document.querySelector("#gameBoard");
var square1 = document.querySelector("#square1");
var square2 = document.querySelector("#square2");
var square3 = document.querySelector("#square3");
var square4 = document.querySelector("#square4");
var square5 = document.querySelector("#square5");
var square6 = document.querySelector("#square6");
var square7 = document.querySelector("#square7");
var square8 = document.querySelector("#square8");
var square9 = document.querySelector("#square9");
var headerPlayer2Wins = document.querySelector("#headerPlayer2Wins");

// Global Variables
var currentGame = new Game();

// Event Listeners
// window.addEventListener('load', retrieveWinsFromStorage)
gameBoard.addEventListener('click', placeToken)

// Functions
function placeToken() {

};


//click
//what is the closest square? >> 1
//if this.turn is even add that 1 to this.board.one
//if this.turn is odd add that 1 to this.board.one
//increment this.turn by 1
//loop through both this.board arrays and re-render board:
  //if in this.board.one .src(dog.img)
  //if in this.board.two .src(cat.img)
//add disable to button?
//checkForWin
//checkForDraw

//


//If Win then announceWin will run --> .innerText("🐶/🐱 won!") AND resetBoard AND saveWinsToStorage AND innerText(this.playerOne.wins) AND innerText(this.playerTwo.wins)

//If this.board.one/two.length === 5 --> .innerText("It's a draw")
