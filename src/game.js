class Game {
  constructor() {
    this.board = {playerOne:[], playerTwo: [],};
    this.playerOne = new Player('one', 'assets/Dog_Emoji_large.png', 0);
    this.playerTwo = new Player('two', 'assets/Happy_cat_emoji.png', 0);
  }
}

// GOAL:
// - Make game fully playable without the DOM
// - Do updating of the Game.board data, etc, from your console


// "Fully Playable":
// - this.board
// - Record of Game Board Data (where are pieces)


// - this.playerOne = new Player('one', '🐶', 0)
// - this.playerTwo = new Player('two', '🐱', 0)

// - Record of Who's Turn it Currently Is

// - Check Game Board Date for Win
// - 1,2,3 
// - 4,5,6
// - 7,8,9
// - 1,4,7
// - 2,5,8
// - 3,6,9
// - 1,5,9
// - 3,5,7
// - Check Game Board Data for Draw

// - Board Reset
