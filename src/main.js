// querySelectors
var headerPlayer1Wins = document.getElementById('headerPlayer1Wins');
var imageTurns = document.getElementById('imageTurns');
var gameBoard = document.getElementById('gameBoard');
var square1 = document.getElementById('1');
var square2 = document.getElementById('2');
var square3 = document.getElementById('3');
var square4 = document.getElementById('4');
var square5 = document.getElementById('5');
var square6 = document.getElementById('6');
var square7 = document.getElementById('7');
var square8 = document.getElementById('8');
var square9 = document.getElementById('9');
var allSquares = document.querySelectorAll('button');
var headerPlayer2Wins = document.getElementById('headerPlayer2Wins');

// Global Variables
var currentGame = new Game();

// Event Listeners
gameBoard.addEventListener('click', function(event) {placeToken(event)});

// Functions
function placeToken(event) {
  event.preventDefault(event);
  var clickedSquare = event.target.closest('button');
  checkTurn(clickedSquare)
  changeTurn()
  currentGame.checkBothPlayers();
  renderBoard()
};

function checkTurn(clickedSquare) {
  if (currentGame.turn % 2 === 0) {
    currentGame.board.one.push(Number(clickedSquare.id));
    imageTurns.src = currentGame.playerTwo.token;
  } else if (currentGame.turn % 2 === 1) {
    currentGame.board.two.push(Number(clickedSquare.id));
    imageTurns.src = currentGame.playerOne.token;
  }
};

function changeTurn() {
  currentGame.turn ++
};

function renderBoard() {
  // for (var i = 0; i < currentGame.board.one; i++) {
    if (currentGame.board.one.includes(1)) {
       square1.innerHTML = `<img class="player-token" src="assets/Dog_Emoji_large.png" alt="Dog token for player one">`
    // }
  }
};

// RENDER BOARD FROM THIS.BOARD


// SHOW WIN PHRASE FROM AWARD AWARDWINNER
// SHOW DRAW PHRASE FROM CHECKFORDRAW
// STORE WINS IN LOCAL STORAGE
// RETRIEVE WINS FROM LOCAL STORAGE
// window.addEventListener('load', retrieveWinsFromStorage)
// DISPLAY WINS ON SIDE PANEL
// CLEAR BOARD



  // clickedSquare.innerHTML = `<img class="player-token" src="assets/Dog_Emoji_large.png" alt="Dog token for player one">`

  // clickedSquare.innerHTML = `<img class="player-token" src="assets/Happy_cat_emoji.png" alt="Cat token for player two">`
