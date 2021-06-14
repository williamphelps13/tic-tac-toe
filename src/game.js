class Game {
  constructor() {
    this.board = {one: [], two: []};
    this.turn = 0;
    this.currentWinner = null;
    this.playerOne = new Player(1, 'assets/Dog_Emoji_large.png', 0);
    this.playerTwo = new Player(2, 'assets/Happy_cat_emoji.png', 0);
  }

  checkForWinOne() {
    if ([1, 2, 3].every(num => this.board.one.includes(num))) {
      this.awardWinnerOne();
    } else if ([4, 5, 6].every(num => this.board.one.includes(num))) {
      this.awardWinnerOne();
    } else if ([7, 8, 9].every(num => this.board.one.includes(num))) {
      this.awardWinnerOne();
    } else if ([1, 4, 7].every(num => this.board.one.includes(num))) {
      this.awardWinnerOne();
    } else if ([2, 5, 8].every(num => this.board.one.includes(num))) {
      this.awardWinnerOne();
    } else if ([3, 6, 9].every(num => this.board.one.includes(num))) {
      this.awardWinnerOne();
    } else if ([1, 5, 9].every(num => this.board.one.includes(num))) {
      this.awardWinnerOne();
    } else if ([3, 5, 7].every(num => this.board.one.includes(num))) {
      this.awardWinnerOne();
    }
  }

  checkForWinTwo() {
    if ([1, 2, 3].every(num => this.board.two.includes(num))) {
      this.awardWinnerTwo();
    } else if ([4, 5, 6].every(num => this.board.two.includes(num))) {
      this.awardWinnerTwo();
    } else if ([7, 8, 9].every(num => this.board.two.includes(num))) {
      this.awardWinnerTwo();
    } else if ([1, 4, 7].every(num => this.board.two.includes(num))) {
      this.awardWinnerTwo();
    } else if ([2, 5, 8].every(num => this.board.two.includes(num))) {
      this.awardWinnerTwo();
    } else if ([3, 6, 9].every(num => this.board.two.includes(num))) {
      this.awardWinnerTwo();
    } else if ([1, 5, 9].every(num => this.board.two.includes(num))) {
      this.awardWinnerTwo();
    } else if ([3, 5, 7].every(num => this.board.two.includes(num))) {
      this.awardWinnerTwo();
    }
  }

  awardWinnerOne() {
    this.addToWins(this.playerOne);
    this.currentWinner = "one";
    this.resetBoard();
  }

  awardWinnerTwo() {
    this.addToWins(this.playerTwo);
    this.currentWinner = "two";
    this.resetBoard();
  }

  addToWins(player) {
    player.wins ++;
  }

  checkForDraw() {
    if (this.board.one.length === 5 || this.board.two.length === 5) {
      this.currentWinner = "draw";
      this.resetBoard();
    }
  }

  resetBoard() {
   this.board.one = [];
   this.board.two = [];
  }
};
