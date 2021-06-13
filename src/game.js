class Game {
  constructor() {
    this.board = {one: [], two: []};
    this.turn = 0;
    this.playerOne = new Player('one', 'assets/Dog_Emoji_large.png', 0);
    this.playerTwo = new Player('two', 'assets/Happy_cat_emoji.png', 0);
  }

  checkBothPlayers() {
    this.checkForWin(this.board.one, this.playerOne)
    this.checkForWin(this.board.two, this.playerTwo)
  }

  checkForWin(playerBoard, player) {
    if ([1, 2, 3].every(i => playerBoard.includes(i))) {
      this.awardWinner(player)
    } else if ([4, 5, 6].every(i => playerBoard.includes(i))) {
      this.awardWinner(player)
    } else if ([7, 8, 9].every(i => playerBoard.includes(i))) {
      this.awardWinner(player)
    } else if ([1, 4, 7].every(i => playerBoard.includes(i))) {
      this.awardWinner(player)
    } else if ([2, 5, 8].every(i => playerBoard.includes(i))) {
      this.awardWinner(player)
    } else if ([3, 6, 9].every(i => playerBoard.includes(i))) {
      this.awardWinner(player)
    } else if ([1, 5, 9].every(i => playerBoard.includes(i))) {
      this.awardWinner(player)
    } else if ([3, 5, 7].every(i => playerBoard.includes(i))) {
      this.awardWinner(player)
    }
  }

  awardWinner(player) {
    this.addToWins(player);
    this.announceWin(player);
    this.resetBoard();
  }

  addToWins(player) {
    player.wins ++;
  }

  announceWin(player) {
    console.log(`${player["token"]} won!`);
  }

  checkForDraw() {
    if (this.board.one.length === 5 || this.board.two.length === 5) {
      console.log("It's a draw");
      this.resetBoard()
    }
  }

  resetBoard() {
    this.board.one = [];
    this.board.two = [];
  }
}


// GOAL: SATURDAY JUN 12
// - Make game fully playable without the DOM
// - Do updating of the Game.board data, etc, from your console


// "Fully Playable":

// Required Components:
// 1. Player Instances
// - this.playerOne = new Player('one', 'assets/Dog_Emoji_large.png', 0)
// - this.playerTwo = new Player('two', 'assets/Happy_cat_emoji.png', 0)
// - this.board =


// 1. Record of Game Board Data (where are the pieces)
  // -this.board


// 2. Record of Who's Turn it Currently Is
  // -this.turn

// 3. Check Game Board Date for Win
// - 1,2,3
// - 4,5,6
// - 7,8,9
// - 1,4,7
// - 2,5,8
// - 3,6,9
// - 1,5,9
// - 3,5,7


// 4. Check Game Board Data for Draw

// 5. Board Reset
// - window.setTimeout(function() {alert('Hello World!');}, 500);
