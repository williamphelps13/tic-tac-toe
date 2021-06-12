class Game {
  constructor() {
    this.board = {one: [], two: []};
    this.turn =
    this.playerOne = new Player('one', 'assets/Dog_Emoji_large.png', 0);
    this.playerTwo = new Player('two', 'assets/Happy_cat_emoji.png', 0);
  }

  checkForWinOne() {
    if (this.board.one.includes(1 && 2 && 3)) {
      console.log(`${this.playerOne["token"]} won!`);
      this.resetBoard();
    } else if (this.board.one.includes(4 && 5 && 6)) {
      console.log(`${this.playerOne["token"]} won!`);
      this.resetBoard();
    } else if (this.board.one.includes(7 && 8 && 9)) {
      console.log(`${this.playerOne["token"]} won!`);
      this.resetBoard();
    } else if (this.board.one.includes(1 && 4 && 7)) {
      console.log(`${this.playerOne["token"]} won!`);
      this.resetBoard();
    } else if (this.board.one.includes(2 && 5 && 8)) {
      console.log(`${this.playerOne["token"]} won!`);
      this.resetBoard();
    } else if (this.board.one.includes(3 && 6 && 9)) {
      console.log(`${this.playerOne["token"]} won!`);
      this.resetBoard();
    } else if (this.board.one.includes(1 && 5 && 9)) {
      console.log(`${this.playerOne["token"]} won!`);
      this.resetBoard();
    } else if (this.board.one.includes(3 && 5 && 7)) {
      console.log(`${this.playerOne["token"]} won!`);
      this.resetBoard();
    }
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
