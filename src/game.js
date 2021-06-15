class Game {
  constructor() {
    this.board = {
      one: [],
      two: []
    };
    this.turn = 0;
    this.currentWinner = null;
    this.playerOne = new Player('one', 'assets/Dog_Emoji_large.png', 0);
    this.playerTwo = new Player('two', 'assets/Happy_cat_emoji.png', 0);
  }

  checkPlayers() {
    this.checkForWin(this.board.one, this.playerOne);
    this.checkForWin(this.board.two, this.playerTwo);
  }

  checkForWin(playerBoard, player) {
    var possibleWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

    for (var i = 0; i < possibleWins.length; i++) {
      if (possibleWins[i].every(num => playerBoard.includes(num))) {
        this.awardWinner(player);
      }
    }
  }

  awardWinner(player) {
    this.addToWins(player);

    if (player === this.playerOne) {
      this.currentWinner = 'one';
    } else if (player === this.playerTwo) {
      this.currentWinner = 'two';
    }

    this.resetBoard();
  }

  addToWins(player) {
    player.wins++;
  }

  checkForDraw() {
    if (this.board.one.length === 5 || this.board.two.length === 5) {
      this.currentWinner = 'draw';
      this.resetBoard();
    }
  }

  resetBoard() {
    this.board.one = [];
    this.board.two = [];
  }

  resetWins() {
    this.playerOne.wins = 0;
    this.playerTwo.wins = 0;
  }
};
