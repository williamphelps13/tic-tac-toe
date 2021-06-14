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
  renderBoard(currentGame.board.one,`<img class="player-token" src="assets/Dog_Emoji_large.png" alt="Dog token for player one">`)
  renderBoard(currentGame.board.two, `<img class="player-token" src="assets/Happy_cat_emoji.png" alt="Cat token for player two">`)
  currentGame.checkForDraw()
  currentGame.checkForWinOne();
  currentGame.checkForWinTwo();
  updateOnWin()

};

function checkTurn(clickedSquare) {
  if (currentGame.turn % 2 === 0 && !currentGame.board.one.includes(Number(clickedSquare.id)) && !currentGame.board.two.includes(Number(clickedSquare.id))) {
    currentGame.board.one.push(Number(clickedSquare.id));
    turnHeader.innerHTML =
    '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Happy_cat_emoji.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>';
    changeTurn()
  } else if (currentGame.turn % 2 === 1 && !currentGame.board.one.includes(Number(clickedSquare.id)) && !currentGame.board.two.includes(Number(clickedSquare.id))) {
    currentGame.board.two.push(Number(clickedSquare.id));
    turnHeader.innerHTML =
    '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Dog_Emoji_large.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>';
    changeTurn()
  }
};

function changeTurn() {
  currentGame.turn ++
};

function updateOnWin() {
  if (currentGame.currentWinner === "one") {
    turnHeader.innerHTML = '<img class="player-won" src="assets/Dog_Emoji_large.png" alt="Dog token for player one"><h2>won!</h2>';
    currentGame.currentWinner = null;
    setTimeout(function () {
    square1.innerHTML = "";
    square2.innerHTML = "";
    square3.innerHTML = "";
    square4.innerHTML = "";
    square5.innerHTML = "";
    square6.innerHTML = "";
    square7.innerHTML = "";
    square8.innerHTML = "";
    square9.innerHTML = "";
    if (currentGame.turn % 2 === 0) {
      turnHeader.innerHTML =
      '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Dog_Emoji_large.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>'
    } else {
      turnHeader.innerHTML =
      '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Happy_cat_emoji.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>'
    }}, 1000);
  } else if (currentGame.currentWinner === "two") {
    currentGame.currentWinner = null;
    turnHeader.innerHTML = '<img class="player-won" src="assets/Happy_cat_emoji.png" alt="Cat token for player two"><h2> won!</h2>';
    setTimeout(function () {
    square1.innerHTML = "";
    square2.innerHTML = "";
    square3.innerHTML = "";
    square4.innerHTML = "";
    square5.innerHTML = "";
    square6.innerHTML = "";
    square7.innerHTML = "";
    square8.innerHTML = "";
    square9.innerHTML = "";
    if (currentGame.turn % 2 === 0) {
      turnHeader.innerHTML =
      '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Dog_Emoji_large.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>'
    } else {
      turnHeader.innerHTML =
      '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Happy_cat_emoji.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>'
    }}, 1000);
  } else if (currentGame.currentWinner === "draw") {
    currentGame.currentWinner = null;
    turnHeader.innerHTML = '<h2>It\'s a draw!</h2>';
    setTimeout(function () {
    square1.innerHTML = "";
    square2.innerHTML = "";
    square3.innerHTML = "";
    square4.innerHTML = "";
    square5.innerHTML = "";
    square6.innerHTML = "";
    square7.innerHTML = "";
    square8.innerHTML = "";
    square9.innerHTML = "";
    if (currentGame.turn % 2 === 0) {
      turnHeader.innerHTML =
      '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Dog_Emoji_large.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>'
    } else {
      turnHeader.innerHTML =
      '<h2>It\'s</h2> <span> <img id="imageTurns" class="player-turn-token" src="assets/Happy_cat_emoji.png" alt="Turn toggle icon"> </span> <h2>\'s turn</h2>'
    }
    }, 1000);
  }
};

function renderBoard(playerBoard, token) {
  if (playerBoard.includes(1)) {
    square1.innerHTML = token; }
  if (playerBoard.includes(2)) {
    square2.innerHTML = token; }
  if (playerBoard.includes(3)) {
    square3.innerHTML = token; }
  if (playerBoard.includes(4)) {
    square4.innerHTML = token; }
  if (playerBoard.includes(5)) {
    square5.innerHTML = token; }
  if (playerBoard.includes(6)) {
    square6.innerHTML = token; }
  if (playerBoard.includes(7)) {
    square7.innerHTML = token; }
  if (playerBoard.includes(8)) {
    square8.innerHTML = token; }
  if (playerBoard.includes(9)) {
    square9.innerHTML = token; }
};
