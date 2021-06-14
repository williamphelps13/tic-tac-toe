// querySelectors
var headerPlayer1Wins = document.getElementById('headerPlayer1Wins');
var turnHeader = document.getElementById('turnHeader')
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
// var allSquares = document.querySelectorAll('button');
var headerPlayer2Wins = document.getElementById('headerPlayer2Wins');

// Global Variables
var currentGame = new Game();

// Event Listeners
window.addEventListener('load', getWins);
gameBoard.addEventListener('click', placeToken);

// Functions
function getWins() {
 currentGame.playerOne.retrieveWinsFromStorage();
 currentGame.playerTwo.retrieveWinsFromStorage();
 addWinsToHeader()
}

function placeToken() {
  var dogTurnHeader = '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Dog_Emoji_large.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>';
  var catTurnHeader = '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Happy_cat_emoji.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>';
  var clickedSquare = event.target.closest('button');
  checkTurn(clickedSquare, dogTurnHeader, catTurnHeader)
  renderBoard(currentGame.board.one,`<img class="player-token" src="assets/Dog_Emoji_large.png" alt="Dog token for player one">`)
  renderBoard(currentGame.board.two, `<img class="player-token" src="assets/Happy_cat_emoji.png" alt="Cat token for player two">`)
  currentGame.checkForWinOne();
  currentGame.checkForWinTwo();
  currentGame.checkForDraw()
  updateOnWin(dogTurnHeader, catTurnHeader)
  currentGame.playerOne.saveWinsToStorage()
  currentGame.playerTwo.saveWinsToStorage()
  addWinsToHeader()
};

function checkTurn(clickedSquare, dogTurnHeader, catTurnHeader) {
  if (currentGame.turn % 2 === 0 && !currentGame.board.one.includes(Number(clickedSquare.id)) && !currentGame.board.two.includes(Number(clickedSquare.id))) {
    currentGame.board.one.push(Number(clickedSquare.id));
    turnHeader.innerHTML = catTurnHeader;
    changeTurn()
  } else if (currentGame.turn % 2 === 1 && !currentGame.board.one.includes(Number(clickedSquare.id)) && !currentGame.board.two.includes(Number(clickedSquare.id))) {
    currentGame.board.two.push(Number(clickedSquare.id));
    turnHeader.innerHTML = dogTurnHeader;
    changeTurn()
  }
};

function changeTurn() {
  currentGame.turn ++
};

function updateOnWin(dogTurnHeader, catTurnHeader) {
  if (currentGame.currentWinner === "one") {
    currentGame.currentWinner = null;
    turnHeader.innerHTML = '<img class="player-won" src="assets/Dog_Emoji_large.png" alt="Dog token for player one"><h2>won!</h2>';
    gameBoard.removeEventListener('click', placeToken)
    delayDisplay(dogTurnHeader, catTurnHeader)
  } else if (currentGame.currentWinner === "two") {
    currentGame.currentWinner = null;
    turnHeader.innerHTML = '<img class="player-won" src="assets/Happy_cat_emoji.png" alt="Cat token for player two"><h2> won!</h2>';
    gameBoard.removeEventListener('click', placeToken)
    delayDisplay(dogTurnHeader, catTurnHeader)
  } else if (currentGame.currentWinner === "draw") {
    currentGame.currentWinner = null;
    turnHeader.innerHTML = '<h2 class="player-draw">It\'s a draw!</h2>';
    gameBoard.removeEventListener('click', placeToken)
    delayDisplay(dogTurnHeader, catTurnHeader)
  }
};

function delayDisplay(dogTurnHeader, catTurnHeader) {
  setTimeout(function () {
    clearSquares()
    if (currentGame.turn % 2 === 0) {
      turnHeader.innerHTML = dogTurnHeader;
      gameBoard.addEventListener('click', placeToken);
    } else {
      turnHeader.innerHTML = catTurnHeader;
      gameBoard.addEventListener('click', placeToken);
  }}, 1500);
}

function clearSquares() {
  for (var i = 1; i <= 9; i++) {
    var squareNum = "square" + i;
    window[squareNum].innerHTML = '';
  }
};

function renderBoard(playerBoard, token) {
  for (var i = 1; i <= 9; i++) {
    var squareNum = "square" + i;
    if (playerBoard.includes(i)) {
      window[squareNum].innerHTML = token;
    }
  }
};

function addWinsToHeader() {
  headerPlayer1Wins.innerText = `${currentGame.playerOne.wins} wins`;
  headerPlayer2Wins.innerText = `${currentGame.playerTwo.wins} wins`;
};
